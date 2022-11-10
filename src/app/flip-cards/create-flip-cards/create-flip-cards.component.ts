import { Component, OnInit } from '@angular/core';
import {FlipCardDto} from "../../models/flipCardDto";
import {FlipcardsService} from "../flipcards.service";

@Component({
  selector: 'app-create-new-flip-cards',
  templateUrl: './create-flip-cards.component.html',
  styleUrls: ['./create-flip-cards.component.css']
})
export class CreateFlipCardsComponent implements OnInit {

  constructor(private flipCardsService: FlipcardsService) {
  }

  ngOnInit(): void {
  }

}
