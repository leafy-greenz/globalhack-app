import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Community} from './lib/models/Community';
import {User} from './lib/models/User';
import {Event} from './lib/models/Event';
import {Tag} from './lib/models/Tag';
import {Question} from './lib/models/Question';
import {Answer} from './lib/models/Answer';

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

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${API_URL}/user/${id}`);
  }

  getEventById(id: string): Observable<Event> {
    return this.http.get<Event>(`${API_URL}/event/${id}`);
  }

  createEvent(event: Event): Observable<Event> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.post<Event>(`${API_URL}/event`, event, { headers });
  }

  updateEvent(id: string, event: Event): Observable<Event> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.put<Event>(`${API_URL}/event/${id}`, event, { headers });
  }

  removeEvent(id: string): Observable<Event> {
    return this.http.delete<Event>(`${API_URL}/event/${id}`);
  }

  addEventToCommunity(communityId: string, event: Event): void {
    this.createEvent(event).subscribe((newEvent: Event) => {
      this.http.put<Community>(`${API_URL}/community/${communityId}/event/${newEvent._id}`, null)
        .subscribe();
    });
  }

  removeEventFromCommunity(communityId: string, event: Event): void {
    this.createEvent(event).subscribe((newEvent: Event) => {
      this.http.delete<Community>(`${API_URL}/community/${communityId}/event/${newEvent._id}`)
        .subscribe();
    });
  }

  getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(`${API_URL}/tag`);
  }

  getTagById(id: string): Observable<Tag> {
    return this.http.get<Tag>(`${API_URL}/tag/${id}`);
  }

  getQuestionById(id: string): Observable<Question> {
    return this.http.get<Question>(`${API_URL}/question/${id}`);
  }

  createQuestion(question: Question): Observable<Question> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.post<Question>(`${API_URL}/question`, question, { headers });
  }

  getAnswerById(id: string): Observable<Answer> {
    return this.http.get<Answer>(`${API_URL}/answer/${id}`);
  }

  createAnswer(answer: Answer): Observable<Answer> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.post<Answer>(`${API_URL}/answer`, answer, { headers });
  }

  addQuestionToCommunity(communityId: string, question: Question): void {
    this.createQuestion(question).subscribe((newQuestion: Question) => {
      this.http.put<Community>(`${API_URL}/community/${communityId}/question/${newQuestion._id}`, null)
        .subscribe();
    });
  }

  addAnswerToQuestion(questionId: string, answer: Answer): void {
    this.createAnswer(answer).subscribe((newAnswer: Answer) => {
      this.http.put<Community>(`${API_URL}/question/${questionId}/answer/${newAnswer._id}`, null)
        .subscribe();
    });
  }
}
