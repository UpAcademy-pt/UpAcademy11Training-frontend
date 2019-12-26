import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-manage-users-view',
  templateUrl: './admin-manage-users-view.component.html',
  styleUrls: ['./admin-manage-users-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminManageUsersViewComponent implements OnInit {

  constructor(private userService: UserServiceService, config: NgbModalConfig, private modalService: NgbModal){ }

  
  users : User[] = [];
  
  /* currentUserSessions :  { this.user.sessions} ;
 */
  ngOnInit() {

    this.userService.getAllUsers().subscribe((data:any) => {

     // console.log(data);
      this.users = data;  

    });
     

  }
  open(content){
    this.modalService.open(content);
  }
  
 

  

  
}
