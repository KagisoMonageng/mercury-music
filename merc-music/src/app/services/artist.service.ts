import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from '../interfaces/artist';
import { Album } from '../interfaces/album';
import { Song } from '../interfaces/song';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  baseUrl = 'https://spotify23.p.rapidapi.com/'
  options = {
    'X-RapidAPI-Key': 'bb44ae354dmsh343a18d71193cbap12d45cjsneb7647b090e1',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }

  constructor(private http: HttpClient) { }

  getArtist(id: string): Observable<Artist> {
    return this.http.get<Artist>(this.baseUrl + 'artist_overview/', { headers: this.options, params: { id: id } })
  }

  getArtistAlbums(id: string): Observable<Album[]> {
    return this.http.get<Album[]>(this.baseUrl + 'artist_albums/', {
      headers: this.options, params: {
        id: id,
        offset: '0',
        limit: '100'
      }
    })
  }

  getArtistSingles(id: string): Observable<Song[]> {
    return this.http.get<Song[]>(this.baseUrl + 'artist_singles/', {
      headers: this.options, params: {
        id: id,
        offset: '0',
        limit: '100'
      }
    })
  }

  getArtistRelatives(id: string): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.baseUrl + 'artist_related/', {
      headers: this.options, params: {
        id: id
      }
    })
  }

}
