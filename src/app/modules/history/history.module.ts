import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { TracksPageComponent } from '../tracks/pages/tracks-page/tracks-page.component';
import { SharedModule } from 'src/app/shared/Shared.module';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    HistoryPageComponent,
    TracksPageComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    SharedModule
  ]
})
export class HistoryModule { }
