import {Community} from './Community';

export interface User {
  _id?: string;
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  role: string;
  communities?: Community[];
}
