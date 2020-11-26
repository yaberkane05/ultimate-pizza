import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Topping } from 'src/app/models/topping';

@Component({
    selector: 'pizza-toppings',
    styleUrls: ['pizza-toppings.component.scss'],
    templateUrl: './pizza-toppings.component.html',
})
export class PizzaToppingsComponent implements OnInit {
    @Input() toppings: string[] = []; //tous les toppings existants

    @Output() toppingsChange: EventEmitter<string[]> = new EventEmitter(); //emeteur quand on change les toppings sélectionnés

    @Input() value: string[]; // toppings sélectionnés

    constructor() {}

    ngOnInit() {
        if (!this.value) {
            this.value = [];
        }
    }

    selectTopping(topping: string) {
        if (this.existsInValues(topping)) {
            this.value.splice(this.value.indexOf(topping), 1);
        } else {
            this.value.push(topping);
        }
        this.toppingsChange.emit(this.value);
    }

    existsInValues(topping: string) {
        return this.value.includes(topping);
    }
}
