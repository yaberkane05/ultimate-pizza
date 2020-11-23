import { Component, Input, OnInit, Output } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzasService } from '../../services/pizzas.service';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

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

    getPizzaByID() {
        this.pizzaService.getPizzasById(this.id).subscribe((resPizza) => {
            if (resPizza) {
                this.pizza = resPizza;
            }
        });
    }

    updatePizza(pizza: Pizza) {
        this.pizzaService.updatePizza(pizza).subscribe((res) => {
            if (res) {
                console.log(res);
            }
        })
    }

    constructor(
        public pizzaService: PizzasService,
        private Activatedroute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.Activatedroute.paramMap.subscribe((params) => {
            if (params) {
                if ((this.id = params.get('id'))) this.getPizzaByID();
            }
        });
    }
}
