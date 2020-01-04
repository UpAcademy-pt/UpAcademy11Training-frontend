import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Session } from '../../models/session';
import {  Observable} from 'rxjs';



@Injectable({
    providedIn: 'root'
})

export class SessionServiceService {


    private apiUrl = 'http://localhost:8080/Projeto-CTW/api/trainingsession';
    /*  private currentSession: Session = new Session(); */
    private sessions: Session[];

    constructor(private http: HttpClient) {}

    public createSession(
        title: string, local: string, sessionDate: string, capacity: number, reqs: string, duration: string, instructor: number) {
        let session = {
            'title': title,
            'location': local,
            'sessionDate': sessionDate,
            'capacity': capacity,
            'requirements': reqs,
            'duration': duration,
            'instructor': instructor
        };
        return this.http.post(this.apiUrl, session);
    }

    public getTodaySessions(): Observable<any> {
        return this.http.get(this.apiUrl + '/today');
        // no componente que chama o metodo.subscribe((data : Session[]) => this.sessions = data)
    }

    public initGetIntervalSessions(interval): any {

        var dateFormat = require('dateformat');

        return this.http.post(this.apiUrl + '/interval', dateFormat(interval, "yyyy-mm-dd HH:MM"));
    }

    public getIntervalSessions(data1) {
        return this.http.post(this.apiUrl + '/interval', data1).subscribe((data: Session[]) => this.sessions = data);
    }

    public getSessionId() {
        return this.sessions;
    }

    public setSessions(sessionsArray) {
        this.sessions = sessionsArray;
    }

    public getSubscribedCount(sessionId) {

        return this.http.get("http://localhost:8080/Projeto-CTW/api/subscription/session/" + sessionId + "/user/count");
    }

    public getIfSubscribed(sessionId: number, userId: number) {
        return this.http.get("http://localhost:8080/Projeto-CTW/api/subscription/session/" + sessionId + "/user/" + userId);
    }

    public getInstructor(sessionId: number) {
        return this.http.get("http://localhost:8080/Projeto-CTW/api/subscription/session/" + sessionId + "/instructor");
    }

    public logout() {
        this.sessions = [];
    }

    public getSessionInUser(userId: number): any {

        return this.http.get(this.apiUrl + '/user/' + userId)
    }

    getUnansweredSessionInUser(userId: number) {
        return this.http.get(this.apiUrl + "/unanswered/user/" + userId);
    }

    public getPastSessions(userId) {

        return this.http.get(this.apiUrl + "/past/user/" + userId);
    }

    public getAllUsersBySession(sessionId: number): any {
        console.log("ENTREI");

        return this.http.get('http://localhost:8080/Projeto-CTW/api/user/session/' + sessionId);

    }
}



