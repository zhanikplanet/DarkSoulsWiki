import { Component } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { VisiterComponent } from "./visiter/visiter.component";
import { GameDescriptionComponent } from "./game-description/game-description.component";

@Component({
  selector: 'app-main-page',
  imports: [CarouselComponent, VisiterComponent, GameDescriptionComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
