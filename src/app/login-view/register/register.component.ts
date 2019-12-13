import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
public name = '';
public email = '';
public userpw = '';

constructor(
  private router: Router,
  private userService: UserServiceService,
  private modalService: NgbModal,
 ) { }

  ngOnInit() {
  }

public registerUser () {
  this.userService.registerUser(this.name, this.email, this.userpw).subscribe((data) => {
    console.log(data);
    this.userService.setCurrentUser(data[0]);
    this.router.navigate(['/']);
  });
}

}
