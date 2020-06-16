import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActionCardService {

  constructor() { }

  getCards(): ActionCardItem[] {
    return this.cards;
  }

  selectAll(){
    for(let card of this.cards){
      card.selected = true;
    }
  }

  cards: ActionCardItem[] = [
    {
      name: 'russian-roulette',
      title: 'Russian Roulette',
      description: 'foo bar',
    },
    {
      name: 'communism',
      title: 'Communism',
      description: 'Kommunismus!!'
    },
    {
      name: '2',
      title: '2',
      description: 'Kommunismus!!',
    },
    {
      name: 'communism',
      title: 'Communism',
      description: 'Kommunismus!!'
    },
    {
      name: 'communism',
      title: 'Communism',
      description: 'Kommunismus!!'
    },
    {
      name: 'communism',
      title: 'Communism',
      description: 'Kommunismus!!'
    },
    {
      name: 'communism',
      title: 'Communism',
      description: 'Kommunismus!!'
    },
    {
      name: 'communism',
      title: 'Communism',
      description: 'Kommunismus!!'
    },
    {
      name: 'communism',
      title: 'Communism',
      description: 'Kommunismus!!'
    },
    {
      name: 'communism',
      title: 'Communism',
      description: 'Kommunismus!!'
    },
    {
      name: 'communism',
      title: 'Communism',
      description: 'Kommunismus!!'
    },
    {
      name: 'communism',
      title: 'Communism',
      description: 'Kommunismus!!'
    },
  ];

}


export interface ActionCardItem {
  name: string;
  title: string;
  description: string;
  selected?: boolean;
}
