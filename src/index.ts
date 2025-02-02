
const { WebUser } = require("./WebUser");
const { UserState } = require("./UserState");
const { Customer } = require("./Customer");
const { Account } = require("./Account");
const { Product } = require("./Product");
const { Order } = require("./Order");
const { LineItem } = require("./LineItem");
const { Payment } = require("./Payment");
const { ShoppingCart } = require("./shoppingCart");
const { OrderStatus } = require("./OrderStatus");


console.log("############# Shopping Cart ###############")
const cart1 = new ShoppingCart(new Date("2025-01-19"));
console.log(cart1.toString());
console.log("############# ข้อที่ 1 ###############")
const user1 = new WebUser("EYE", "Jang1", UserState.NEW,cart1);
const user2 = new WebUser("Queq", "Hang2", UserState.ACTIVE,cart1);
console.log(user1.toString());
console.log(user2.toString());

console.log("############# Customer ###############")

const customer1= new Customer("C002", "Nakhon Pathom", "012-345-6789", "664259024@webmail.npru.ac.th", user2);

console.log("############# Account ###############")
const account = new Account("005", "Credit", true, new Date("2025-01-13"), new Date("2025-01-14"), 
);
console.log(account.toString());

console.log("############# ข้อที่ 2 Product 5 ชิ้น ###############")
const product1 = new Product("C300", "ปากกา", "นายจันทร์");
const product2 = new Product("C301", "ไม้บรรทัด", "นายอังคาร");
const product3 = new Product("C302", "สมุด", "นายพุธร");
const product4 = new Product("C303", "ดินสอสี", "นายพฤหัส");
const product5 = new Product("C304", "ดินสอ", "นายศุกร์");
console.log(product1.toString());
console.log(product2.toString());
console.log(product3.toString());
console.log(product4.toString());
console.log(product5.toString());

console.log("############# LineItem ###############")
const item1 = new LineItem(2, 10, product1); //2 * 10 = 20
const item2 = new LineItem(3, 50, product2); //3 * 50 = 150
const item3 = new LineItem(1, 15, product3); //1 * 15 = 15
const item4 = new LineItem(4, 20, product4); //4 * 20 = 80
const item5 = new LineItem(12, 60, product5); //12 * 60 = 720

console.log("############# USER 1  ###############")
const cart3 = new ShoppingCart("22/01/2567");
const user3 = new WebUser("Phitharawat", "Eye", UserState.NEW,cart3);
const order = new Order("O01", "2024-01-15", "2024-01-18", "Kanchanaburi", 0, OrderStatus.NEW);
order.addLineItem(item2);
order.addLineItem(item4);
order.setTotal(order.calculateTotal());
console.log(user3.toString());
console.log(order.toString());

console.log("############# USER 2  ###############")
const cart4 = new ShoppingCart("22/01/2567");
const user4 = new WebUser("Queq", "Hang2", UserState.ACTIVE,cart4);
const order2 = new Order("O02", "2024-01-15", "2024-01-18", "Nakhonpathom", 0, OrderStatus.NEW);
order2.addLineItem(item5);
order2.addLineItem(item4);
order2.setTotal(order2.calculateTotal());
console.log(user4.toString());
console.log(order2.toString());


// console.log("############# ข้อ 4 บิล ###############");
// console.log("############# รายละเอียดตะกร้าสินค้า และ คำสั่งซื้อ ###############");




