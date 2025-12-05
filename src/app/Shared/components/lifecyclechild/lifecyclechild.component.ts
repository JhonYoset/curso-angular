import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LifecycleLoggerService } from '@shared/services/lifecycle-logger.service';
@Component({
  selector: 'app-lifecyclechild',
  templateUrl: './lifecyclechild.component.html',
  styleUrls: ['./lifecyclechild.component.css'],
})
export class LifecyclechildComponent {
  @Input() parentData: string = '';
  @Input() inputData: string = '';
  constructor(private logger: LifecycleLoggerService, private router: Router) {
    this.logger.log(
      'LifecycleChildComponent',
      'constructor',
      'Componente hijo creado'
    );
  }

  ngOnInit(): void {
    this.logger.log(
      'LifecycleChildComponent',
      'ngOnInit',
      'Componente hijo inicializado'
    );
  }

  ngAfterViewInit(): void {
    this.logger.log(
      'LifecycleChildComponent',
      'ngAfterViewInit',
      'Vista del componente hijo inicializada'
    );
  }

  mgOnChanges(changes: SimpleChanges): void {
    const cambios= Object.keys(changes).map(key=>{
      const change = changes[key];
      const prev= change.previousValue;
      const curr = change.currentValue;
      return `Propiedad: ${key}, Anterior: ${prev}, Actual: ${curr}`;
    }).join(',');
    this.logger.log(
      'LifeCycleChildComponent',
      'ngOnChanges',
      ' Datos del componente padre cambiaron'
    );
  }

  ngOnDestroy(): void {
    this.logger.log(
      'LifecycleChildComponent',
      'ngOnDestroy',
      'Componente hijo destruido'
    );
  }
}
