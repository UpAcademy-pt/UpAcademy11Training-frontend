import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { type } from 'os';
import { User } from 'src/app/core/models/user';
import { NgForm}  from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-tools-view',
  templateUrl: './user-tools-view.component.html',
  styleUrls: ['./user-tools-view.component.scss']
})
export class UserToolsViewComponent implements OnInit {


  
  constructor ( private userService: UserServiceService,  private modalService: NgbModal){}
  private name ='';
  private email = '';
 
  

  ngOnInit() {

  }

  open(content) {
    this.modalService.open(content);
  }

  /* Adicionar metodo email check para validar se os e-mails inseridos sao iguais */
  editUser(){
    this.userService.editUser(this.name, this.email);
    this.modalService.dismissAll();
  }

  
  /* TODO: Adicionar metodo password check ao editUser */
  
  /* public pwCheck(){
    
  } */
};
