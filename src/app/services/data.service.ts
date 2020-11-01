import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// const baseUrl = 'http://localhost:8080/api/tutorials';

const baseUrl = 'http://ec2-3-137-159-191.us-east-2.compute.amazonaws.com:5050/api/tutorials'

// const baseUrl = 'https://myteethpgi.herokuapp.com/api/tutorials';

export interface Set {
  title: string;
  description: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  imageUrl: string;
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  // public getMessages(): Message[] {
  //   return this.messages;
  // }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }
}
