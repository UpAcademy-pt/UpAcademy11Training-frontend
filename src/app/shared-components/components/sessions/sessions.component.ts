import { Component, OnInit, NgModule } from '@angular/core';
import { SessionServiceService } from 'src/app/core/services/user-service/session-service.service';
import { Session } from 'src/app/core/models/session';
import { SubscriptionServiceService } from 'src/app/core/services/user-service/subscription-service.service';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';



@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})


export class SessionsComponent implements OnInit {
  sessions: Session[] = [];
  step = 0;

  constructor(
    private sessionService: SessionServiceService,
    private subscriptionService: SubscriptionServiceService,
    private userService: UserServiceService
  ) { }


  ngOnInit() {
    this.sessionService.getTodaySessions().subscribe((data: Session[]) => {
      console.log(data);
      this.sessions = data;
    });
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  sub(session: number) {
console.log(session);

    this.subscriptionService.sub(this.userService.getUserId(), session, 'attendee')
    .subscribe(data=> console.log(data));
  }
}
