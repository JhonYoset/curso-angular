import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent {
  usuario: string = '';
  user={
    name:'',
    email: '',
    age:null
  }

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.usuario=this.route.snapshot.paramMap.get('texto')||'';
    console.log(this.usuario)
  }
  onSubmit(){
    console.log(this.user);
  }
}
