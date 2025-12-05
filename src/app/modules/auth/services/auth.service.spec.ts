import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import * as mockData from '../../../data/user.json';
import { of } from 'rxjs';
describe('AuthService', () => {
  let service: AuthService;
  let mockUser: any = (mockData as any).default;
  let httpClientSpy: { post: jasmine.Spy };
  let cookieServiceSpy: { set: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    cookieServiceSpy = jasmine.createSpyObj('CookiseService', ['set']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
    });

    service = new AuthService(httpClientSpy as any, cookieServiceSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send credentials and return a token', (done: DoneFn) => {
    const user = mockUser.userOk;
    const expectedResponse = {
      tokenSession: 'asdasdasdasd',
    };

    httpClientSpy.post.and.returnValue(of(expectedResponse));

    service.sendCredentials(user.email, user.password).subscribe((response) => {
      const responseProperties = Object.keys(response);

      expect(response).toEqual(expectedResponse);
      expect(responseProperties).toContain('tokenSession');
      done();
    });
  });
});
