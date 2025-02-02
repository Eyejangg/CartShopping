export class OrderStatus {
    public static NEW = "new"; 
    public static HOLD = "hold";
    public static SHIPPED = "shipped";
    public static DELIVERED = "delivered";
    public static CLOSED = "closed";
}

// โค้ดนี้เป็นการสร้างคลาส OrderStatus ที่เก็บสถานะต่างๆ ของคำสั่งซื้อ โดยใช้ค่าคงที่
//  (constant values) ที่ไม่สามารถเปลี่ยนแปลงได้ ซึ่งค่าต่างๆ 
// ในคลาสนี้แสดงถึงสถานะของคำสั่งซื้อในแต่ละขั้นตอน เช่น "ใหม่", "ระงับ", "จัดส่ง", "จัดส่งเสร็จสิ้น", และ "ปิดคำสั่งซื้อ"

// การใช้ static ในคลาสนี้หมายความว่าเราสามารถเข้าถึงค่าคงที่เหล่านี้ได้โดยตรงจากชื่อคลาส โดยไม่ต้องสร้างออบเจ็กต์ใหม่ของคลาส OrderStatus