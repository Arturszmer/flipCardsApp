import {Component, Input, OnInit} from '@angular/core';
import {FlipCard} from "../../models/flipCard";
import {FlipcardsService} from "../flipcards.service";

@Component({
  selector: 'app-flip-cards',
  templateUrl: './flip-cards.component.html',
  styleUrls: ['./flip-cards.component.css']
})
export class FlipCardsComponent implements OnInit {

  public flipCards?: FlipCard[] | undefined;
  @Input()
  public flipCard?: FlipCard;
  public flip: boolean = false;
  public next: boolean = false;
  private indexNumber: number = 0;
  public showAll: boolean = false;

  constructor(private flipCardsService: FlipcardsService) {
  }

  ngOnInit(): void {
    this.getFlipCards();
    this.getRandomFlipCard();
  }

  getFlipCards(){
    this.flipCardsService.getFlipCards().subscribe((response) => {
      console.log(response, 'response')
      this.flipCards = response;
    })
  }

  getRandomFlipCard(){
    this.flipCardsService.getFlipCards().subscribe((response) => {
      let index: number = Math.floor(Math.random() * (response.length))
      while (index == this.indexNumber){
        index = Math.floor(Math.random() * (response.length))
      }
      this.flipCard = response.find((value: FlipCard, ind) => {
        this.indexNumber = index;
        return ind === this.indexNumber;
      })
    })
  }


  fliping() {
    this.flip = !this.flip;
    this.next = !this.next;
  }
  nextCard(){
    this.getRandomFlipCard()
    this.next = !this.next
    this.flip = !this.flip;
  }
  showCards(){
    this.showAll = !this.showAll;
  }
}
