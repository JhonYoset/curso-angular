import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '@shared/services/data-service.service';
import { MessageService } from '@shared/services/message.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css'],
})
export class HistoryPageComponent {

  constructor(private dataService: DataServiceService, private messageService: MessageService) {}

  ngOnInit(): void{}

  updateData(){
    this.dataService.updateData("Nuevo dato desde HistoryPageComponent")
  }
  updateMessage(){
    this.messageService.sendMessage('Nuevo mensaje desde HistoryPageComponent');
  }
}
