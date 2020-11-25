import { Component, Input, OnInit, Output } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzasService } from '../../services/pizzas.service';
import { ToppingsService } from '../../services/toppings.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Topping } from 'src/app/models/topping';

@Component({
    selector: 'product-item',
    styleUrls: ['product-item.component.scss'],
    templateUrl: './product-item.component.html',
})
export class ProductItemComponent implements OnInit {
    /**
     * CLASSE container gérant à partir de la route les cas
     * 'nouvelle pizza' ou 'modifcation pizza existante'
     * c'est elle qui gère les appels services
     */

    id: any;

    @Output() pizza: Pizza;
    @Output() toppings: string[] = [];

    getPizzaByID() {
        this.pizzaService.getPizzasById(this.id).subscribe((resPizza) => {
            if (resPizza) {
                this.pizza = resPizza;
            } else {
                //do catch error
            }
        });
    }

    updatePizza(pizza: Pizza) {
        this.pizzaService.updatePizza(pizza).subscribe((res) => {
            if (res) {
                // do update success verification
            } else {
            }
        });
    }

    createPizza(pizza: Pizza) {
        this.pizzaService.createPizza(pizza).subscribe((res) => {
            if (res === undefined) {
                window.alert('please verify your pizza before submit');
            } else this.router.navigate(['/products']);
        });
    }

    removePizza(pizza: Pizza) {
        this.pizzaService.removePizza(pizza).subscribe((res) => {
            if (res === undefined) {
                window.alert('error : pizza : ' + pizza.name + ' was not removed.');
            } else this.router.navigate(['/products']);
        });
    }

    getToppings() {
        this.toppingsService.getToppings().subscribe((resToppings) => {
            if (resToppings) {
                resToppings.map((topping: Topping) => {
                    this.toppings.push(topping.toString());
                });
            }
        });
    }

    constructor(
        public pizzaService: PizzasService,
        public toppingsService: ToppingsService,
        private Activatedroute: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.Activatedroute.paramMap.subscribe((params) => {
            if (params) {
                if ((this.id = params.get('id'))) this.getPizzaByID();
            }
        });
        this.getToppings();
    }
}
