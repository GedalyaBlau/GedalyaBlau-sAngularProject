import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICoinsMain } from './coins';


@Injectable({
  providedIn: 'root'
})
export class DataSearchService {

  constructor(private http: HttpClient ) { }
  getData():Observable<ICoinsMain[]> {
    return this.http.get<ICoinsMain[]>('https://api.coingecko.com/api/v3/coins', {});


  } 


}
