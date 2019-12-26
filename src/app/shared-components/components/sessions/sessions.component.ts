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
      let i = 0;
      this.sessions = data;
      for (let index = 0; index < this.sessions.length; index++) {
        this.subId[index]=0;
      }
      // console.log(this.subId);
      
      this.sessions.map(session => { 
        // console.log('get today');
        
        this.sessionService.getSubscribedCount(session.id).subscribe((data1: number)=> {
          session.subscribedCount = data1;
          // console.log('get count');
        });
        this.sessionService.getIfSubscribed(session.id,this.userService.getCurrentUser().id).subscribe((data2: boolean) => {
          session.subscribed = data2;
          // console.log('get if subscribed');
          
          if(session.subscribed){
            this.subscriptionService.getSubscription(session.id,this.userService.getCurrentUser().id).subscribe((data3: Subscription) => {
              this.subId[i] = data3.id;
              // console.log('get subscription');
              
            })
          }
          i += 1;
          console.log(this.sessions);
          
        });
      });    
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
      console.log(this.subId);
      this.sessionService.getSubscribedCount(this.sessions[index].id).subscribe((data1: number)=>this.sessions[index].subscribedCount = data1);
      // this.sessionService.getIfSubscribed(this.sessions[index].id,this.userService.getCurrentUser().id).subscribe((data2: boolean) => this.sessions[index].subscribed = data2);
    });
  }

  unsub(index) {
    console.log(this.subId);
    this.subscriptionService.unsub(this.subId[index]).subscribe(data => {
      console.log('DESINSCRIÇÃO COM ID : ' + this.subId[index]);
      this.subId[index] = 0;
      this.sessions[index].subscribed = false;
      this.sessionService.getSubscribedCount(this.sessions[index].id).subscribe((data1: number)=>this.sessions[index].subscribedCount = data1);
      // this.sessionService.getIfSubscribed(this.sessions[index].id,this.userService.getCurrentUser().id).subscribe((data2: boolean) => this.sessions[index].subscribed = data2);
    });
  }

}
