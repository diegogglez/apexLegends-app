import PocketBase from 'pocketbase';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth-service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private pb = new PocketBase('http://127.0.0.1:8090');

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(userName: string, userPassword: string) {
    return this.pb.collection('users').authWithPassword(userName, userPassword);
  }

}
