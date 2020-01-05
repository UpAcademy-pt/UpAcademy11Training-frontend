import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { type } from 'os';
import { User } from 'src/app/core/models/user';
import { NgForm } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-user-tools-view',
  templateUrl: './user-tools-view.component.html',
  styleUrls: ['./user-tools-view.component.scss']
})
export class UserToolsViewComponent implements OnInit {
  private name = this.userService.getCurrentUser().name;
  private email = this.userService.getCurrentUser().email;
  private password = this.userService.getCurrentUser().password;

  selectedFile: any;
  showImage: boolean;
  imgUrl: any = this.userService.getCurrentUser().imgUrl;



  constructor(private userService: UserServiceService,
    private modalService: NgbModal
    , private sanitizer: DomSanitizer) { }
  



  ngOnInit() {

  }

  open(content) {
    this.modalService.open(content);
  }

  /* Adicionar metodo email check para validar se os e-mails inseridos sao iguais */
  editUser() {
    this.modalService.dismissAll();
    if (this.userService.login(this.userService.getCurrentUser().email,this.password)) {
      this.userService.editUser(this.name, this.email, this.password);
      this.userService.onUpload(this.selectedFile, this.selectedFile.name);
    }
    
    /* this.userService.editUser(this.name, this.email); */
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]; const reader = new FileReader();
    //to preview image before upload
    reader.readAsDataURL(this.selectedFile);
    reader.onloadend = () => {
      const base64data = reader.result;
      this.showImage = true;
      this.imgUrl = this.sanitizer.bypassSecurityTrustUrl(base64data.toString());
    }
  }


  /* TODO: Adicionar metodo password check ao editUser */

  /* public pwCheck(){
    
  } */
};
