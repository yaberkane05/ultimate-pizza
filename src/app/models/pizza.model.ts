import { Topping } from './topping';
export class Pizza {
    id: number;
    name: string;
    toppings: Topping[];

    constructor (base: Partial<Pizza>){
        Object.assign(this, base);
    }

    static fromDto(pizzadto: PizzaDto): Pizza {
        const p = new Pizza({
            id:(pizzadto.id) ? pizzadto.id: 0;
            name:(pizzadto.name) ? pizzadto.name: 'John Doe';
            toppings:(pizzadto.toppings) ? pizzadto.toppings.map((topping) => Topping.fromDto(pizzadto.toppings)): [];
        });
    }
}
