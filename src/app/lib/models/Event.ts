import {User} from './User';

export class Event {
  _id?: string;
  name: string;
  date: Date;
  location: string;
  description: string;
  attendees: User[];
  createdBy?: User;
  dateCreated: Date;

  constructor(event: any) {
    this._id = event._id;
    this.name = event.name;
    this.date = new Date(event.date);
    this.dateCreated = new Date(event.dateCreated);
    this.location = event.location;
    this.description = event.description;
    this.createdBy = event.createdBy;
    this.attendees = event.attendees;
  }
}
