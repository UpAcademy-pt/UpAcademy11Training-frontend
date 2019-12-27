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
  public email = 'eng.joao.barreto@gmail.com';
  public userpw = '1';

  constructor(
    private router: Router,
    private userService: UserServiceService,
    private modalService: NgbModal,
   ) { }

ngOnInit() {
 // console.log('cheguei');
  }

  public login() {
   // console.log(this.email, this.userpw);
    this.userService.login(this.email, this.userpw).subscribe((data) => {
     console.log(data);
      this.userService.setCurrentUser(data);
      this.router.navigate(['layout/day-sessions-view']);
    });
  }


  returnKeys(obj) {
    return Object.keys(obj);
  }

  open(content) {
    this.modalService.open(content);
  }

}

