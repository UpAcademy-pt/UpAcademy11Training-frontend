import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { type } from 'os';
import { User } from 'src/app/core/models/user';
import { NgForm}  from '@angular/forms';
@Component({
  selector: 'app-user-tools-view',
  templateUrl: './user-tools-view.component.html',
  styleUrls: ['./user-tools-view.component.scss']
})
export class UserToolsViewComponent implements OnInit {


  
  constructor( private userService: UserServiceService) {}
  private name ='';
  private email = '';

  ngOnInit() {
  }



  editUser() {
    this.name;
    this.email;
  };

  public confirm(){
    
}

};
export class SimpleNgModelComp {

  constructor ( private userService : UserServiceService){}

  name: string = '';
  email: string = '';
  setValue() { this.name = this.name ; this.email = this.email }
}