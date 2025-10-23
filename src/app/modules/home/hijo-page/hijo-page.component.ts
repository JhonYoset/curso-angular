import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-page',
  templateUrl: './hijo-page.component.html',
  styleUrls: ['./hijo-page.component.css']
})
export class HijoPageComponent {

  @Input() title : string ="Componente hijo"
  @Output() titleChange= new EventEmitter<string>();
  emitTitleChange(){
    this.titleChange.emit(this.title)
  }
}
