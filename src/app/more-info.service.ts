import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICoinsMoreInfo } from './moreInfoInterface';

@Injectable({
  providedIn: 'root'
})
export class MoreInfoService {

  constructor(private http: HttpClient) { }
  
  getData():Observable<ICoinsMoreInfo[]> {
    return this.http.get<ICoinsMoreInfo[]>('https://api.coingecko.com/api/v3/coins/{id}', {});


  }
}
