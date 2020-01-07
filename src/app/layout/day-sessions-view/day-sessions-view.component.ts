import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { User } from 'src/app/core/models/user';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-day-sessions-view',
  templateUrl: './day-sessions-view.component.html',
  styleUrls: ['./day-sessions-view.component.scss']
})
export class DaySessionsViewComponent implements OnInit {

  public user: User;
  showImage: boolean;
  imgUrl: any;
  progressValue: number = 0;
  progressValueText: number = 0;

  constructor(
    private userService: UserServiceService,
    private sanitizer: DomSanitizer
  ) {
    this.user = userService.getCurrentUser();


  }

  ngOnInit() {
  this.userService.getProgress().subscribe((data: number) =>{
    if (data > 0) {
      this.progressValueText = Math.floor(((data*10)/60)/10);
      this.progressValue = (data*100)/2400;
    }
    
    console.log(this.progressValue);
    
  });
    this.userService.getImage().subscribe( data => {
      const reader = new FileReader();
      reader.readAsDataURL(data);
      reader.onloadend = () => {
        const base64data = reader.result;
        this.showImage = true;
        this.imgUrl = this.sanitizer.bypassSecurityTrustUrl(base64data.toString());
      }
    });
  }


}
