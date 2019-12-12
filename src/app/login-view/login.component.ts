import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../core/services/user-service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username = '';
  constructor(
    private router: Router, 
    private userService: UserServiceService
  ) { }

  ngOnInit() {
  }

  public login(){
    this.userService.login(this.username).subscribe((data) => {
      console.log(data);
      this.userService.setCurrentUser(data[0]);
      this.router.navigate(['/day-sessions-view']);
    });
  }

}
