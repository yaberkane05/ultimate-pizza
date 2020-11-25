export class Topping {
    name: string;
    constructor (base: Partial<Topping>){
        Object.assign(this, base);
    }
    public static fromDto(topping: string): Topping{
        return new Topping({name : topping});
    }
}
