import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../core/services/user-service/user-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DropDownComponent } from '../shared-components/components/header/drop-down/drop-down.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email = '';
  public userpw = '';

  constructor(
    private router: Router,
    private userService: UserServiceService,
    private modalService: NgbModal,
   ) { }

ngOnInit() {
  console.log('cheguei');
  }

  public login() {
    console.log(this.email, this.userpw);
    this.userService.login(this.email, this.userpw).subscribe((data) => {
      console.log(data);
      this.userService.setCurrentUser(data);

      this.router.navigate(['/day-sessions-view']);
      
      
/*       <img src="https://www.criticaltechworks.com/img/_6AaJMV5c-logo_banner.svg" width="10%">
      <mat-icon *ngIf="this.userFace" class="icon">account_circle</mat-icon>
      <mat-progress-bar *ngIf="this.progressBar" class="bar" mode="determinate" value="40">
      </mat-progress-bar>
      <span class="example-fill-remaining-space"></span>
        <button mat-icon-button>
        <mat-icon *ngIf="this.dropDownButton" (click)="sidenav.toggle()">menu</mat-icon> */

    });
  }


  returnKeys(obj) {
    return Object.keys(obj);
  }

  open(content) {
    this.modalService.open(content);
  }

}

