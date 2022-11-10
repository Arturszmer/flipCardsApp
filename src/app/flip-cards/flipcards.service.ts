import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FlipCard} from "../models/flipCard";
import {environment} from "../../environments/environment";
import {FlipCardDto} from "../models/flipCardDto";

const flipCard: FlipCardDto = {
  flipCardFront:{
    content: ''
  },
  flipCardBack:{
    content: ''
  }
}

@Injectable({
  providedIn: 'root'
})
export class FlipcardsService {

  constructor(private http: HttpClient) { }

  public getFlipCards(): Observable<FlipCard[]> {
    return this.http.get<FlipCard[]>(environment.apiBaseURL + '/myFlipCards');
  }

  public addFlipCard(body: FlipCardDto): Observable<FlipCard> {
    return this.http.post<FlipCard>(environment.apiBaseURL + '/myFlipCards/addFlipcard', body);
  }

  addFLipCardContent(frontCard: string, backCard: string) {
    flipCard.flipCardFront.content = frontCard;
    flipCard.flipCardBack.content = backCard;
    console.log(flipCard, 'content?')

    this.addFlipCard(flipCard).subscribe();

  }
}
