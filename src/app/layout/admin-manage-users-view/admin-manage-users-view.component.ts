import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';

@Component({
  selector: 'app-admin-manage-users-view',
  templateUrl: './admin-manage-users-view.component.html',
  styleUrls: ['./admin-manage-users-view.component.scss']
})
export class AdminManageUsersViewComponent implements OnInit {

  constructor(private userService: UserServiceService) { }

  users : User[] = [];
  /* currentUserSessions :  { this.user.sessions} ;
 */
  ngOnInit() {

    this.userService.getAllUsers().subscribe((data:User[]) => {

      console.log(data);
      this.users = data;
    });
  }

}
