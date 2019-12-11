import { Injectable } from '@angular/core';
import { log } from 'util';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private apiUrl = 'https://upacademytinder.herokuapp.com/api/users';
  private currentUser: any = {};

  constructor(
    private http: HttpClient
  ) { }

  /**
   * isAuthenticated
   */
  public isAuthenticated(): boolean {
    console.log("User Service IsAuth");
    if (this.currentUser.id) {
      return true;
    }else{
      return false;
    }
  }

  public login(username) {
    return this.http.get(this.apiUrl + '?filter={"where":{"username":"' + username + '"}}');
  }

  public setCurrentUser(user){
    this.currentUser = user;
  }
}
