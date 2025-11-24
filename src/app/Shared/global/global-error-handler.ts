import { ErrorHandler, Injectable } from "@angular/core";
import { LoginService } from "@shared/services/logging.service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor (private LoginService: LoginService){ }

  handleError(error: any): void{
    this.LoginService.logError(error);
    //console.error('GlobalErrorHandler capturo el error: ', error)
  }
}
