import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { $ } from 'protractor';



@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  private name = '';
  private email = '';
  private userpw = '';
  private userpwc = '';
  private errorMsg = false;
  private activeRoute;
  private progressBar = false;
  private dropDownButton = false;
  private userFace = false;
  private registerButton = true;

  constructor(
    private userService: UserServiceService,
    private modalService: NgbModal,
    private router: Router
  ) {
    this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.activeRoute = event.urlAfterRedirects;
      if (this.activeRoute != '/login') {
        this.progressBar = true;
        this.dropDownButton = true;
        this.userFace = true;
        this.registerButton = false;
      }else{
        this.progressBar = false;
        this.dropDownButton = false;
        this.userFace = false;
        this.registerButton = true;
      }
    });
  }

  ngOnInit() {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    this.errorMsg = false;
  }

  register() {
      if (this.userpw == this.userpwc ) {
        this.userService.registerUser(this.name, this.email, this.userpw).subscribe( data => {
          console.log(data);
          this.modalService.dismissAll();
          this.name = '';
          this.email = '';
          this.userpw = '';
          this.userpwc = '';
        });
      } else {
        this.errorMsg = true;
      }
  }

  logOut(side){ 
    this.userService.logOut();
  }

 
}
