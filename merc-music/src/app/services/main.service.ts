import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  baseUrl = 'https://spotify23.p.rapidapi.com/'
  options = {
    'X-RapidAPI-Key': 'bb44ae354dmsh343a18d71193cbap12d45cjsneb7647b090e1',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
  
  constructor(private http: HttpClient) { }
  
  search(data:any): Observable <any> {
    return this.http.get<any>(this.baseUrl + 'search/', {headers: this.options,params:{q:data.query,type:data.category}})
  }

}
