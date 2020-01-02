import { Injectable } from '@angular/core';
import { log } from 'util';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../models/user';
import { EmailValidator } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SessionServiceService } from './session-service.service';
import { SubscriptionServiceService } from './subscription-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private apiUrl = 'http://localhost:8080/Projeto-CTW/api/user/';
  private currentUser: User = new User();
  constructor(
    private sessionService: SessionServiceService,
    private http: HttpClient,
    private router: Router
  ) { }

  public isAuthenticated(): boolean {
    //console.log(this.currentUser.id);

    if (this.currentUser.id) {
      // console.log('LOGGED IN');

      return true;
    } else {
      return false;
    }
  }

  public setCurrentUser(user) {
    user = JSON.parse(user);
    this.currentUser = user;
    // console.log('USER' + user);
  }

  public getCurrentUser() {
    return this.currentUser;
  }

  public login(emailUser, userpw) {
    /* let user = new User();
    user.password = userpw;
    user.email=emailUser; */
    let user = { email: emailUser, password: userpw };
    ;




    return this.http.post(this.apiUrl + 'auth', user, { responseType: 'text' });
  }

  public registerUser(name: string, email: string, userpw: string) {
    let user = { 'name': name, 'email': email, 'password': userpw };
    return this.http.post(this.apiUrl, user, { responseType: 'text' });
  }

  public getAllUsers(): Observable<any> {

    return this.http.get(this.apiUrl);
  }

  public setSessionInUser(): Observable<any> {

    return this.http.get(this.apiUrl);
  }

  public getUserId() {
    return this.currentUser.id;
  }

  public logOut() {
    this.currentUser = new User();
    this.sessionService.logout();
    this.router.navigate(['/login']);
  }

  public editUser(name, email) {
    let user = new User();
    user = this.currentUser;
    user.name = name;
    user.email = email;

    return this.http.put(this.apiUrl, user).subscribe((data: User) => {

      this.currentUser.name = data.name;
      this.currentUser.email = data.email;

    });


  }

  public removeUser(id) {
   return this.http.delete(this.apiUrl + id);
  }
  onUpload(selectedFile, name) {
    const uploadData = new FormData();
    uploadData.append('uploadedFile', selectedFile, name);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    let options = { headers: headers };
    this.http.post(this.apiUrl + "/"+ this.currentUser.id, uploadData, options)
      .subscribe(data => {
        console.log(data);
      });
  }

  getImage(){
    return this.http.get('http://localhost:8080/stockApi2/api/users/image', {responseType: 'blob'});
  }

}





