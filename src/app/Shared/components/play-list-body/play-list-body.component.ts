import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { TracksService } from '@modules/tracks/services/tracks.service';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent {
  
  @Input() tracks : Array<TrackModel> = []
  optionsSort : {
    property : string | null,
    order : string 
  } = {
    property : null,
    order : "asc"
  }

  constructor(private tracksService : TracksService){}

  ngOnInit() : void{
    /*const tracks$ = this.tracksService.getAllElectronic$().subscribe(tracks => {
      this.tracks = tracks
    })*/
  }

  changeSort(property : string){
    const {order} = this.optionsSort
    this.optionsSort = {
      property,
      order : (order === "asc") ? "desc" : "asc"
    }
  }
}
