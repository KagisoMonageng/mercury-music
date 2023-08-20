import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Song } from '../interfaces/song';
import { Observable } from 'rxjs';
import { Credits } from '../interfaces/credits';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  baseUrl = 'https://spotify23.p.rapidapi.com/'
  options = {
    'X-RapidAPI-Key': 'bb44ae354dmsh343a18d71193cbap12d45cjsneb7647b090e1',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }

  constructor(private http: HttpClient) { }

  getSong(id: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'tracks/', {headers: this.options,params:{ids:id}})
  }

  getSongCredits(id: string): Observable<Credits> {
    return this.http.get<Credits>(this.baseUrl + 'track_credits/', {headers: this.options,params:{id:id}})
  }
  

  



}
