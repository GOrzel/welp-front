import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Api} from '../utils/api';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  fetch(): Observable<any> {
    return this.http.get(Api.CATEGORIES_END_POINT);
  }

  add(user: any): Observable<any> {
    return this.http.post(Api.CATEGORIES_END_POINT, user);
  }

  constructor(private http: HttpClient) {
  }
}
