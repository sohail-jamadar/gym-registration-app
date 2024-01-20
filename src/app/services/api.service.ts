import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
// import 'dotenv/config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = 'https://localhost:3000/enquiry';
  
  constructor(private http: HttpClient) { }

  getRegisteredUser() {
    return this.http.get<User[]>(`${this.baseUrl}`);
  }

  postRegistration(registerObj: User) {
    return this.http.post<User>(`${this.baseUrl}`, registerObj);
  }

  updateRegisterUser(registerObj: User, id: number) {
    return this.http.put<User>(`${this.baseUrl}/${id}`, registerObj);
  }

  deleteRegistered(id: number) {
    return this.http.delete<User>(`${this.baseUrl}/${id}`);
  }

  getRegisteredUserId(id: number) {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }
}
