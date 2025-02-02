import { OrderStatus } from "./OrderStatus"; // นำเข้าคลาส OrderStatus ที่ใช้ระบุสถานะของคำสั่งซื้อ
import { LineItem } from "./LineItem"; // นำเข้าคลาส LineItem ที่ใช้สำหรับเก็บข้อมูลรายการสินค้า
import { Payment } from "./Payment"; // นำเข้าคลาส Payment ที่ใช้เก็บข้อมูลการชำระเงิน

// คลาส Order ใช้สำหรับเก็บข้อมูลคำสั่งซื้อ
export class Order {
    private number: string; // หมายเลขคำสั่งซื้อ
    private ordered: string; // วันที่สั่งซื้อ
    private shipped: string; // วันที่จัดส่ง
    private ship_to: string; // ที่อยู่สำหรับจัดส่ง
    private status: OrderStatus; // สถานะของคำสั่งซื้อ (เช่น NEW, SHIPPED, CANCELLED)
    private total: number; // ยอดรวมของคำสั่งซื้อ
    private lineItems: LineItem[] = []; // รายการสินค้าที่อยู่ในคำสั่งซื้อ
    private payment: Payment | null = null; // ข้อมูลการชำระเงิน

    // คอนสตรัคเตอร์สำหรับสร้างคำสั่งซื้อใหม่
    constructor(number: string, ordered: string, shipped: string, ship_to: string, total: number, status: OrderStatus = OrderStatus.NEW) {
        this.number = number; // กำหนดหมายเลขคำสั่งซื้อ
        this.ordered = ordered; // กำหนดวันที่สั่งซื้อ
        this.shipped = shipped; // กำหนดวันที่จัดส่ง
        this.ship_to = ship_to; // กำหนดที่อยู่จัดส่ง
        this.status = status; // กำหนดสถานะคำสั่งซื้อ
        this.total = total; // กำหนดยอดรวมของคำสั่งซื้อ
    }

    // ฟังก์ชันสำหรับคำนวณยอดรวมของคำสั่งซื้อจากรายการสินค้า
    public calculateTotal(): number {
        let total = 0;
        for (let i = 0; i < this.lineItems.length; i++) {
            total += this.lineItems[i].calTotal();  // ใช้ calTotal() จาก LineItem เพื่อคำนวณยอดรวม
        }
        return total; // คืนค่ายอดรวม
    }

    // ฟังก์ชันสำหรับตั้งค่าการชำระเงินของคำสั่งซื้อ
    public setPayment(payment: Payment): void {
        this.payment = payment;
        payment.setTotal(this.total); // ตั้งค่าการชำระเงินให้ตรงกับยอดรวมของคำสั่งซื้อ
    }

    // ฟังก์ชันสำหรับดึงหมายเลขคำสั่งซื้อ
    public getNumber(): string {
        return this.number;
    }

    // ฟังก์ชันสำหรับดึงวันที่สั่งซื้อ
    public getOrderedDate(): string {
        return this.ordered;
    }

    // ฟังก์ชันสำหรับตั้งค่าวันที่สั่งซื้อ
    public setOrderedDate(ordered: string): void {
        this.ordered = ordered;
    }

    // ฟังก์ชันสำหรับดึงวันที่จัดส่ง
    public getShippedDate(): string {
        return this.shipped;
    }

    // ฟังก์ชันสำหรับตั้งค่าวันที่จัดส่ง
    public setShippedDate(shipped: string): void {
        this.shipped = shipped;
    }

    // ฟังก์ชันสำหรับดึงที่อยู่จัดส่ง
    public getShipToAddress(): string {
        return this.ship_to;
    }

    // ฟังก์ชันสำหรับตั้งค่าที่อยู่จัดส่ง
    public setShipToAddress(ship_to: string): void {
        this.ship_to = ship_to;
    }

    // ฟังก์ชันสำหรับดึงสถานะของคำสั่งซื้อ
    public getStatus(): OrderStatus {
        return this.status;
    }

    // ฟังก์ชันสำหรับตั้งค่าสถานะของคำสั่งซื้อ
    public setStatus(status: OrderStatus): void {
        this.status = status;
    }

    // ฟังก์ชันสำหรับดึงยอดรวมของคำสั่งซื้อ
    public getTotal(): number {
        return this.total;
    }

    // ฟังก์ชันสำหรับตั้งยอดรวมของคำสั่งซื้อ
    public setTotal(total: number): void {
        this.total = total;
    }

    // ฟังก์ชันสำหรับเพิ่มรายการสินค้าในคำสั่งซื้อ
    public addLineItem(lineItem: LineItem): void {
        this.lineItems.push(lineItem);
        this.total = this.calculateTotal(); // คำนวณยอดรวมใหม่เมื่อเพิ่มรายการสินค้า
    }

    // ฟังก์ชันสำหรับแสดงข้อมูลคำสั่งซื้อในรูปแบบข้อความ
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
