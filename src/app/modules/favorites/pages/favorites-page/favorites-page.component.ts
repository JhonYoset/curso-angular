import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataServiceService } from '@shared/services/data-service.service';
import { MessageService } from '@shared/services/message.service';
@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit{
  private subscription: Subscription = new Subscription();
  private messageSubscription: Subscription = new Subscription();

  constructor(private dataService: DataServiceService, private messageService: MessageService){}
  ngOnInit(): void{
    this.subscription= this.dataService.currentData.subscribe(data =>{
      console.log('Datos de estado', data)
    });

    this.messageSubscription = this.messageService.message$.subscribe(message =>{
      console.log('mensaje recibido: ', message)
    })
  }
  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }
}
