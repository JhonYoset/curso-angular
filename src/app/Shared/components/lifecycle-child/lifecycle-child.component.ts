import { Component, Input, SimpleChanges } from '@angular/core';
import { LifecycleLoggerService } from '@shared/services/lifecycle-logger.service';

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.css']
})
export class LifecycleChildComponent {
    @Input() parentData : string = '';


    constructor(private logger : LifecycleLoggerService){
      this.logger.log('LifecycleDemoComponent', 'constructor', 'componente hijo creado')
    }
  
    ngOnInit() : void{
      this.logger.log('LifecycleDemoComponent', 'ngOnInit', 'componente hijo inicializado')
    }
  
    ngOnDestroy() : void{
      this.logger.log('LifecycleDemoComponent', 'ngOnDestroy', 'componente hijo destruido')
    }
  
    ngAfterViewInit() : void{
      this.logger.log('LifecycleDemoComponent', 'ngAfterViewInit', 'vista del componente hijo inicializada')
    }

    ngOnChange(changes : SimpleChanges) : void{
      const cambios = Object.keys(changes).map(key =>{
        const change = changes[key]
        const prev = change.previousValue;
        const curr = change.currentValue;
        return `Propiedad: ${key}, Anterior: ${prev}, Actual: ${curr}`
      }).join(', ');
      console.log(cambios)
      this.logger.log('LifecycleDemoComponent', 'ngOnchange', 'vista cambió')
    }

  ngDoCheck() : void{
    this.logger.log('LifecycleDemoComponent', 'ngDoCheck', 'componente hijo checked')
  }

}
