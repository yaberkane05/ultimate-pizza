import { Component, OnInit } from '@angular/core';
import { Pizza } from '../../models/pizza.model';
import { PizzasService } from '../../services/pizzas.service';
@Component({
    selector: 'products',
    styleUrls: ['products.component.scss'],
    templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
    public pizzas: Pizza[];

    constructor(public pizzaService: PizzasService) {}

    ngOnInit() {
        this.pizzaService.getPizzas().subscribe((pizzas: Pizza[]) => {
            if (pizzas) {
                this.pizzas = pizzas;
            }
        });
    }
}
