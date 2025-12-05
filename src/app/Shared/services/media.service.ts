import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  
  trackInfo$ : BehaviorSubject<any> = new BehaviorSubject<any>(null)
  public audio !: HTMLAudioElement;
  public timeElapsed$ : BehaviorSubject<string> = new BehaviorSubject<string>('00:00')
  public timeRemaining$ : BehaviorSubject<string> = new BehaviorSubject<string>('00:00')
  public playStatus$ : BehaviorSubject<string> = new BehaviorSubject<string>('pause')
  public playerPercentage$ : BehaviorSubject<number> = new BehaviorSubject<number>(0)

  constructor(){
    this.audio = new Audio()
    this.trackInfo$.subscribe(track => {
      if(track){
        this.setAudio(track);
      }
    })
    this.listenAllEvents()
  }

  private listenAllEvents() : void {
    this.audio.addEventListener('timeupdate', this.calculateTime, false)
    this.audio.addEventListener('ended', this.setPlayerStatus, false)
    this.audio.addEventListener('play', this.setPlayerStatus, false)
    this.audio.addEventListener('playing', this.setPlayerStatus, false)
    this.audio.addEventListener('pause', this.setPlayerStatus, false)
  }

  private setPercentage(currentTime : number, duration : number) : void{
    const percentage = (currentTime/duration) * 100
    this.playerPercentage$.next(percentage)

  }

  private setPlayerStatus = (state : any) =>{
    switch(state.type){
      case 'play' : 
        this.playStatus$.next('play')
        break
      case 'playing' :
        this.playStatus$.next('playing')
        break
      case 'ended' :
        this.playStatus$.next('ended')
        break
      default : 
        this.playStatus$.next('pause')
        break
    }
  }

  private calculateTime = () => {
    const {currentTime, duration} = this.audio
    this.setTimeElapsed(currentTime)
    this.setTimeRemaining(currentTime, duration)
    this.setPercentage(currentTime, duration)
  }

  private setTimeElapsed(currentTime : number) : void{
    const displayFormat = this.formatTime(currentTime)
    this.timeElapsed$.next(displayFormat)
  }

  private setTimeRemaining(currentTime : number, duration : number) : void{
    const timeLeft = duration - currentTime
    const displayFormat = `-${this.formatTime(timeLeft)}`
    this.timeRemaining$.next(displayFormat)
  }

  private formatTime(currentTime : number) : string{
    const minutes = Math.floor(currentTime / 60 % 60)
    const seconds = Math.floor(currentTime % 60)
    const displaySeconds = seconds < 10 ? '0' + seconds : seconds
    const displayMinutes = minutes < 10 ? '0' + minutes : minutes
    return `${displayMinutes}:${displaySeconds}`
  }

  private setAudio(track : TrackModel) : void{
    this.audio.src = track.url
    this.audio.play()
    console.log('hello', track.url)
  }

  public togglePlayer() : void{
    if(this.audio.paused){
      this.audio.play()
    }else{
      this.audio.pause()
    }
  }

  public seekAudio(percentage : number) : void{
    const {duration} = this.audio
    const seekTime = (percentage / 100) * duration
    this.audio.currentTime = seekTime
  }
}
