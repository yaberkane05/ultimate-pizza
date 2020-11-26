import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Observable, of } from 'rxjs';
import { Topping } from '../models/topping';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToppingDto } from '../models/dto/topping-dto';

@Injectable({
    providedIn: 'root',
})
export class ToppingsService {
    constructor(private httpClient: HttpClient) {}

    url = environment.baseUrl + '/toppings/';
    toppings: Topping[] = [];

    getToppings(): Observable<Topping[]> {
        return this.httpClient.get<string[]>(this.url).pipe(
            map((toppings: string[]) => {
                return toppings.map((tops: string) => Topping.fromDto(tops));
            })
        );
    }
}
