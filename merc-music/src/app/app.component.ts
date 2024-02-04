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
export class AppComponent {
  
  title = 'merc-music';
}
