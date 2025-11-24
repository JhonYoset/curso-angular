import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  callback: EventEmitter<any> = new EventEmitter<any>();
  observable$: Observable<any> = new Observable<any>();
  subject$: Subject<any> = new Subject<any>();
  constructor() {
    this.observable$= new Observable<any>
    ((subscriber)=>{
        //subscriber.next('Media Service Observable Initiliazed');
        //subscriber.next('Playing some media...');
        //subscriber.next('Media Playback in progress...');
        //subscriber.error('this is a simulated error from media service Observable');
        //subscriber.complete();
        //subscriber.next('This will not be sent because the observable is completed.');

         //});
        setTimeout(() =>
          this.subject$.next( 'MediaService Subject initialized'

          ) ,3000);
        setTimeout(() => {
          this.subject$.next( 'Playing some media via Subject... ' ) ;
        },5000);
        setTimeout(() => {
          this.subject$.next( 'Media Playback in progress via subject... ' ) ;
        },7000);

        this.subject$.error('this is a simulated error from MediaService  Subject.');


        this.subject$.next( 'MediaService Subject initialized' ) ;
        this.subject$.next( 'Playing sone media via Subject... ' ) ;
        this.subject$.next( 'Media playback in progress via Subject. ' ) ;
        this.subject$.error( 'This is a sinulated error from MediaService .');
        this.subject$.complete( ) ;
        this.subject$.next('This message Will not be sent because the subject');
      });

  }
}
