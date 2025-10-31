import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import * as dataRow from '../../../../data/tracks.json';
@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit{
  tracks: TrackModel[]= [];
  ngOnInit(): void{
    const { data }: any=(dataRow as any).default || dataRow;
    this.tracks=data;
  }
}
