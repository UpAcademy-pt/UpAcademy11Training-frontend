import { Injectable } from '@angular/core';
import { log } from 'util';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { EmailValidator } from '@angular/forms';
import { Observable } from 'rxjs';

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
    console.log(this.currentUser.id);

    if (this.currentUser.id) {
      console.log("LOGGED IN");

      return true;
    } else {
      return false;
    }
  }

  public setCurrentUser(user) {
    user = JSON.parse(user);
    this.currentUser = user;
    console.log('USER' + user);
  }

  public getCurrentUser() {
    return this.currentUser;
  }

  public login(emailUser, userpw) {
    /* let user = new User();
    user.password = userpw;
    user.email=emailUser; */
    let user = { email: emailUser, password: userpw };
    return this.http.post(this.apiUrl + 'auth', user, { responseType: 'text' });
  }

  public registerUser(name: string, email: string, userpw: string) {
    let user = { 'nome': name, 'email': email, 'password': userpw };
    return this.http.post(this.apiUrl, user, { responseType: 'text' });
  }

  public getAllUsers(): Observable<any>{

    return this.http.get(this.apiUrl);
  }

  public setSessionInUser(): Observable<any>{

    return this.http.get(this.apiUrl);
  }

  public getUserId() {
    return this.currentUser.id;
  }

}





