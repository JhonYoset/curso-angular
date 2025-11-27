import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardPlayerComponent } from './card-player.component';

describe('CardPlayerComponent', () => {
  let component: CardPlayerComponent;
  let fixture: ComponentFixture<CardPlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPlayerComponent],
    });
    fixture = TestBed.createComponent(CardPlayerComponent);
    component = fixture.componentInstance;

    component.track = {
      _id: 0,
      name: '',
      album: '',
      url: '',
      cover: '',
      artist: {
        name: '',
        nickname: '',
        nationality: '',
      },
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
