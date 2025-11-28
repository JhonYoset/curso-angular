import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPageComponent } from './auth-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AuthPageComponent', () => {
  let component: AuthPageComponent;
  let fixture: ComponentFixture<AuthPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      declarations: [AuthPageComponent]
    });
    fixture = TestBed.createComponent(AuthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return invalid form ', () => {
    //Arrange
    const mockCredentials = {
      email: 'test@example.com',
      password: 'ValidPassword123'
    };
    const emaillFormControl: any = component.formLogin.controls['email'];
    const passwordFormControl:any = component.formLogin.controls['password'];
    //act
    emaillFormControl.setValue(mockCredentials.email);
    passwordFormControl.setValue(mockCredentials.password);
        //Assert
    expect(component.formLogin.invalid).toBeTrue();
  });

});
