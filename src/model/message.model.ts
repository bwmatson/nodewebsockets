import {User} from './user.model';

export class Message {
    public from: User;
    public content: string;

    constructor(from: User, content: string) {
        this.from = from;
        this.content = content;
    }
}
