import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../services/media.service';
import { TrackModel } from '@core/models/track.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css'],
})
export class MediaPlayerComponent implements OnInit {
  mockCover = {
    cover:
      'https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg',
    name: 'Getting Over',
    album: 'One Love',
    url: 'https://www.example.com',
    _id: 1,
  };

  observerList$: Array<Subscription> = [];
  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    const observer$ = this.mediaService.callback.subscribe(
      (track: TrackModel) => {
        console.log('Track recevied in MediaPlayerComponent', track);
      }
    );

    this.observerList$.push(observer$);
  }

  ngOnDestroy(): void {
    console.log(
      'MediaPlayerComponent destroyed, unsubscribing from observables.'
    );
    this.observerList$.forEach((sub) => sub.unsubscribe());
  }
}
