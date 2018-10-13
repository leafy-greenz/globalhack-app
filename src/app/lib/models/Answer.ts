import {User} from './User';

export interface Answer {
  _id?: string;
  text: string;
  createdBy?: User;
}
