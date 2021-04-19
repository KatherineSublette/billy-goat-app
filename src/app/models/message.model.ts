import { User } from "./user.model";

export class Message {
    id: number;
    subject: string;
    body: string;
    date: Date;
    read: boolean;
    senderId: number;
    recipientId: number;
    sender: User;
    recipient: User;
}