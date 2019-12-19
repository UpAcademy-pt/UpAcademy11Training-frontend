import { User } from './user';
import { Session } from 'protractor';

export class Subscription {
    'user': User;
    'trainingSession': Session;
    'subType': string;
    constructor(data?: any) {
        Object.assign(this, data);
    }
}