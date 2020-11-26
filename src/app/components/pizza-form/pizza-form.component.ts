import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pizza } from '../../models/pizza.model';
import { Router } from '@angular/router';
import { Topping } from 'src/app/models/topping';

@Component({
    selector: 'pizza-form',
    styleUrls: ['pizza-form.component.scss'],
    templateUrl: './pizza-form.component.html',
})
export class PizzaFormComponent implements OnInit {
    @Input() pizza: Pizza;
    @Input() toppings: string[];
    @Output() topSelecs: string[];

    @Output() selected = new EventEmitter<Pizza>();
    @Output() create = new EventEmitter<Pizza>();
    @Output() update = new EventEmitter<Pizza>();
    @Output() remove = new EventEmitter<Pizza>();

    constructor(private router: Router) {}

    ngOnInit() {
        if (!this.pizza) {
            this.pizza = new Pizza({ id: 0, name: 'Nueva', toppings: [] });
        }
        this.topSelecs = this.pizza?.toppings.map((topping: Topping) => {
            return topping.name;
        });
    }

    createPizza() {
        if (this.pizza.name) {
            let newPizza: Pizza = new Pizza({
                name: this.pizza.name,
                toppings: this.pizza.toppings,
            });

            this.create.emit(newPizza);
        } else {
            window.alert('please enter a name for your pizza 😊');
        }
    }

    updatePizza(id: number, pizzaName: string) {
        if (pizzaName) {
            let editedPizza: Pizza = new Pizza({
                id: id,
                name: pizzaName,
                toppings: this.pizza.toppings,
            });

            this.update.emit(editedPizza);
        } else {
            window.alert('please enter a name for your pizza 😊');
        }
    }

    removePizza() {
        if (this.pizza.id) {
            if (
                window.confirm('Please confirm removal of ' + this.pizza.name)
            ) {
                this.remove.emit(this.pizza);
            }
        }
    }

    updSelecToppings(selToppings: string[]) {
        this.pizza.toppings = [];
        selToppings.map((topping: string) => {
            this.pizza.toppings.push(new Topping({ name: topping }));
        });
    }

    hasRoute(route: string) {
        return this.router.url.includes(route);
    }
    /**
     * classe gérant les actions sur le formulaire de création/modification de pizza
     * doit assurer que le nom de la pizza n'est pas vide
     * doit emettre l'action à réaliser à la page (container)
     * le delete ne peut se faire que sur une pizza existante et demander une confirmation (window.confirm)
     */
}
