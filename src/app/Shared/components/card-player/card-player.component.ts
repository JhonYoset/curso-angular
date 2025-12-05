import { Component, Input } from '@angular/core';
import { MediaService } from '../../services/media.service';
import { TrackModel } from '@core/models/track.model';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent {
  @Input() mode : 'small' | 'big' = 'big'
  @Input() track !: TrackModel

  constructor(private mediaService : MediaService){}

  sendTrack(track : TrackModel){
    this.mediaService.trackInfo$.next(track);
  }
}
