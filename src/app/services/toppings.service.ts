import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Topping } from '../models/topping';

@Injectable({
  providedIn: 'root'
})
export class ToppingsService {
  constructor() {}

  getToppings(): Observable<Topping[]> {
    return of(null)
  }
}
