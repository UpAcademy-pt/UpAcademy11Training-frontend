import { Injectable } from '@angular/core';
import { log } from 'util';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  private apiUrl = 'http://localhost:8080/Projeto-CTW/api/user/';
  private currentUser: User = new User();

  constructor(
    private http: HttpClient
  ) { }

  public isAuthenticated(): boolean {  
    if (this.currentUser) {
      console.log("LOGGED IN");
      
      return true;
    } else {
      return false;
    }
  }

  public setCurrentUser(user) {
    this.currentUser = user;
  }

  public login(emailUser, userpw) {
    console.log(emailUser, userpw);
    
    let user = {email: emailUser, password: userpw};
    return this.http.post(this.apiUrl + 'auth', user, {responseType: 'text'});
  }

  public registerUser(name: string, email: string, userpw: string) {
    let user = {'nome': name, 'email': email, 'password': userpw};
   return this.http.post(this.apiUrl, user, {responseType: 'text'});
    
  }
}




