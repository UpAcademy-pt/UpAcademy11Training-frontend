import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Session } from '../../models/session';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SessionServiceService {

    private apiUrl = 'http://localhost:8080/Projeto-CTW/api/trainingsession';
    /*  private currentSession: Session = new Session(); */
    private sessions: Session[];
    constructor(
        private http: HttpClient
    ) { }

    public createSession(title: string, local: string, sessionDate: string, capacity: number, reqs: string, duration: string) {
        let session = { 'title': title, 'localization': local, 'sessionDate': sessionDate, 'capacity': capacity, 'requirements': reqs, 'duration': duration };
        return this.http.post(this.apiUrl, session, { responseType: 'text' });
    }

    public getTodaySessions(): Observable<any> {
       return this.http.get(this.apiUrl + "/today");//no componente que chama o metodo.subscribe((data : Session[]) => this.sessions = data)
    }

    public getIntervalSessions(data1) {
       return this.http.post(this.apiUrl + '/interval', data1).subscribe((data : Session[]) => this.sessions = data);
    }
    /* public setCurrentSession(session) {
      session = JSON.parse(session);
      this.currentSession = session;
      console.log('SESSION' + session);
    } */
}


