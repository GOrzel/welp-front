import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Api} from '../utils/api';
import {AuthService} from './auth.service';

@Injectable()
export class FoodPlacesService {

  fetch(): Observable<any> {
    const login = this.authService.getLogin();
    console.log(login);
    return this.http.get(Api.FOODPLACES_END_POINT, {params: {login}});
  }

  add(foodplace: any): Observable<any> {
    return this.http.post(Api.FOODPLACES_END_POINT, foodplace);
  }

  rate(foodPlaceId: number, rating: string): Observable<any> {
    const login = this.authService.getLogin();
    return this.http.put(Api.RATINGS_END_POINT + '/' + foodPlaceId, login, {params: {rating}});
  }

  remove(id: number): Observable<any> {
    return this.http.delete(Api.FOODPLACES_END_POINT + '/' + id);
  }

  constructor(private http: HttpClient,
              private authService: AuthService) {
  }
}
