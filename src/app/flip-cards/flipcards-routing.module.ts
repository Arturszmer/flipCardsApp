import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {FlipCardsLayoutComponent} from "./flip-cards-layout.component";
import {FlipCardsComponent} from "./flip-cards/flip-cards.component";
import {RoutingConfig} from "../app-routing.module";
import {CreateFlipCardsComponent} from "./create-flip-cards/create-flip-cards.component";

const routes: Routes = [
  { path: RoutingConfig.myFlipCards, component: FlipCardsLayoutComponent, children:[
      {path: 'flipcards', component: FlipCardsComponent},
      {path: 'addFlipcard', component: CreateFlipCardsComponent}
    ]},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlipcardsRoutingModule{}
