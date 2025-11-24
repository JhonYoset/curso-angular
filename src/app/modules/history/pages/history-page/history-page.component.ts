import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '@shared/services/data-service.service';
import { MessageService } from '@shared/services/message.service';

import { Observable, of } from 'rxjs';
import { SearchService } from '../../services/search.service';
import { TrackModel } from '@core/models/track.model';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css'],
})
export class HistoryPageComponent implements OnInit {
  tracks: Observable<any> = of([]);

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {}

  search(term: string) {
    this.tracks= this.searchService
      .searchTracks(term)
  }
}
