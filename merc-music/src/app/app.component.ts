import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Artist } from './interfaces/artist';
import { Song } from './interfaces/song';
import { SongService } from './services/song.service';
import { MainService } from './services/main.service';
import { FormGroup,FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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
  title = 'merc-music';
}
