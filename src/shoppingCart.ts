import { LineItem } from "./LineItem";

export class ShoppingCart {
    private created: string;
    private lineItems: LineItem[] = [];

    constructor(created: string) {
        this.created = created;
    }

    public addItem(item: LineItem): void {
        this.lineItems.push(item);
    }

    public getItems(): LineItem[] {
        return this.lineItems;
    }

    public toString(): string {
        return `ShoppingCart[created= ${this.created}, items= [${this.lineItems.toString()}]]`;
    }
}
