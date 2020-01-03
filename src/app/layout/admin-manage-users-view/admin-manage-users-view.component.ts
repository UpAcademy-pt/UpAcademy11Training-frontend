import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { Session } from 'src/app/core/models/session';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { SessionServiceService } from 'src/app/core/services/user-service/session-service.service';

@Component({
  selector: 'app-admin-manage-users-view',
  templateUrl: './admin-manage-users-view.component.html',
  styleUrls: ['./admin-manage-users-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminManageUsersViewComponent implements OnInit {

  constructor(private userService: UserServiceService, private sessionService: SessionServiceService, config: NgbModalConfig, private modalService: NgbModal) { }


  users: User[] = [];

  sessionsInUser: Session[] = [];
  currentUser = this.userService.getCurrentUser().id;


  ngOnInit() {

    this.userService.getAllUsers().subscribe((data: User[]) => {
      this.users = data;

    });


  }
  open(content, index) {

    this.sessionService.getSessionInUser(this.users[index].id).subscribe((data: Session[]) => {
      this.sessionsInUser = data;
      this.modalService.open(content);


    });
  }
  removeUser(id) {
    this.userService.removeUser(this.users[id].id).subscribe((data) => {
      this.users.splice(id, 1);


    })
  }

}
