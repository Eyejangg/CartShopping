import { Payment } from './Payment'; // นำเข้าคลาส Payment
import { ShoppingCart } from './shoppingCart'; // นำเข้าคลาส ShoppingCart
import { Order } from "./Order"; // นำเข้าคลาส Order

// คลาส Account ใช้สำหรับจัดการข้อมูลบัญชีผู้ใช้
export class Account {
    private id: string; // รหัสบัญชี
    private billing_address: string; // ที่อยู่บิล
    private is_closed: boolean; // สถานะของบัญชี (ปิดหรือเปิด)
    private open: string; // วันที่เปิดบัญชี
    private closed: string; // วันที่ปิดบัญชี
    private shoppingCart: ShoppingCart; // ตัวแปรเก็บตะกร้าสินค้า
    private orders: Order[] = []; // อาร์เรย์เก็บคำสั่งซื้อ
    private payments: Payment[] =[]; // อาร์เรย์เก็บการชำระเงิน

    // คอนสตรัคเตอร์สำหรับสร้างบัญชีใหม่
    constructor(id: string, billing_address: string, is_closed: boolean, open: string, closed: string) {
        this.id = id; // กำหนดรหัสบัญชี
        this.billing_address = billing_address; // กำหนดที่อยู่บิล
        this.is_closed = is_closed; // กำหนดสถานะบัญชี
        this.open = open; // กำหนดวันที่เปิดบัญชี
        this.closed = closed; // กำหนดวันที่ปิดบัญชี
        this.shoppingCart = new ShoppingCart("22-1-2568"); // สร้างตะกร้าสินค้าพร้อมวันที่
    }

    // ฟังก์ชันสำหรับดึงรหัสบัญชี
    public getId(): string {
        return this.id;
    }

    // ฟังก์ชันสำหรับดึงวันที่เปิดบัญชี
    public getOpen(): string {
        return this.open;
    }

    // ฟังก์ชันสำหรับดึงวันที่ปิดบัญชี
    public getClosed(): string {
        return this.closed;
    }

    // ฟังก์ชันสำหรับดึงที่อยู่บิล
    public getBilling_address(): string {
        return this.billing_address;
    }

    // ฟังก์ชันสำหรับดึงสถานะของบัญชี (ปิดหรือเปิด)
    public getIsclosed(): boolean {
        return this.is_closed;
    }

    // ฟังก์ชันสำหรับดึงตะกร้าสินค้า
    public getShoppingCart(): ShoppingCart {
        return this.shoppingCart;
    }

    // ฟังก์ชันสำหรับเพิ่มคำสั่งซื้อในบัญชี
    public addOrder(order: Order): void {
        this.orders.push(order);
    }

    // ฟังก์ชันสำหรับเพิ่มการชำระเงินในบัญชี
    public addPayment(payment: Payment): void {
        this.payments.push(payment);
    }

    // ฟังก์ชันสำหรับดึงข้อมูลการชำระเงิน
    public getPayments(): Payment[] {
        return this.payments;
    }

    // ฟังก์ชันสำหรับดึงข้อมูลคำสั่งซื้อ
    public getOrders(): Order[] {
        return this.orders;
    }

    // ฟังก์ชันสำหรับตั้งค่าวันที่เปิดบัญชี
    public setOpen(open: string) {
        this.open = open;
    }

    // ฟังก์ชันสำหรับตั้งค่าวันที่ปิดบัญชี
    public setClosed(closed: string) {
        this.closed = closed;
    }

    // ฟังก์ชันสำหรับตั้งค่าที่อยู่บิล
    public setBilling_address(billing_address: string): void {
        this.billing_address = billing_address;
    }

    // ฟังก์ชันสำหรับตั้งค่าสถานะบัญชี
    public setIsclosed(is_closed: boolean): void {
        this.is_closed = is_closed;
    }

    // ฟังก์ชันสำหรับตั้งค่าตะกร้าสินค้า
    public setShoppingCart(shoppingCart: ShoppingCart): void {
        this.shoppingCart = shoppingCart;
    }

    // ฟังก์ชันสำหรับแสดงข้อมูลของบัญชีในรูปแบบสตริง
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
