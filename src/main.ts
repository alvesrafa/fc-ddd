import { Address } from "./entity/address";
import { Customer } from "./entity/customer";
import { Order } from "./entity/order";
import { OrderItem } from "./entity/order_item";

// Customer Agregate
const customer = new Customer("123", "John");
const address = new Address("Rua", 123, "São Paulo", "SP");
customer.address = address;
customer.activate();

// Order Agregate
const item1 = new OrderItem("1", "p1", "Item 1", 10, 2);
const item2 = new OrderItem("2", "p2", "Item 2", 20, 2);
const order = new Order("123", customer.id, [item1, item2]);
