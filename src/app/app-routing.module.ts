import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./main-page/main-page.component";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {LoginPageComponent} from "./main-page/login-page/login-page.component";
import {NavBarComponent} from "./main-page/nav-bar/nav-bar.component";
import {FlipCardsLayoutComponent} from "./flip-cards/flip-cards-layout.component";

export const enum RoutingConfig {
  mainPage = 'mainPage',
  myAccount = 'myAccount',
  myFlipCards = 'myFLipCards',
  flipcards = '/flipcards',
  addFLipcard = '/addFlipcard'
}

const routes: Routes = [
  { path: RoutingConfig.mainPage, component: MainPageComponent},
  { path: RoutingConfig.myAccount, component: LoginPageComponent},
]

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
export const routingComponents = [NavBarComponent,
  MainPageComponent, LoginPageComponent, FlipCardsLayoutComponent

]
