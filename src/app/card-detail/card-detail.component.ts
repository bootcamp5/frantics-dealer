import { Component, OnInit } from '@angular/core';
import { ActionCardService, ActionCardItem } from '../action-card.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: ActionCardService) { }

  card: ActionCardItem;

  ngOnInit(): void {
    this.route.paramMap.subscribe(m => {
      const name = m.get('card-name');
      this.card = this.service.getCardByName(name);
    });
  }
}
