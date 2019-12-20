export class Session {
    'id'?: number;
    'title': string;
    'localization': string;
    'sessionDate': string;
    'capacity': number;
    'requirements': string;
    'duration': string;
    'instructor': number;
    'subscribed': boolean;

    constructor(data?: any) {
        Object.assign(this, data);
    }
}