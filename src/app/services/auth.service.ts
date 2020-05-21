import {Injectable} from '@angular/core';
import {UsersService} from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // tslint:disable-next-line:variable-name
  private _access: boolean;

  public get access(): boolean {
    return this._access;
  }

  logged(): void {
    this._access = localStorage.getItem('login') !== '';
  }

  getLogin(): string {
    return localStorage.getItem('login');
  }

  logIn(value: { username: any; }): void {
    let userExists: boolean;

    this.usersService.checkIfExist(value.username).subscribe((resp: any) => {
      userExists = resp;
      if (userExists) {
        localStorage.setItem('login', value.username);
        this._access = true;
      }else{
        throw new Error('Nonexistent user');
      }
    });

  }

  logOut(): void {
    this._access = false;
    localStorage.removeItem('login');
  }

  constructor(private usersService: UsersService) {
    this.logged();
  }
}
