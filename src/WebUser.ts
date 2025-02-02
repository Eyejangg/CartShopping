import { UserState } from "./UserState";
import { ShoppingCart } from "./shoppingCart";

export class WebUser {
    private login_Id: string;  // ตัวแปรเก็บ ID สำหรับการล็อกอินของผู้ใช้
    private password: string;  // ตัวแปรเก็บรหัสผ่านของผู้ใช้
    private state: UserState;  // ตัวแปรเก็บสถานะของผู้ใช้ (ใช้ค่าจาก UserState)
    private shoppingCart: ShoppingCart;  // ตัวแปรเก็บตะกร้าสินค้าของผู้ใช้

    constructor(login_Id: string, password: string, state: UserState = UserState.NEW, shoppingCart: ShoppingCart) {
        this.login_Id = login_Id;  // กำหนด ID สำหรับการล็อกอินของผู้ใช้
        this.password = password;  // กำหนดรหัสผ่าน
        this.state = state;  // กำหนดสถานะของผู้ใช้ (ค่าเริ่มต้นคือ NEW)
        this.shoppingCart = shoppingCart;  // กำหนดตะกร้าสินค้าของผู้ใช้
    }

    public getLoginId(): string {
        return this.login_Id;  // คืนค่า loginId ของผู้ใช้
    }

    public getPassword(): string {
        return this.password;  // คืนค่ารหัสผ่านของผู้ใช้
    }

    public getState(): UserState {
        return this.state;  // คืนค่าสถานะของผู้ใช้
    }

    public setState(state: UserState): void {
        this.state = state;  // เปลี่ยนสถานะของผู้ใช้
    }

    public getShoppingCart(): ShoppingCart {
        return this.shoppingCart;  // คืนค่าตะกร้าสินค้าของผู้ใช้
    }

    public toString(): string {
        return `WebUser[ 
        loginId= ${this.login_Id},  // แสดง loginId ของผู้ใช้
        password= ${this.password},  // แสดงรหัสผ่านของผู้ใช้
        state= ${this.state},  // แสดงสถานะของผู้ใช้
        shoppingCart= ${this.shoppingCart.toString()}  // แสดงข้อมูลตะกร้าสินค้าของผู้ใช้
    ]`;
    }
}
