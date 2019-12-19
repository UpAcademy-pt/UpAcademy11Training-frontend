export class Session {
    'id'?: number;
    'title': string;
    'location': string;
    'sessionDate': string;
    'capacity': number;
    'requirements': string;
    'duration': string;
    'instructor': number;

    constructor(data?: any) {
        Object.assign(this, data);
    }
}