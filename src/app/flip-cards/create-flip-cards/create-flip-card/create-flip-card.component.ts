import { Component, OnInit } from '@angular/core';
import {FlipcardsService} from "../../flipcards.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-flip-card',
  templateUrl: './create-flip-card.component.html',
  styleUrls: ['./create-flip-card.component.css']
})
export class CreateFlipCardComponent implements OnInit {

  profileForm = new FormGroup({
    front: new FormControl(''),
    back: new FormControl('')
  })

  constructor(private flipCardsService: FlipcardsService) { }

  ngOnInit(): void {
  }

  createNewFlipCard = () => {
    console.log(this.profileForm.value.front, this.profileForm.value.back, 'card content')
    this.flipCardsService.addFLipCardContent(this.profileForm.value.front!, this.profileForm.value.back!);
    this.profileForm.reset();
  }
}
