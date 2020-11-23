import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Pizza } from '../models/pizza.model';

@Injectable({
    providedIn: 'root',
})
export class PizzasService {
    constructor(private http: HttpClient) {}

    url = 'http://localhost:3000/pizzas/';

    getPizzas(): Observable<Pizza[]> {
        return this.http.get<Pizza[]>(this.url);
    }

    getPizzasById(id: number): Observable<Pizza> {
        return this.http.get<Pizza>(this.url + id);
    }

    createPizza(payload: Pizza): Observable<Pizza> {
        return of(null);
    }

    updatePizza(pizza: Pizza): Observable<Pizza> {
        return this.http.patch<Pizza>(this.url + pizza.id, pizza);
    }

    removePizza(payload: Pizza): Observable<Pizza> {
        return of(null);
    }
}
