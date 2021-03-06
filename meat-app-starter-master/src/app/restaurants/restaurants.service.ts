import {Restaurant} from './restaurant/restaurant.model'
import {Http} from '@angular/http'
import {MEAT_API} from '../app.api'
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model';

@Injectable()
export class RestaurantsService {

    constructor(private http: Http){}

    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
            .map(response => response.json())
    }

    restaurantById(id: string):  Observable<Restaurant> {
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
            .map(response => response.json())
    }
    reviews(id: string): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
            .map(response => response.json())
    }

    menuItensRestau(id: string): Observable<MenuItem[]> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
            .map(response => response.json())
    }
}