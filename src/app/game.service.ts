import { Injectable } from '@angular/core';
import { ActionCardItem } from './action-card.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private router: Router) { }



  private actionCards: ActionCardItem[];

  private position: number;

  startGame(list: ActionCardItem[]) {
    this.actionCards = list.sort(() => Math.random() - 0.5);
    this.position = -1; // goNext() will immediatly increase position to 0
  }

  isRunning(){
    return this.actionCards != null;
  }

  goNext() {
    this.position++;

    if (this.position < this.actionCards.length ) {
      this.router.navigateByUrl('/' + this.actionCards[this.position].name);
    } else {
      this.router.navigateByUrl('/');
      this.actionCards = null;
      this.position = null;
    }
  }
  
  goBack() {
    this.router.navigateByUrl('/' + this.actionCards[--this.position].name);
  }

  getCount() {
    return this.actionCards.length;
  }

  getPosition() {
    return this.position;
  }

}