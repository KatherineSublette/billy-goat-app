import { Guest } from "./guest.model";
import { Guide } from "./guide.model";
import { Resort } from "./resort.model";

export class Job {
    id: number;
    name: string;
    date: Date;
    completed: boolean;
    guestId: number;
    guideId: number;
    resortId: number;
    guest: Guest;
    guide: Guide;
    resort: Resort;
}