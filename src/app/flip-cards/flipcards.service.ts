import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FlipCard} from "../models/flipCard";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FlipcardsService {

  constructor(private http: HttpClient) { }

  public getFlipCards(): Observable<FlipCard[]> {
    return this.http.get<FlipCard[]>(environment.apiBaseURL + '/flipCards');
  }
}
