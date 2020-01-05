import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionServiceService } from 'src/app/core/services/user-service/session-service.service';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { User } from 'src/app/core/models/user';


@Component({
  selector: 'app-admin-manage-sessions-view',
  templateUrl: './admin-manage-sessions-view.component.html',
  styleUrls: ['./admin-manage-sessions-view.component.scss']
})
export class AdminManageSessionsViewComponent implements OnInit {

  private title = '';
  private location = '';
  private sessionDate = '';
  private capacity = 0;
  private requirements = '';
  private duration = '';
  private instructor = 0;

  constructor(config: NgbModalConfig,
    private modalService: NgbModal,
    private sessionService: SessionServiceService,
    private userService: UserServiceService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  users: User[] = [];


  ngOnInit() {
    this.userService.getAllUsers().subscribe((data: User[]) => {
      this.users = data;

    });
  }

  selectedDeviceObj = this.users[1];

  onChangeObj(newObj) {
    this.selectedDeviceObj = newObj;
  }

  open(content) {
    this.modalService.open(content, { scrollable: true });
  }

  create() {
    let date = this.sessionDate.replace("T", " ");
    console.log(this.sessionDate);
    this.sessionService.createSession(this.title, this.location, date, this.capacity,
      this.requirements, this.duration, this.instructor).subscribe(data => {
        this.title = '';
        this.location = '';
        this.sessionDate = '';
        this.capacity = 0;
        this.requirements = '';
        this.duration = '';
        this.instructor = 0;
      });
  }

}




