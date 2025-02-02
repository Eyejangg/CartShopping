import { Product } from "./Product"; // นำเข้าคลาส Product

// คลาส LineItem ใช้สำหรับเก็บข้อมูลรายการสินค้าในคำสั่งซื้อ
export class LineItem {
    private quantity: number; // จำนวนสินค้า
    private price: number; // ราคาต่อหน่วยของสินค้า
    private product: Product; // ข้อมูลของสินค้าที่เกี่ยวข้อง

    // คอนสตรัคเตอร์สำหรับสร้างรายการสินค้าใหม่
    constructor(quantity: number, price: number, product: Product) {
        this.quantity = quantity ?? 0; // ถ้าค่าจำนวนสินค้าเป็น null หรือ undefined ให้ตั้งค่าเป็น 0
        this.price = price ?? 0; // ถ้าราคาเป็น null หรือ undefined ให้ตั้งค่าเป็น 0
        this.product = product; // กำหนดข้อมูลสินค้าที่เกี่ยวข้อง
    }

    // ฟังก์ชันสำหรับคำนวณยอดรวมของรายการสินค้า (จำนวน x ราคา)
    public calTotal(): number {
        let cal = this.price * this.quantity; // คำนวณยอดรวม
        return cal; // คืนค่าผลลัพธ์
    }

    // ฟังก์ชันสำหรับดึงจำนวนสินค้าที่เกี่ยวข้อง
    public getQuantity(): number {
        return this.quantity;
    }

    // ฟังก์ชันสำหรับดึงราคาของสินค้าต่อหน่วย
    public getPrice(): number {
        return this.price;
    }

    // ฟังก์ชันสำหรับดึงข้อมูลของสินค้าที่เกี่ยวข้อง
    public getProduct(): Product {
        return this.product;
    }

    // ฟังก์ชันสำหรับตั้งค่าจำนวนสินค้าใหม่
    public setQuantity(qty: number): void {
        this.quantity = qty;
    }

    // ฟังก์ชันสำหรับตั้งค่าราคาของสินค้าต่อหน่วยใหม่
    public setPrice(price: number): void {
        this.price = price;
    }

    // ฟังก์ชันสำหรับตั้งค่าสินค้าตัวใหม่
    public setProduct(product: Product): void {
        this.product = product;
    }

    // ฟังก์ชันสำหรับแสดงข้อมูลของรายการสินค้าในรูปแบบสตริง
    public toString(): string {
        return `LineItem[quantity= ${this.quantity}, 
                         price= ${this.price}, 
                         ${this.product.toString()}]`;
    }
}
