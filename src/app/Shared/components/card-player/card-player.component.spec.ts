import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlayerComponent } from './card-player.component';

describe('CardPlayerComponent', () => {
  let component: CardPlayerComponent;
  let fixture: ComponentFixture<CardPlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPlayerComponent]
    });
    fixture = TestBed.createComponent(CardPlayerComponent);
    component = fixture.componentInstance;

    component.track = {
        _id : 0,
        name : 'Test Track',
        album : 'Test Album',
        url : 'http://testurl.com/track.mp3',
        cover : 'http://testurl.com/cover.jpg',
        artist : {name : 'Test Artist', nickname : 'nickname artist 1', nationality : 'Testland'}
    }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
