import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FlipcardsModule} from "./flip-cards/flipcards.module";
import { LoginPageComponent } from './main-page/login-page/login-page.component';
import { AuthFormComponent } from './main-page/login-page/auth-form/auth-form.component';
import { NavBarComponent } from './main-page/nav-bar/nav-bar.component';
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPageComponent,
    AuthFormComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FlipcardsModule,
    RouterOutlet,
    RouterLinkWithHref,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
