import { LineItem } from "./LineItem";

export class ShoppingCart {
    private created: string;  // ตัวแปรเก็บวันที่สร้างของตะกร้าสินค้า
    private lineItems: LineItem[] = [];  // ตัวแปรเก็บรายการสินค้า (LineItem) ในตะกร้า

    constructor(created: string) {
        this.created = created;  // กำหนดวันที่สร้างตะกร้า
    }

    public addItem(item: LineItem): void {
        this.lineItems.push(item);  // เพิ่มรายการสินค้า (LineItem) ลงในตะกร้าสินค้า
    }

    public getItems(): LineItem[] {
        return this.lineItems;  // คืนค่ารายการสินค้าทั้งหมดในตะกร้า
    }

    public toString(): string {
        return `ShoppingCart[created= ${this.created}, items= [${this.lineItems.toString()}]]`;  // แสดงข้อมูลตะกร้าสินค้า รวมทั้งวันที่สร้างและรายการสินค้าทั้งหมด
    }
}
