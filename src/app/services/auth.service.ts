import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedInSignal = signal(false);
  private userName: string | null = null;

  login(fname : string,lname:string) {
    // Logic for logging in
    this.isLoggedInSignal.set(true);
    this.userName = fname +' ' + lname; // Store the user's name upon logging in
  }

  logout() {
    // Logic for logging out
    this.isLoggedInSignal.set(false);
    this.userName = null;
  }

  getUserName(): string | null {
    return this.userName;
  }
}
