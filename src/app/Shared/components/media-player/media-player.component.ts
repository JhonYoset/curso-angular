import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaService } from '../../services/media.service';
import { TrackModel } from '@core/models/track.model';
import { Subscription } from 'rxjs';
import { ArtistModel } from '@core/models/artists.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css'],
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  mockArtist: ArtistModel={
    name: 'David Guetta',
    nickname: 'davidguetta',
    nationality: 'FR',
  }

  mockCover: TrackModel={
    cover:
      'https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg',
    name: 'Getting Over',
    album: 'One Love',
    url: 'https://www.example.com',
    _id: 1,
    artist: this.mockArtist
  };

  observerList$: Array<Subscription> = [];
  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    const observer$ = this.mediaService.callback.subscribe((track: TrackModel) => {
        this.mockCover = track;
        console.log('Track recevied in MediaPlayerComponent', track);
      }
    );
    const Observable$ = this.mediaService.subject$.subscribe({
      next: (data) => console.log('Next:', data),
      error: (err) => console.error('Error:', err),
      complete: () => console.log('Completed'),
    });
    this.observerList$.push(Observable$);

    this.observerList$.push(observer$);
  }

  ngOnDestroy(): void {
    console.log(
      'MediaPlayerComponent destroyed, unsubscribing from observables.'
    );
    this.observerList$.forEach((sub) => sub.unsubscribe());
  }
}
