import { Component, OnInit, NgModule } from '@angular/core';
import { SessionServiceService } from 'src/app/core/services/user-service/session-service.service';
import { Session } from 'src/app/core/models/session';
import { SubscriptionServiceService } from 'src/app/core/services/user-service/subscription-service.service';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { Subscription } from 'src/app/core/models/subscription';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})

export class SessionsComponent implements OnInit {
  sessions: Session[] = [];
  step = 0;
  subId = [];
  subButton = true;
  subbed = false;

  constructor(
    private sessionService: SessionServiceService,
    private subscriptionService: SubscriptionServiceService,
    private userService: UserServiceService,
  ) { }


  ngOnInit() {
    this.sessionService.getTodaySessions().subscribe((data: Session[]) => {
      console.log(data);
      this.sessions = data;
      this.sessions.map(session => { session.subscribed = false; });
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

  sub(session: number, index) {
    this.subscriptionService.sub(this.userService.getUserId(), session, 'attendee').subscribe((data:Subscription) => {
      console.log('INSCRIÇÃO COM ID : ' + data.id);
      this.subId[index] = data.id;
      this.sessions[index].subscribed = true;
    });
  }

  unsub(index) {
    console.log(this.subId);
    this.subscriptionService.unsub(this.subId[index]).subscribe(data => {
      console.log('DESINSCRIÇÃO COM ID : ' + this.subId[index]);
      this.subId[index] = 0;
      this.sessions[index].subscribed = false;
    });
  }
}
