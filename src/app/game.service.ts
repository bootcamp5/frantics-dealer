import { Injectable } from '@angular/core';
import { ActionCardItem } from './action-card.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private router: Router) { }

  private remainingItems: ActionCardItem[];

  startGame(list: ActionCardItem[]) {
    this.remainingItems = list.sort(() => Math.random() - 0.5);
  }

  getRemainingCount() {
    return this.remainingItems?.length;
  }

  goToNext() {
    if (this.remainingItems.length > 0) {
      this.router.navigateByUrl('/' + this.remainingItems[0].name);
      this.remainingItems.shift();
    } else {
      this.router.navigateByUrl('/');
    }
  }
}
