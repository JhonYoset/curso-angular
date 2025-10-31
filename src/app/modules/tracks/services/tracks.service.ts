import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { Observable, of } from 'rxjs';
import * as dataRow from '../../../data/tracks.json'

@Injectable({
  providedIn: 'root'
})
export class TracksService {

  dataTracksBetter$ : Observable <TrackModel[]> = of([]);
  dataTracksElectronics$ : Observable <TrackModel[]> = of([]);

  constructor(){
    const{data}: any = (dataRow as any).default;
    this.dataTracksBetter$ = of(data);
    this.dataTracksElectronics$ = of(data);
  }
}
