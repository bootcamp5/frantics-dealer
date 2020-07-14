import { Component } from '@angular/core';
import { ActionCardService } from './action-card.service';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public game: GameService) { }
}
