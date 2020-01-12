import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  private name = '';
  private email = '';
  private userpw = '';
  private userpwc = '';
  private errorMsg = false;
  private activeRoute;
  private progressBar = false;
  private dropDownButton = false;
  private userFace = false;
  private registerButton = true;
  private isAdmin = false;
  selectedFile: any;
  showImage: boolean;
  imgUrl: any;

  constructor(
    private userService: UserServiceService,
    private modalService: NgbModal,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.activeRoute = event.urlAfterRedirects;
      if (this.activeRoute !== '/login') {
        if (this.userService.getCurrentUser().role === 'admin') {
          this.isAdmin = true;
        } else {
          this.isAdmin = false;
        }
        this.progressBar = true;
        this.dropDownButton = true;
        console.log(this.dropDownButton);
        this.userFace = true;
        this.registerButton = false;
      } else {
        this.progressBar = false;
        this.dropDownButton = false;
        this.userFace = false;
      }
    });
  }

  ngOnInit() {

  }

  open(content) {
    this.modalService.open(content);
    this.name = '';
    this.email = '';
    this.userpw = '';
    this.userpwc = '';
    this.errorMsg = false;
  }

  register(userCreated) {
    if (this.userpw == this.userpwc) {
      this.userService.registerUser(this.name, this.email, this.userpw).subscribe(data => {
        this.modalService.dismissAll();
        this.modalService.open(userCreated);
      });
      this.onUpload();
    } else {
      this.errorMsg = true;
    }
  }

  logOut(side) {
    this.userService.logOut();
    this.registerButton = true;
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]; const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onloadend = () => {
      const base64data = reader.result;
      this.showImage = true;
      this.imgUrl = this.sanitizer.bypassSecurityTrustUrl(base64data.toString());
    };
  }

  onUpload() {
    this.userService.onUpload(this.selectedFile, this.selectedFile.name);
  }

}
