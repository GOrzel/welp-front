import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Api} from '../utils/api';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  fetch(filters?: { [key: string]: any; }): Observable<any> {
    return this.http.get(Api.USERS_END_POINT);
  }

  checkIfExist(login: string): Observable<any> {
    return this.http.get(Api.CHECK_USERS_END_POINT, {params: {login}});
  }

  add(user: any): Observable<any> {
    return this.http.post(Api.USERS_END_POINT, user);
  }

  remove(id: number): Observable<any> {
    return this.http.delete(Api.USERS_END_POINT + '/' + id);
  }

  constructor(private http: HttpClient) {
  }
}
