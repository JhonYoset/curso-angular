import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '@shared/services/data-service.service';
import { MessageService } from '@shared/services/message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit{

   constructor(){}

   ngOnInit(){} 

}
