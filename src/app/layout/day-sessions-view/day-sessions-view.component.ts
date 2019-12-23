import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-day-sessions-view',
  templateUrl: './day-sessions-view.component.html',
  styleUrls: ['./day-sessions-view.component.scss']
})
export class DaySessionsViewComponent implements OnInit {
 
  public user: User;

  constructor(
    private userService: UserServiceService
  ) {
    this.user = userService.getCurrentUser();
    console.log(this.user.nome);

  }

  ngOnInit() {
  }


}
