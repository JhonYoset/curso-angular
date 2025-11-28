import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthService', () => {
  let service: AuthService;
  //let httpClientSpy: { post: jasmine.Spy };
  let cookieServiceSpy: { set: jasmine.Spy };

  beforeEach(() => {
    //httpClientSpy= jasmine.createSpyObj('HttpClient', ['post']);
    //cookieServiceSpy= jasmine.createSpyObj('CookieService', ['set']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    //service = new AuthService(httpClientSpy as any, {} as any);
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
