import { Component, OnInit, NgModule } from '@angular/core';
import { SessionServiceService } from 'src/app/core/services/user-service/session-service.service';
import { Session } from 'src/app/core/models/session';



@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})


export class SessionsComponent implements OnInit {
  
  constructor(private sessionService: SessionServiceService) { }
  sessions: Session[] = [];
  step = 0;

  ngOnInit() {
    this.sessionService.getTodaySessions().subscribe((data: Session[] ) => {
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

}

