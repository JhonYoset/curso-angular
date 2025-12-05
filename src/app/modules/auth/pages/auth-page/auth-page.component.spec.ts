import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthPageComponent } from './auth-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AuthPageComponent', () => {
  let component: AuthPageComponent;
  let fixture: ComponentFixture<AuthPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      declarations: [AuthPageComponent]
    });
    fixture = TestBed.createComponent(AuthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should return invalid form',() =>{
    //Arrange
    const mockcredentials ={
      email:'eee3#####',
      password:'1235467888888'
    }
    const emailFormControl: any = component.formLogin.get('email');
    const passwordFormControl: any = component.formLogin.get('password');


    //Act
    emailFormControl.setValue(mockcredentials.email);
    passwordFormControl.setValue(mockcredentials.password);

    //Assert
    expect(component.formLogin.invalid).toBeTrue();

  });

  // it('should be valid form', () => {
  //   // Arrange
  //   const mockCredentials = {
  //     email: 'test@example.com',
  //     password: 'ValidPassword123',
  //   };

  //   const emailFormControl: any = component.formLogin.get('email');
  //   const passwordFormControl: any = component.formLogin.get('password');

  //   // Act
  //   emailFormControl.setValue(mockCredentials.email);
  //   passwordFormControl.setValue(mockCredentials.password);

  //   // Assert
  //   expect(component.formLogin.invalid).toBeTrue();
  // });

});
