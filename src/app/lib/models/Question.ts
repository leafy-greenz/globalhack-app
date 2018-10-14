import {Answer} from './Answer';
import {User} from './User';

export interface Question {
  _id?: string;
  text: string;
  answers?: Answer[];
  createdBy?: User;
  dateCreated?: Date;
}
