import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Topping } from '../models/topping';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ToppingsService {
    constructor(private httpClient: HttpClient) {}

    url: string = 'http://localhost:3000/toppings';

    getToppings(): Observable<Topping[]> {
        return this.httpClient.get<Topping[]>(this.url);
    }
}
