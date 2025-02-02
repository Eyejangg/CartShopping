import { Account } from './Account'; // นำเข้าคลาส Account
import { WebUser } from "./WebUser"; // นำเข้าคลาส WebUser

// คลาส Customer ใช้สำหรับเก็บข้อมูลของลูกค้า
export class Customer {
   private id: string; // รหัสลูกค้า
   private address: string; // ที่อยู่ของลูกค้า
   private phone: string; // เบอร์โทรของลูกค้า
   private email: string; // อีเมลของลูกค้า
   private webuser: WebUser; // ข้อมูลของ WebUser ที่เกี่ยวข้อง
   private account: Account; // ข้อมูลของบัญชีที่เกี่ยวข้องกับลูกค้า

   // คอนสตรัคเตอร์สำหรับสร้างข้อมูลลูกค้าใหม่
   constructor(id: string, address: string, phone: string, email: string, webuser: WebUser, account: Account) {
      this.id = id; // กำหนดรหัสลูกค้า
      this.address = address; // กำหนดที่อยู่ของลูกค้า
      this.phone = phone; // กำหนดเบอร์โทรของลูกค้า
      this.email = email; // กำหนดอีเมลของลูกค้า
      this.webuser = webuser; // กำหนดข้อมูลของ WebUser
      this.account = account; // กำหนดข้อมูลบัญชีของลูกค้า
   }

   // ฟังก์ชันสำหรับดึงรหัสลูกค้า
   public getId(): string {
      return this.id;
   }

   // ฟังก์ชันสำหรับตั้งค่ารหัสลูกค้า
   public setId(id: string): void {
      this.id = id;
   }

   // ฟังก์ชันสำหรับดึงที่อยู่ของลูกค้า
   public getAddress(): string {
      return this.address;
   }

   // ฟังก์ชันสำหรับตั้งค่าที่อยู่ของลูกค้า
   public setAddress(address: string): void {
      this.address = address;
   }

   // ฟังก์ชันสำหรับดึงเบอร์โทรของลูกค้า
   public getPhone(): string {
      return this.phone;
   }

   // ฟังก์ชันสำหรับตั้งค่าเบอร์โทรของลูกค้า
   public setPhone(phone: string): void {
      this.phone = phone;
   }

   // ฟังก์ชันสำหรับดึงอีเมลของลูกค้า
   public getEmail(): string {
      return this.email;
   }

   // ฟังก์ชันสำหรับตั้งค่าอีเมลของลูกค้า
   public setEmail(email: string): void {
      this.email = email;
   }

   // ฟังก์ชันสำหรับดึงข้อมูล WebUser ของลูกค้า
   public getWebUser(): WebUser {
      return this.webuser;
   }

   // ฟังก์ชันสำหรับตั้งค่า WebUser ของลูกค้า
   public setWebUser(webuser: WebUser): void {
      this.webuser = webuser;
   }

   // ฟังก์ชันสำหรับแสดงข้อมูลของลูกค้าในรูปแบบสตริง
   public toString(): string {
      return "Customer[id=" + this.id + "\nWebUser:" + this.webuser + "\nAddress:" + this.address + "\nPhone:" + this.phone + "\nEmail:" + this.email + "]";
   }
}
