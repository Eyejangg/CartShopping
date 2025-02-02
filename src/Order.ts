import { OrderStatus } from "./OrderStatus";
import { LineItem } from "./LineItem";
import { Payment } from "./Payment";

export class Order {
    private number: string;
    private ordered: string;
    private shipped: string;
    private ship_to: string;
    private status: OrderStatus;
    private total: number;
    private lineItems: LineItem[] = [];
    private payment: Payment | null = null;

    constructor(number: string, ordered: string, shipped: string, ship_to: string, total: number, status: OrderStatus = OrderStatus.NEW) {
        this.number = number;
        this.ordered = ordered;
        this.shipped = shipped;
        this.ship_to = ship_to;
        this.status = status;
        this.total = total;
    }

    public calculateTotal(): number {
        let total = 0;
        for (let i = 0; i < this.lineItems.length; i++) {
            total += this.lineItems[i].calTotal();  // ใช้ calTotal() ใน lineitem
        }
        return total;
    }

    public setPayment(payment: Payment): void {
        this.payment = payment;
        // ตั้งค่าการชำระเงินให้ตรงกับยอดรวมของคำสั่งซื้อ
        payment.setTotal(this.total);
    }

    public getNumber(): string {
        return this.number;
    }

    public getOrderedDate(): string {
        return this.ordered;
    }

    public setOrderedDate(ordered: string): void {
        this.ordered = ordered;
    }

    public getShippedDate(): string {
        return this.shipped;
    }

    public setShippedDate(shipped: string): void {
        this.shipped = shipped;
    }

    public getShipToAddress(): string {
        return this.ship_to;
    }

    public setShipToAddress(ship_to: string): void {
        this.ship_to = ship_to;
    }

    public getStatus(): OrderStatus {
        return this.status;
    }

    public setStatus(status: OrderStatus): void {
        this.status = status;
    }

    public getTotal(): number {
        return this.total;
    }

    public setTotal(total: number): void {
        this.total = total;
    }

    public addLineItem(lineItem: LineItem): void {
        this.lineItems.push(lineItem);
        // คำนวณยอดรวมของคำสั่งซื้อใหม่เมื่อเพิ่มรายการสินค้า
        this.total = this.calculateTotal();
    }

    public toString(): string {
        return `Order[
            number=${this.number},
            ordered=${this.ordered},
            shipped=${this.shipped},
            ship_to=${this.ship_to},
            status=${this.status},
            total=${this.total},
            ${this.lineItems.toString()},
            ${this.payment ? this.payment.toString() : ""}
        ]`;
    }
}
