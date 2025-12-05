import { Component, OnInit } from '@angular/core';
import { TrackModel } from 'src/app/core/models/track.model';
import { TracksService } from '@modules/tracks/services/tracks.service';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit{

  tracksBetter : Array<TrackModel> = []
  tracksElectronics : Array<TrackModel> = []

  constructor(private tracksService : TracksService){}

  ngOnInit(): void {
    this.tracksService.getAllTracks$().subscribe(tracks => {
      this.tracksBetter = tracks; 
    })

    this.tracksService.getAllElectronic$().subscribe(tracks => {
      this.tracksElectronics = tracks;
    })
  }

  ngOnDestroy() : void{
  }

}
