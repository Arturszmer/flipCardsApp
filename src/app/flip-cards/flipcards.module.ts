import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlipCardsComponent} from "./flip-cards/flip-cards.component";
import {FlipcardsService} from "./flipcards.service";
import {HttpClientModule} from "@angular/common/http";
import { CreateFlipCardsComponent } from './create-flip-cards/create-flip-cards.component';
import { CreateFlipCardComponent } from './create-flip-cards/create-flip-card/create-flip-card.component';
import {FlipCardsLayoutComponent} from "./flip-cards-layout.component";
import {RouterOutlet} from "@angular/router";
import {FlipcardsRoutingModule} from "./flipcards-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    FlipCardsComponent,
    CreateFlipCardsComponent,
    CreateFlipCardComponent,
    FlipCardsLayoutComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterOutlet,
    FlipcardsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FlipCardsComponent,
    CreateFlipCardComponent,
    CreateFlipCardsComponent
  ],
  providers: [
    FlipcardsService
  ]
})
export class FlipcardsModule { }
