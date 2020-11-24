import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pizza } from '../../models/pizza.model';
import { Router } from '@angular/router';

@Component({
    selector: 'pizza-form',
    styleUrls: ['pizza-form.component.scss'],
    templateUrl: './pizza-form.component.html',
})
export class PizzaFormComponent implements OnInit {
    @Input() pizza: Pizza;
    @Input() toppings: string[];

    @Output() selected = new EventEmitter<Pizza>();
    @Output() create = new EventEmitter<Pizza>();
    @Output() update = new EventEmitter<Pizza>();
    @Output() remove = new EventEmitter<Pizza>();

    createPizza() {
        if (this.pizza.name) {
            let newPizza: Pizza = new Pizza();
            //newPizza.id = id;
            newPizza.name = this.pizza.name;
            newPizza.toppings = this.pizza.toppings;

            this.create.emit(newPizza);
        } else {
            window.alert('please enter a name for your pizza 😊');
        }
    }

    updatePizza(id: number, pizzaName: string) {
        if (pizzaName) {
            let editedPizza: Pizza = new Pizza();
            editedPizza.id = id;
            editedPizza.name = pizzaName;
            editedPizza.toppings = this.pizza.toppings;

            this.update.emit(editedPizza);
        } else {
            window.alert('please enter a name for your pizza 😊');
        }
    }

    removePizza() {
        if (this.pizza.id) {
            if(window.confirm('Please confirm removal of ' + this.pizza.name)) {
                this.remove.emit(this.pizza);
            }
        }
    }

    updSelecToppings(selToppings) {
        this.pizza.toppings = selToppings;
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

    constructor(private router: Router) {}

    ngOnInit() {
        if(!this.pizza) {
            this.pizza = new Pizza();
        }
    }
}
