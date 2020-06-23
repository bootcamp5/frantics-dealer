import { Component } from '@angular/core';
import { ActionCardService } from './action-card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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
