import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Artist } from '../../interfaces/artist';
import { Song } from '../../interfaces/song';
import { SongService } from '../../services/song.service';
import { MainService } from '../../services/main.service';
import { FormGroup,FormBuilder } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  info: any[] = []
  artist : Artist;
  song : any;
  searchRes : any;
  searchForm : FormGroup;

  constructor(private http: HttpClient,private mainServ: MainService,private formBuilder : FormBuilder,private songService: SongService) {
    this.searchForm = this.formBuilder.group({
      query: '',
      category:''
    });
  }
  ngOnInit(): void {
  }

  search(){

    this.mainServ.search(this.searchForm.value).subscribe((results:any) =>{
      console.log(results)
      this.searchRes = results;
    },(err:HttpErrorResponse) =>{
      console.log(err)
    })
  }

  playPreview(id:string) {
    this.songService.getSong(id).subscribe((song:any)=>{
      console.log(song.tracks[0])
      this.song = song.tracks[0];
    })
  }

  viewSong(song : Song){

  }

}
