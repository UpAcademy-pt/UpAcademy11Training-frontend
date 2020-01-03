import { User } from './user';
import { Subscription } from 'rxjs';

export class Session {
    'id'?: number;
    'title': string;
    'location': string;
    'sessionDate': string;
    'capacity': number;
    'requirements': string;
    'duration': string;
    'instructor': number;
    'instructorName' : string;
    'subscribed': boolean;
    'subscribedCount': number;
    'isInstructor': boolean;
    'users': User[];
    'subs': Subscription[];

    constructor(data?: any) {
        Object.assign(this, data);
    }
}
