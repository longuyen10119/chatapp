import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get('http://localhost:3000/api/users');
  }
  checkLogin(username){
    console.log(username);
    return this.http.get('http://localhost:3000/api/login/' + username);
  }
}
