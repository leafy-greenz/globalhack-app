import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Community} from './lib/models/Community';

const API_URL = 'localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class CommunityAPIService {

  constructor(private http: HttpClient) { }

  getAllCommunities(): Observable<Community[]> {
    return this.http.get<Community[]>(`${API_URL}/community`);
  }

  getCommunityById(id: string): Observable<Community> {
    return this.http.get<Community>(`${API_URL}/community/${id}`);
  }
}
