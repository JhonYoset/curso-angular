import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { map, mergeMap, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TracksService {

  private readonly URL = environment.api;

  private skipById(tracks : TrackModel[], idToSkip : number) : Promise<TrackModel[]>{
    return new Promise((resolve) => {
      const filteredTracks = tracks.filter(track =>  track._id !== idToSkip)
      resolve(filteredTracks);
    })
  }
  
  constructor(private httpClient : HttpClient) {

  }

  getTrack() : TrackModel[]{
    return new Array<TrackModel>();
  }

  getAllTracks$() : Observable<TrackModel[]>{
    return this.httpClient.get<any>(`${this.URL}/tracks`).pipe(
      map((response) => {
        return response.data
      })
    )
  }

  getTrackById$() : Observable<TrackModel[]>{
    return this.httpClient.get<any>(`${this.URL}/tracks`)
  }

  getAllElectronic$() : Observable<TrackModel[]>{
    return this.httpClient.get<any>(`${this.URL}/tracks`).pipe(
      map((response) => {
        return response.data
      })
    )
  }

}
