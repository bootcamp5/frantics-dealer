import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActionCardService {

  constructor() { }

  getCards(): ActionCardItem[] {
    return [
      {
        name: 'russian-roulette',
        title: 'Russian Roulette',
        description: 'foo bar'
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

}


export interface ActionCardItem {
  name: string;
  title: string;
  description: string;
}
