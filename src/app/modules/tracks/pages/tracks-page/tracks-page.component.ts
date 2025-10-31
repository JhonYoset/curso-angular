import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { Subscription } from 'rxjs';
import { TracksService } from '@modules/tracks/services/tracks.service';
@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css'],
})
export class TracksPageComponent implements OnInit {
  TracksBetter: Array<TrackModel> = [];
  TracksElectronic: Array<TrackModel> = [];
  observerList$= Array<Subscription>();

  constructor(private tracksService: TracksService){

  }
  ngOnInit(): void {
    const observerBetter$ = this.tracksService.dataTracksBetter$.subscribe({
      next:(data)=>{
        this.TracksBetter= data;
      }
    });
    this.observerList$.push(observerBetter$);
    const observerElectronics$ = this.tracksService.dataTracksElectronics$.subscribe({
      next:(data)=>{
        this.TracksElectronic = data;
      }
    });
    this.observerList$.push(observerElectronics$);
  }
  ngOnDestroy():void{
    this.observerList$.forEach((observer$)=> observer$.unsubscribe());
  }
}
