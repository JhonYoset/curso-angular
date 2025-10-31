import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent {
  constructor(private authService: AuthService){
    console.log('AuthComponent created')
  }
  sendLogin(email:string, password: string){
    this.authService.sendCredentials('email@tes.com',"password")
  }
}
