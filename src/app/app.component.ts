import {Component} from '@angular/core';
import {RoutingConfig} from "./app-routing.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FlipCardsAppFront';

  routes: {label: string, route: string}[] = [
    {
      label: 'Home',
      route: RoutingConfig.mainPage
    },
    {
      label: 'My account',
      route: RoutingConfig.myAccount
    },
    {
      label: 'Flip cards',
      route: RoutingConfig.myFlipCards + RoutingConfig.flipcards
    },
    {
      label: 'Add flip cards',
      route: RoutingConfig.myFlipCards + RoutingConfig.addFLipcard
    }
  ]
}
