import { User } from './user';
import { Session } from 'protractor';

export class Subscription {
    'id'?: number;
    'user': User;
    'trainingSession': Session;
    'subType': string;
    'attended': any;
    'answers': string[];
    'questions': string[];
    'answered': boolean = false;
    constructor(data?: any) {
        Object.assign(this, data);
    }
}
