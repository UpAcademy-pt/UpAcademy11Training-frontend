import { Component, OnInit, NgModule } from '@angular/core';


@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})


export class SessionsComponent implements OnInit {

  constructor() { }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  
  ngOnInit() {
  }

}

