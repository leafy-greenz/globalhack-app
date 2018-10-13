import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Community} from './lib/models/Community';

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
}
