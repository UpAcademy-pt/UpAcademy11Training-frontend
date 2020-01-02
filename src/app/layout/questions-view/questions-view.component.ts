import { Component, OnInit } from '@angular/core';
import { SessionServiceService } from 'src/app/core/services/user-service/session-service.service';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';

@Component({
  selector: 'app-questions-view',
  templateUrl: './questions-view.component.html',
  styleUrls: ['./questions-view.component.scss']
})
export class QuestionsViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
