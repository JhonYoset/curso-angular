import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LifecycleLoggerService } from '@shared/services/lifecycle-logger.service';

@Component({
  selector: 'app-lifecycle-demo',
  templateUrl: './lifecycle-demo.component.html',
  styleUrls: ['./lifecycle-demo.component.css']
})
export class LifecycleDemoComponent implements OnInit {
  inputData : string = '';
  parentData : string = '';
  cambiosDetectados : number = 0;
  constructor(private logger : LifecycleLoggerService, private router : Router){
    this.logger.log('LifecycleDemoComponent', 'constructor', 'componente padre creado')
  }

  goToTracks(){
    this.router.navigate(['/tracks'])
  }

  updateChildData(){
    this.parentData = this.inputData
  }

  ngOnInit() : void{
    this.logger.log('LifecycleDemoComponent', 'ngOnInit', 'componente padre inicializado')
  }

  ngOnDestroy() : void{
    this.logger.log('LifecycleDemoComponent', 'ngOnDestroy', 'componente padre destruido')
  }

  ngDoCheck() : void{
    this.cambiosDetectados ++
    if(this.cambiosDetectados <= 5){
      this.logger.log('LifecycleDemoComponent', 'ngDoCheck', `componente padre checked: ${this.cambiosDetectados}`)
    }
  }

  ngAfterViewInit() : void{
    this.logger.log('LifecycleDemoComponent', 'ngAfterViewInit', 'vista del componente hijo inicializada')
  }

  ngAfterContentInit() : void{
    this.logger.log('LifecycleDemoComponent', 'ngAfterContentInit', 'componente padre inicializada')
  }
}
