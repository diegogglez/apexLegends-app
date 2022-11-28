import PocketBase from 'pocketbase';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private pb = new PocketBase('http://127.0.0.1:8090');

  constructor(private router: Router, private http: HttpClient) { }

  getToken() {
    return localStorage.getItem('token');
  }

  isLogged() {
    let token = localStorage.getItem('token');
    return token !== null ? true : false;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

 

  register(data: any){
    return this.pb.collection('users').create(data);
  }
}
