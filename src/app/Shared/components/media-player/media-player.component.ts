import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MediaService } from '../../services/media.service';
import { TrackModel } from 'src/app/core/models/track.model';
import { Subscription } from 'rxjs';
import { ArtistModel } from '@core/models/artist.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent  implements OnInit, OnDestroy{

  @ViewChild('progressBar') progressBar : ElementRef = new ElementRef(null)
  observerList$ : Array<Subscription> = []
  state : string = 'pause'

  constructor(public mediaService : MediaService){}

  ngOnInit(): void {
    const observer$ = this.mediaService.playStatus$.subscribe(status => {
      this.state = status
    })

    this.observerList$.push(observer$)
  }

  ngOnDestroy(): void {
    this.observerList$.forEach(sub => sub.unsubscribe())
  }

  handlePosition(event : any) : void{
    const {clientX} = event;
    const elNative = this.progressBar.nativeElement as HTMLElement
    const {x, width} = elNative.getBoundingClientRect()
    const clickPosition = clientX - x
    const percentage = clickPosition * 100 / width
    this.mediaService.seekAudio(percentage)

  }

}
