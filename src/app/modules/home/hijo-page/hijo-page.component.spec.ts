import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoPageComponent } from './hijo-page.component';

describe('HijoPageComponent', () => {
  let component: HijoPageComponent;
  let fixture: ComponentFixture<HijoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HijoPageComponent]
    });
    fixture = TestBed.createComponent(HijoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
