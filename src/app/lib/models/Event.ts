import {User} from './User';

export class Event {
  _id: string;
  name: string;
  date: Date;
  location: string;
  description: string;
  createdBy: User;

  constructor(event: any) {
    this._id = event._id;
    this.name = event.name;
    this.date = new Date(event.date);
    this.location = event.location;
    this.description = event.description;
    this.createdBy = event.createdBy;
  }
}
