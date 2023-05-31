import { Customer } from "../entity/customer";
import { Order } from "../entity/order";
import { OrderItem } from "../entity/order_item";
import { OrderService } from "./order.service";

describe("Order service unit test", () => {
  it("should get total off all orders", () => {
    const item1 = new OrderItem("i1", "o1", "Item 1", 10, 1);
    const item2 = new OrderItem("i2", "o2", "Item 2", 20, 2);

    const order1 = new Order("o1", "c1", [item1]);
    const order2 = new Order("o2", "c2", [item2]);
    const order3 = new Order("o3", "c3", [item1, item2]);

    const total = OrderService.total([order1, order2, order3]);

    expect(total).toBe(100);
  });

  it("should place an order", () => {
    const customer = new Customer("c1", "Customer 1");
    const item1 = new OrderItem("i1", "o1", "Item 1", 10, 1);

    const order = OrderService.placeOrder(customer, [item1]);

    expect(customer.rewardPoints).toBe(5);

    expect(order.total()).toBe(10);
  });
});
