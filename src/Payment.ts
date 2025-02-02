export class Payment {
    private id: string;  // ตัวแปรเก็บรหัสของการชำระเงิน
    private paid: string;  // ตัวแปรเก็บสถานะการชำระเงิน (paid, pending)
    private total: number;  // ตัวแปรเก็บจำนวนเงินทั้งหมดที่ชำระ
    private details: string;  // ตัวแปรเก็บรายละเอียดเพิ่มเติมเกี่ยวกับการชำระเงิน

    constructor(id: string, paid: string, total: number, details: string) {
        this.id = id;  // กำหนดค่าให้กับ id
        this.paid = paid;  // กำหนดค่าให้กับ paid
        this.total = total;  // กำหนดค่าให้กับ total
        this.details = details;  // กำหนดค่าให้กับ details
    }

    public getId(): string {
        return this.id;  // คืนค่ารหัสของการชำระเงิน
    }

    public getPaid(): string {
        return this.paid;  // คืนค่าสถานะการชำระเงิน
    }

    public setPaid(paid: string): void {
        this.paid = paid;  // ตั้งค่าสถานะการชำระเงิน
    }

    public getTotal(): number {
        return this.total;  // คืนค่าจำนวนเงินทั้งหมดที่ชำระ
    }

    public setTotal(total: number): void {
        this.total = total;  // ตั้งค่าจำนวนเงินทั้งหมด
    }

    public getDetails(): string {
        return this.details;  // คืนค่ารายละเอียดการชำระเงิน
    }

    public setDetails(details: string): void {
        this.details = details;  // ตั้งค่ารายละเอียดของการชำระเงิน
    }

    public toString(): string {
        return `Payment[ id= ${this.id},  // แสดงข้อมูลการชำระเงินในรูปแบบที่อ่านง่าย
                         paid= ${this.paid},  
                         total= ${this.total},  
                         details= ${this.details}]`;
    }
}
