import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LifecycleLoggerService } from '@shared/services/lifecycle-logger.service';

@Component({
  selector: 'app-lifecycle-demo',
  templateUrl: './lifecycle-demo.component.html',
  styleUrls: ['./lifecycle-demo.component.css'],
})
export class LifecycleDemoComponent {
  inputData: string='';
  parentData: string='';
  constructor(private logger: LifecycleLoggerService, private router: Router) {
    this.logger.log(
      'LifecycleDemoComponent',
      'constructor',
      'Componente padre creado'
    );
  }

  goToTracks(): void {
    this.router.navigate(['/tracks']);
  }
  ngAfterViewInit(): void{
    this.logger.log(
      'LifecycleDemoComponent',
      'ngAfterViewInit',
      'Componente con after view'
    );
  }
  ngOnInit(): void {
    this.logger.log(
      'LifecycleDemoComponent',
      'ngOnInit',
      'Componente padre inicializado'
    );
  }


  ngOnDestroy(): void {
    debugger;
    this.logger.log(
      'LifecycleDemoComponent',
      'ngOnDestroy',
      'Componente padre destruido'
    );
  }
}
