import { User } from './user';

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

    constructor(data?: any) {
        Object.assign(this, data);
    }
}
