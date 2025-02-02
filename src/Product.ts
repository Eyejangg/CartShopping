export class Product {
    private id: string;  // ตัวแปรเก็บรหัสของสินค้า
    private name: string;  // ตัวแปรเก็บชื่อของสินค้า
    private supplier: string;  // ตัวแปรเก็บชื่อของผู้จัดจำหน่ายสินค้า

    constructor(id: string, name: string, supplier: string) {
        this.id = id;  // กำหนดค่ารหัสสินค้า
        this.name = name;  // กำหนดชื่อสินค้า
        this.supplier = supplier;  // กำหนดชื่อผู้จัดจำหน่ายสินค้า
    }

    public getId(): string {
        return this.id;  // คืนค่ารหัสของสินค้า
    }

    public getName(): string {
        return this.name;  // คืนค่าชื่อของสินค้า
    }

    public setName(name: string): void {
        this.name = name;  // ตั้งค่าชื่อของสินค้า
    }

    public getSupplier(): string {
        return this.supplier;  // คืนค่าชื่อผู้จัดจำหน่ายของสินค้า
    }

    public setSupplier(supplier: string): void {
        this.supplier = supplier;  // ตั้งค่าผู้จัดจำหน่ายของสินค้า
    }

    public toString(): string {
        return `Product[id=${this.id}, name=${this.name}, supplier=${this.supplier}]`;  // แสดงข้อมูลของสินค้าทั้งหมดในรูปแบบที่อ่านง่าย
    }
}
