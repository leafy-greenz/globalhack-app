import {User} from './User';

export class Announcement {
  _id?: string;
  title: string;
  description: string;
  createdBy?: User;
  dateCreated: Date;

  constructor(announcement: any) {
    this._id = announcement.id;
    this.title = announcement.title;
    this.description = announcement.description;
    this.createdBy = announcement.createdBy;
    this.dateCreated = new Date(announcement.dateCreated);
  }
}
