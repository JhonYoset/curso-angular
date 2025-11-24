// play-list-body.component.ts
import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { TracksService } from '@modules/tracks/services/tracks.service';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css'],
})
export class PlayListBodyComponent {
  @Input() tracks: Array<TrackModel> =[];

  sortField: string = 'name';
  sortOrder: 'asc' | 'desc' = 'asc';

  constructor(private trackService: TracksService){}
  ngOnInit(): void {
/*const tracks$ = this.trackService
      .getAllElectronics$()
      .subscribe((tracks) => {
        this.tracks = tracks;
      });*/
  }
  sortBy(field: string) {
    if (this.sortField === field) {
      // Si se hace clic en la misma columna, invertir el orden
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      // Si es una nueva columna, ordenar ascendente por defecto
      this.sortField = field;
      this.sortOrder = 'asc';
    }
  }

  getSortIcon(field: string): string {
    if (this.sortField !== field) return '';
    return this.sortOrder === 'asc' ? '↑' : '↓';
  }
}
