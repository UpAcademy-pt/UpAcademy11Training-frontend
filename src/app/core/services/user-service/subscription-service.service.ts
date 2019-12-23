import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from '../../models/subscription';
import { UserServiceService } from './user-service.service';
import { User } from '../../models/user';

@Injectable({
    providedIn: 'root'
})

export class SubscriptionServiceService {
    private apiUrl = 'http://localhost:8080/Projeto-CTW/api/subscription';
    private subscription: Subscription = new Subscription();
    private user;
    private usersInSession: User[];
    private session;
    private subType: string;

    constructor(
        private http: HttpClient,
        private userService: UserServiceService,
    ) { }

public sub(user: number, session: number, subType: string) {
    this.user = {id: this.userService.getUserId()};
    this.session = {id: session};
    let subscription = { 'user': this.user, 'trainingSession': this.session, 'subType': subType};
    return this.http.post(this.apiUrl, subscription);
}

public unsub(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
}

public getAllUsersBySession(sessionId: number) {
    return this.http.get(this.apiUrl + '/session/' + sessionId + '/user/count').
    subscribe((data: User[]) => this.usersInSession = data);

}

}
