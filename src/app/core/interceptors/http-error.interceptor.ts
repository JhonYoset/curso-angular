import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { LoginService } from '@shared/services/logging.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private logginService: LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    console.log('HttpInterceptor: ', request)

    return next.handle(request).pipe(
      catchError( (error: HttpErrorResponse)=>{
        switch (error. status) {
          case 400:
            console.warn( 'Bad Request: The server could not understand the request. ')
            break;
          case 401:
            console.warn( 'Unauthorized: Access is denied due to invalid credentials. ' ) ;
            break;
          case 404:
            console.warn( 'Not Found: The requested resource could not be found. ') ;
            break;
          case 500:
            console.warn( ' Internal Server Error: An error occurred on the server. ' ) ;
            break;
        }
        return throwError(() =>error);
      })
    );
  }
}
