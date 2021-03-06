import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Pizza } from '../models/pizza.model';
import { PizzaDto } from '../models/dto/pizza-dto';

@Injectable({
    providedIn: 'root',
})
export class PizzasService {
    constructor(private http: HttpClient) {}

    url = environment.baseUrl + '/pizzas/';
    getPizzas(): Observable<Pizza[]> {
        return this.http.get<PizzaDto[]>(this.url).pipe(
            map((pizzaDtos: PizzaDto[]) => {
                return pizzaDtos.map((pizzaDto: PizzaDto) =>
                    Pizza.fromDto(pizzaDto)
                );
            })
        );
    }

    getPizzasById(id: number): Observable<Pizza> {
        return this.http.get<PizzaDto>(this.url + id).pipe(
            map((pizzaDto: PizzaDto) => {
                return Pizza.fromDto(pizzaDto);
            }),
            catchError(this.handleError<Pizza>('getPizzaById'))
        );
    }

    createPizza(newPizza: Pizza): Observable<Pizza> {
        return this.http
            .post<Pizza>(this.url, Pizza.toDto(newPizza))
            .pipe(catchError(this.handleError<Pizza>('createPizza')));
    }

    updatePizza(pizza: Pizza): Observable<Pizza> {
        return this.http
            .patch<Pizza>(this.url + pizza.id, Pizza.toDto(pizza))
            .pipe(catchError(this.handleError<Pizza>('updatePizza')));
    }

    removePizza(delPizza: Pizza): Observable<Pizza> {
        return this.http
            .delete<Pizza>(this.url + delPizza.id)
            .pipe(catchError(this.handleError<Pizza>('removePizza')));
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            // log error
            console.error('error : ' + error); // log to console instead

            // log error's message
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
