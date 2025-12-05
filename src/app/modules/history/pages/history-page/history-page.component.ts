import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit{

  tracks : Observable<any> = of([])
  constructor(private searchService : SearchService){}

  ngOnInit() : void{
    
  }

  search(term : string){
    this.tracks = this.searchService.searchTracks(term)
  }

 
}
