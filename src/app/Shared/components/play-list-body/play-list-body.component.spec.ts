import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayListBodyComponent } from './play-list-body.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PlayListBodyComponent', () => {
  let component: PlayListBodyComponent;
  let fixture: ComponentFixture<PlayListBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PlayListBodyComponent]
    });
    fixture = TestBed.createComponent(PlayListBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
