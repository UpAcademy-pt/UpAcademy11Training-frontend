import { Injectable } from '@angular/core';
import { log } from 'util';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  private apiUrl = 'localhost:8080/Projeto-CTW/api/user/';
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

  public login(email, userpw) {
    let user = {'email': email, 'password': userpw};
    return this.http.post(this.apiUrl + 'auth', user);
  }

  registerUser(name: string, email: string, userpw: string) {
    let user = {'name': name, 'email': email, 'password': userpw};
    return this.http.post(this.apiUrl, user);


  }
}




