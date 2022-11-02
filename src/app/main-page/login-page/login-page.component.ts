import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  createUser(user: any) {
    console.log('create account', user)
  }

  loginUser(user: any) {
    console.log('login user', user)
  }
}
