import {Injectable} from '@angular/core';

declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {
  constructor() {
  }

  success(message: string): void {
    alertify.success(message);
  }

  error(message: string): void {
    alertify.error(message);
  }

  info(message: string): void {
    alertify.info(message);
  }

  warning(message: string): void {
    alertify.warning(message);
  }
}
