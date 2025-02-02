import { UserState } from "./UserState";
import { ShoppingCart } from "./shoppingCart";

export class WebUser {
    private login_Id: string;
    private password: string;
    private state: UserState;
    private shoppingCart: ShoppingCart;

    constructor(login_Id: string, password: string, state: UserState = UserState.NEW, shoppingCart: ShoppingCart) {
        this.login_Id = login_Id;
        this.password = password;
        this.state = state;
        this.shoppingCart = shoppingCart;
    }

    public getLoginId(): string {
        return this.login_Id;
    }

    public getPassword(): string {
        return this.password;
    }

    public getState(): UserState {
        return this.state;
    }

    public setState(state: UserState): void {
        this.state = state;
    }

    public getShoppingCart(): ShoppingCart {
        return this.shoppingCart;
    }

    public toString(): string {
        return `WebUser[ 
        loginId= ${this.login_Id},  
        password= ${this.password},  
        state= ${this.state},
        shoppingCart= ${this.shoppingCart.toString()}
    ]`;
    }
}
