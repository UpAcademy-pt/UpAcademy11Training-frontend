export class User {
    'id'?: number;
    'name': string;
    'role': string;
    'email': string;
    'password': string;
    'imgUrl': string;
  sessions: import("c:/Users/pmmap/Documents/Projeto-Angular/src/app/core/models/session").Session[];
    constructor(data?: any) {
        Object.assign(this, data);
    }
}
