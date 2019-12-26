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
        return this.http.post(this.apiUrl, session, { responseType: 'text' });
    }

    public getTodaySessions(): Observable<any> {
        return this.http.get(this.apiUrl + '/today');
        // no componente que chama o metodo.subscribe((data : Session[]) => this.sessions = data)
    }

    public getIntervalSessions(data1) {
        return this.http.post(this.apiUrl + '/interval', data1).subscribe((data: Session[]) => this.sessions = data);
    }

    public getSessionId() {
        return this.sessions;
    }

    public getSubscribedCount(sessionId) {

        return this.http.get("http://localhost:8080/Projeto-CTW/api/subscription/session/"+sessionId+"/user/count");
    }

    public getIfSubscribed(sessionId: number, userId: number) {
        return this.http.get("http://localhost:8080/Projeto-CTW/api/subscription/session/"+sessionId+"/user/"+userId);
      }

    public getInstructor(sessionId: number) {
        return this.http.get("http://localhost:8080/Projeto-CTW/api/subscription/session/"+sessionId+"/instructor");
      }

    public logout() {
        this.sessions = [];
      }
}



