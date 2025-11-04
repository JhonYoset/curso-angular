import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css'],
})
export class HistoryPageComponent {
  formDatos= new FormGroup({
    nombres :new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required, Validators.email])

  })
  constructor() {}

  ngOnInit(): void {
  }
  onSubmit() {
  }
}
