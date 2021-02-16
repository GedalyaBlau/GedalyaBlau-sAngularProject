import { Component, OnInit } from '@angular/core';
import { DataSearchService } from '../data-search.service';

@Component({
  selector: 'app-coin-cards',
  templateUrl: './coin-cards.component.html',
  styleUrls: ['./coin-cards.component.css']
})
export class CoinCardsComponent implements OnInit {
coins = [];
isCollapsed = false;
constructor(private _DataSearchService: DataSearchService) { }

  ngOnInit(): void { 
     this._DataSearchService.getData().subscribe(data => this.coins = data);
  }

}
