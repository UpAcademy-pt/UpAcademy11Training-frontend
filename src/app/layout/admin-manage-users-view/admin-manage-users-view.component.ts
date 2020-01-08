import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { Session } from 'src/app/core/models/session';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { SessionServiceService } from 'src/app/core/services/user-service/session-service.service';
import { SubscriptionServiceService } from 'src/app/core/services/user-service/subscription-service.service';
import { Subscription } from 'src/app/core/models/subscription';

@Component({
  selector: 'app-admin-manage-users-view',
  templateUrl: './admin-manage-users-view.component.html',
  styleUrls: ['./admin-manage-users-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminManageUsersViewComponent implements OnInit {
  currentIndex: any;
  private viewSessions: boolean[];

  constructor(private userService: UserServiceService,
    private sessionService: SessionServiceService,
    private subscriptionService: SubscriptionServiceService,
    config: NgbModalConfig,
    private modalService: NgbModal) { }

  users: User[] = [];
  sessionsInUser: Session[] = [];
  attendanceList: string[] = [];
  currentUser = this.userService.getCurrentUser().id;

  ngOnInit() {
    this.userService.getAllUsers().subscribe((data: User[]) => {
      this.users = data;
      this.users.forEach(user => {
        this.sessionService.getSessionInUser(user.id).subscribe((data: Session[]) => {
          user.sessions = data;
        });
      });
    });
  }

  open(content, index) {
    this.sessionService.getSessionInUser(this.users[index].id).subscribe((data: Session[]) => {
      this.sessionsInUser = data;
      for (let i = 0; i < this.sessionsInUser.length; i++) {
        const session = this.sessionsInUser[i];
        this.subscriptionService.getSubscription(session.id, this.users[index].id).subscribe((data1: Subscription) => {
          this.attendanceList.push(data1.attended);
        });
      }
    this.modalService.open(content);
  });
}

openConfirm(contentConfirmation, i: number) {
  this.modalService.open(contentConfirmation);
  this.currentIndex = i;
}

removeUser() {

  this.modalService.dismissAll();
  this.userService.removeUser(this.users[this.currentIndex].id).subscribe((data) => {
    this.users.splice(this.currentIndex, 1);
  })
}

}
