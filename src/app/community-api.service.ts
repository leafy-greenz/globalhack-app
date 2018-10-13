import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Community} from './lib/models/Community';
import {User} from './lib/models/User';

const API_URL = 'http://localhost:3000';

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

  createCommunity(community: Community): Observable<Community> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.post<Community>(`${API_URL}/community`, community, { headers });
  }

  removeCommunity(id: string): Observable<Community> {
    return this.http.delete<Community>(`${API_URL}/community/${id}`);
  }

  updateCommunity(id: string, community: Community): Observable<Community> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.put<Community>(`${API_URL}/community/${id}`, community, { headers });
  }

  createUser(user: User): Observable<User> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.post<User>(`${API_URL}/user`, user, { headers });
  }

  removeUser(id: string): Observable<User> {
    return this.http.delete<User>(`${API_URL}/user/${id}`);
  }

  updateUser(id: string, user: User): Observable<User> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.put<User>(`${API_URL}/user/${id}`, user, { headers });
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${API_URL}/user/${id}`);
  }


}
