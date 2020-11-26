import { PizzaDto } from './dto/pizza-dto';
import { ToppingDto } from './dto/topping-dto';
import { Topping } from './topping';
export class Pizza {
    id: number;
    name: string;
    toppings: Topping[];

    constructor(base: Partial<Pizza>) {
        Object.assign(this, base);
    }

    static fromDto(pizzadto: PizzaDto): Pizza {
        return new Pizza({
            id: pizzadto.id ? pizzadto.id : 0,
            name: pizzadto.name ? pizzadto.name : 'Natura',
            toppings: pizzadto.toppings
                ? pizzadto.toppings.map((topping: string) => {
                      return Topping.fromDto(topping);
                  })
                : [],
        });
    }

    static toDto(pizza: Pizza): PizzaDto {
        return {
            id: pizza.id ? pizza.id : 0,
            name: pizza.name ? pizza.name : 'Natura',
            toppings: pizza.toppings
                ? pizza.toppings.map((topping: Topping) => {
                      return topping.name;
                  })
                : [],
        };
    }
}
