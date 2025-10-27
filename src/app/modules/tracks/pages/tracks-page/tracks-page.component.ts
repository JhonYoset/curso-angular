import { Component, OnInit } from '@angular/core';
import { TrackModel } from 'src/app/core/models/track.model';
import * as dataRow from '../../../../data/tracks.json'
@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit{
  mockTracks:Array<TrackModel>=[];

  ngOnInit(): void{
    const {data} : any = (dataRow as any).default;
    this.mockTracks=data;
  }
}
