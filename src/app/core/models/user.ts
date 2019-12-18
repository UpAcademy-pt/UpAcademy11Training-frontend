export class User {
    'id'?: number;
    'nome': string;
    'email': string;
    'password': string;
    constructor(data?: any) {
        Object.assign(this, data);
    }
}
