import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {
  emailAddress: string = "";
  userPassword?: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.emailAddress, this.userPassword, 'values')
  }
}
