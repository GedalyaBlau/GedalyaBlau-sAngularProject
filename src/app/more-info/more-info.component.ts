import { Component, OnInit } from '@angular/core';
import { DataSearchService } from '../data-search.service';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {
  moreInfos = []; 
  constructor(private _DataSearchService: DataSearchService) { }

  ngOnInit(): void { 
     this._DataSearchService.getData().subscribe(data => this.moreInfos = data);
  }

}
