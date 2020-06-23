import { Component, OnInit } from '@angular/core';
import { ActionCardService } from '../action-card.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {

  constructor(private actionsCards: ActionCardService) {  }

  getItems() {
    return this.actionsCards.getCards();
  }
  selectAll() {
    this.actionsCards.setAll(true);
  }
  unselectAll() {
    this.actionsCards.setAll(false);
  }

}
