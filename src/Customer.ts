import { Account } from './Account';
import { WebUser } from "./WebUser";
export class Customer {
   private id: string;
   private address: string;
   private phone: string;
   private email: string;
   private webuser: WebUser;
   private account: Account;

   constructor(id: string, address: string, phone: string, email: string, webuser: WebUser,account: Account) {
      this.id = id;
      this.address = address;
      this.phone = phone;
      this.email = email;
      this.webuser = webuser;
      this.account = account;
   }

   public getId(): string {
      return this.id
   }
   public setId(id: string): void {
      this.id = id
   }

   public getAddress(): String {
      return this.address;
   }
   public setAddress(address: string): void {
      this.address = address;
   }

   public getPhone(): String {
      return this.phone;
   }
   public setPhone(phone: string): void {
      this.phone = phone;
   }
   public getEmail(): String {
      return this.email;
   }
   public setEmail(email: string): void {
      this.email = email;
   }
   public getWebUser(): WebUser {
      return this.webuser;
   }
   public setWebUser(webuser: WebUser): void {
      this.webuser = webuser;
   }
   public toString(): string {
      return "Customer[id=" + this.id + "\nWebUser:" + this.webuser + "\nAddress:" + this.address + "\nPhone:" + this.phone + "\nEmail:" + this.email + "]";
   }
}


