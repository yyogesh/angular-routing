import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isUserLogin = false;

  constructor() { }

  getIsUserLogin(): boolean {
    return this.isUserLogin
  }

  setIsUserLogin(value: boolean) {
    this.isUserLogin = value;
  }

}
