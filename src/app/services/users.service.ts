import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { url } from 'inspector';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiURL ='http://127.0.0.1:8000/api/users';
  constructor(private http: HttpClient) { }

  getUser():Observable<User[]>{
    return this.http.get<User[]>(this.apiURL);
  }
}
