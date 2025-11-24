import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css'],
})
export class AuthPageComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});
  errorSession: boolean= false;
  constructor(private authService: AuthService, private router: Router) {
    console.log('AuthPageComponent created');
  }
  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  sendLogin() {
    if (this.formLogin.valid) {
      this.authService.sendCredentials(this.formLogin.value.email,this.formLogin.value.password)
      .subscribe({
        next: (response) =>{
          console.log('Login successful', response);
          this.router.navigate(['/favorities']);
          this.errorSession = false;
        },
        error:(error)=>{
          console.error(' Login failed ',error);
          this.errorSession=true;
        }
      }
    );
  }else {
      console.log('Form is invalid');
      }
    }
  }
