import { Injectable } from '@angular/core';
import {LoginResponse} from "../models/LoginRequest";

const USER_KEY = 'auth-user';
const USER_KEY_REFRESH = 'auth-user-refresh';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(loginResponse: LoginResponse): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(loginResponse.accessToken));
    window.sessionStorage.setItem(USER_KEY_REFRESH, JSON.stringify(loginResponse.refrechToken));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }
}
