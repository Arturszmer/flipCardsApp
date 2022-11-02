import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FlipcardsModule} from "./flip-cards/flipcards.module";
import { LoginPageComponent } from './main-page/login-page/login-page.component';
import { AuthFormComponent } from './main-page/login-page/auth-form/auth-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPageComponent,
    AuthFormComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FlipcardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
