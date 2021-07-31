import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isUserLogin = false;

  constructor(private http: HttpClient) { }

  getIsUserLogin(): boolean {
    return this.isUserLogin
  }

  setIsUserLogin(value: boolean) {
    this.isUserLogin = value;
  }

  public getUserData() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}
