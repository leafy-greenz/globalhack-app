import {User} from './User';

export interface Announcement {
  _id?: string;
  title: string;
  description: string;
  createdBy: User;
}
