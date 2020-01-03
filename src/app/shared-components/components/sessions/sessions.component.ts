import { Component, OnInit, NgModule, Input, SimpleChanges } from '@angular/core';
import { SessionServiceService } from 'src/app/core/services/user-service/session-service.service';
import { Session } from 'src/app/core/models/session';
import { SubscriptionServiceService } from 'src/app/core/services/user-service/subscription-service.service';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { Subscription } from 'src/app/core/models/subscription';
import { User } from 'src/app/core/models/user';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  subButtons = true;
  subbed = false;
  uselessRows = true;
  questionButton = false;
  emptyHist = true;
  emptyQues = true;
  rows: User[];
  currentUser: User;
  private activeRoute;
  @Input() interval;
  currentRate = 8;
  subscriptionToEdit: Subscription;

  constructor(
    private sessionService: SessionServiceService,
    private subscriptionService: SubscriptionServiceService,
    private userService: UserServiceService,
    private modalService: NgbModal,
    private router: Router
  ) {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.activeRoute = event.urlAfterRedirects;
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    this.sessionService.initGetIntervalSessions(changes.interval.currentValue).subscribe((data: Session[]) => {
      this.sessionService.setSessions(data);
      this.initPanels(data);
      this.subButtons = true;
    });
  }

  ngOnInit() {
    console.log(this.activeRoute);

    switch (this.activeRoute) {
      case '/layout/day-sessions-view':
        this.sessionService.getTodaySessions().subscribe((data: Session[]) => {
          this.initPanels(data);
          this.subButtons = true;
          this.questionButton = false;
          this.emptyQues = false;
          this.emptyHist = false;
        });
        break;

      case '/layout/all-sessions-view':
        this.sessionService.initGetIntervalSessions(this.interval).subscribe((data: Session[]) => {
          this.sessionService.setSessions(data);
          this.initPanels(data);
          this.subButtons = true;
          this.questionButton = false;
          this.emptyQues = false;
          this.emptyHist = false;
        });
        break;

      case '/layout/history-view':
        this.sessionService.getPastSessions(this.userService.getCurrentUser().id).subscribe((data: Session[]) => {
          this.initPanels(data);
          this.questionButton = false;
          this.emptyHist = false;
          this.emptyQues = false;
          if (data.length == 0) {
            this.emptyHist = true;
          }
        });
        break;
      case '/layout/questions-view':
        this.sessionService.getSessionInUser(this.userService.getCurrentUser().id).subscribe((data: Session[]) => {
          this.initPanels(data);
          this.subButtons = false;
          this.uselessRows = false;
          this.questionButton = true;
          this.emptyQues = false;
          this.emptyHist = false;
          if (data.length == 0) {
            this.emptyQues = true;
          }
        });
        break;
    }

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
    this.subscriptionService.sub(this.userService.getUserId(), session, 'attendee').subscribe((data: Subscription) => {
      // console.log('INSCRIÇÃO COM ID : ' + data.id);
      this.subId[index] = data.id;
      this.sessions[index].subscribed = true;
      // console.log(this.subId);
      this.sessionService.getSubscribedCount(this.sessions[index].id).subscribe((data1: number) => this.sessions[index].subscribedCount = data1);
      // this.sessionService.getIfSubscribed(this.sessions[index].id,this.userService.getCurrentUser().id).subscribe((data2: boolean) => this.sessions[index].subscribed = data2);
    });
  }

  unsub(index) {
    this.subscriptionService.unsub(this.subId[index]).subscribe(data => {
      this.subId[index] = 0;
      this.sessions[index].subscribed = false;
      this.sessionService.getSubscribedCount(this.sessions[index].id).subscribe((data1: number) => this.sessions[index].subscribedCount = data1);
    });
  }

  initPanels(data: Session[]) {

    let i = 0;
    this.sessions = data;
    for (let index = 0; index < this.sessions.length; index++) {
      this.subId[index] = 0;
      this.sessions[index].sessionDate = this.sessions[index].sessionDate.slice(0, 16).replace("T", " ")
    }
    this.sessions.map(session => {

      this.sessionService.getSubscribedCount(session.id).subscribe((data1: number) => {
        session.subscribedCount = data1;
        if (data1 != 0) {
          this.subscriptionService.getAllUsersBySession(session.id).subscribe((data4:User[]) =>{
              session.users = data4;
          });
          this.subscriptionService.getAllSubsBySession(session.id).subscribe((data5: any) =>{ 
            console.log(data5);
              session.subs = data5;
              console.log(session.subs);
          });
        }

      });
      this.sessionService.getInstructor(session.id).subscribe((instructor: User) => {
        session.instructorName = instructor.name;
        if (instructor.id == this.userService.getCurrentUser().id) {
          session.isInstructor = true;
        } else {
          session.isInstructor = false;
        }

      });

      this.sessionService.getIfSubscribed(session.id, this.userService.getCurrentUser().id).subscribe((data2: boolean) => {
        session.subscribed = data2;
        if (session.subscribed) {
          this.subscriptionService.getSubscription(session.id, this.userService.getCurrentUser().id).subscribe((data3: Subscription) => {
            this.subId[i] = data3.id;
          })
        }

        i += 1;
      });

    });

  }

  setAttendance(id: number, i: number, y: number){
    this.subscriptionService.getSubscriptionById(id).subscribe((data: Subscription) =>{
      console.log("LOG DO SUBSCRPTION BY ID" , data);
      this.subscriptionToEdit = data;
      if (data.attended != "attended") {
        console.log("attended");
        this.subscriptionToEdit.attended = "attended";
        this.sessions[i].subs[y]['attended'] = "attended";
        console.log(this.sessions[i].subs[y]['attended']);
        //this.sessions[i].subs[y] = this.subscriptionToEdit;
      }else{
        console.log("missed");
        
        this.subscriptionToEdit.attended = "missed";
        this.sessions[i].subs[y]['attended'] = "missed";
      }
      this.subscriptionService.setAttendance(id,this.subscriptionToEdit).subscribe( response => {
        console.log(response);
      });
    });
  }

  open(content) {
    this.modalService.open(content);
  }



}
