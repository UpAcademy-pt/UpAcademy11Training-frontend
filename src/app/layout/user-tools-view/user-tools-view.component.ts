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
  selectedFile: any;
  showImage: boolean;
  imgUrl: any;



  constructor(private userService: UserServiceService,
    private modalService: NgbModal
    , private sanitizer: DomSanitizer) { }
  private name = '';
  private email = '';



  ngOnInit() {

  }

  open(content) {
    this.modalService.open(content);
  }

  /* Adicionar metodo email check para validar se os e-mails inseridos sao iguais */
  editUser() {
    this.modalService.dismissAll();
    this.userService.onUpload(this.selectedFile, this.selectedFile.name);
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
