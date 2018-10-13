import {User} from './User';
import {Announcement} from './Announcement';
import {Event} from './Event';
import {Question} from './Question';
import {Tag} from './Tag';

export interface Community {
  _id?: string;
  name: string;
  description: string;
  members: User[];
  events: Event[];
  announcements: Announcement[];
  questions: Question[];
  tags: Tag[];
}
