import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Pizza } from '../models/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  constructor(private http: HttpClient) {}

  getPizzas(): Observable<Pizza[]> {
    return of(null);
  }

  getPizzasById(id: number): Observable<Pizza> {
    return of(null);
  }


  createPizza(payload: Pizza): Observable<Pizza> {
    return of(null);
  }

  updatePizza(payload: Pizza): Observable<Pizza> {
    return of(null);
  }

  removePizza(payload: Pizza): Observable<Pizza> {
    return of(null);
  }
}
