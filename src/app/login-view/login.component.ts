import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../core/services/user-service/user-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DropDownComponent } from '../shared-components/components/header/drop-down/drop-down.component';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email = 'admin@criticaltechworks.com';
  public userpw = 'critical';

  constructor(
    private router: Router,
    private userService: UserServiceService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    // console.log('cheguei');
  }

  public login(content) {

      this.userService.login(this.email, this.userpw).subscribe(
        (data) => {
        console.log(data);
        this.userService.setCurrentUser(data);
        this.router.navigate(['layout/day-sessions-view']); },
      error => {
        this.open(content);
      });
  }

    returnKeys(obj) {
      return Object.keys(obj);
    }

  public open(content) {
    this.modalService.open(content);
  }

}

