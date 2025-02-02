import { Payment } from './Payment';
import { ShoppingCart } from './shoppingCart';
import { Order } from "./Order";

export class Account {
    private id: string;
    private billing_address: string;
    private is_closed: boolean;
    private open: string;
    private closed: string;
    private shoppingCart: ShoppingCart;
    private orders: Order[] = [];
    private payments: Payment[] =[];

    constructor(id: string, billing_address: string, is_closed: boolean, open: string, closed: string) {
        this.id = id;
        this.billing_address = billing_address;
        this.is_closed = is_closed;
        this.open = open;
        this.closed = closed;
        this.shoppingCart = new ShoppingCart ("22-1-2568");
    }

    public getId(): string {
        return this.id;
    }

    public getOpen():string {
        return this.open;
    }
    public getClosed():string {
        return this.closed;
    }
    public getBilling_address(): string {
        return this.billing_address;
    }
    public getIsclosed(): boolean {
        return this.is_closed;
    }
    public getShoppingCart(): ShoppingCart {
        return this.shoppingCart;
    }
    public addOrder(order: Order): void {
        this.orders.push(order);
    }
    public addPayment(payment: Payment): void {
        this.payments.push(payment);
    }
    public getPayments():Payment[] {
        return this.payments;
    }
    public getOrders(): Order[] {
        return this.orders;
    }
    public setOpen(open:string){
        this.open = open;
    }
    public setClosed(closed:string){
        this.closed = closed;
    }
    public setBilling_address(billing_address: string): void {
        this.billing_address = billing_address;
    }
    public setIsclosed(is_closed: boolean): void {
        this.is_closed = is_closed;
    }
    public setShoppingCart(shoppingCart: ShoppingCart): void {
        this.shoppingCart = shoppingCart;
    }
    public toString(): string {
        return `Account[id=${this.id}
Billing Address: ${this.billing_address}
Is Closed: ${this.is_closed}
Open: ${this.open}
Closed: ${this.closed}
ShoppingCart: ${this.shoppingCart.toString()}
Orders: ${this.orders.toString()}]`;
    }
}
