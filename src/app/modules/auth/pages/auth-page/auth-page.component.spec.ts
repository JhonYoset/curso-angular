import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPageComponent } from './auth-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthPageComponent', () => {
  let component: AuthPageComponent;
  let fixture: ComponentFixture<AuthPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AuthPageComponent]
    });
    fixture = TestBed.createComponent(AuthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
