import { Session } from './session';

export class User {
    'id'?: number;
    'name': string;
    'role': string;
    'email': string;
    'password': string;
    'imgUrl': string;
  'sessions': Session[];
    constructor(data?: any) {
        Object.assign(this, data);
    }
}
