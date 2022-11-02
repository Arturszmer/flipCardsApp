import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlipCardsComponent} from "./flip-cards/flip-cards.component";
import {FlipcardsService} from "./flipcards.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    FlipCardsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    FlipCardsComponent
  ],
  providers: [
    FlipcardsService
  ]
})
export class FlipcardsModule { }
