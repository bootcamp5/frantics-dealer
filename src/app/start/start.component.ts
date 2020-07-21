import { Component, OnInit } from '@angular/core';
import { ActionCardService } from '../action-card.service';
import { GameService } from '../game.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {

  constructor(private actionsCards: ActionCardService,private gameService: GameService) {  }


  getItems() {
    return this.actionsCards.getCards();
  }
  selectAll() {
    this.actionsCards.setAll(true);
  }
  unselectAll() {
    this.actionsCards.setAll(false);
  }

  changed(event) {
    console.log(event);
  }

  startGame(){
    const selectedCards = this.actionsCards.getCards().filter(card => card.selected);
    this.gameService.startGame(selectedCards);
    this.gameService.goNext();
  }

}
