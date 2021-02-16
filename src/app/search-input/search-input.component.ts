import { Component, OnInit } from '@angular/core';
import { CoinCardsComponent } from '../coin-cards/coin-cards.component';
import { DataSearchService } from '../data-search.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {


  coins = [];


  input: any;
filter: any;
ul: any;
li: any;
item:any;
i: any;
txtValue: any;
 

constructor(private _DataSearchService: DataSearchService) { }

ngOnInit(): void { 
   this._DataSearchService.getData().subscribe(data => this.coins = data);
}
}