import { Injectable } from '@angular/core';
import { log } from 'util';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  private apiUrl = 'http://localhost:8080/Projeto-CTW/api/user/';
  private currentUser: any = {};

  constructor(
    private http: HttpClient
  ) { }

  public isAuthenticated(): boolean {
    console.log('User Service isAuth');
    if (this.currentUser.id) {
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

  registerUser(name: string, email: string, userpw: string) {
    let user = {'name': name, 'email': email, 'password': userpw};
    return this.http.post(this.apiUrl, user, {responseType: 'text'});


  }
}




