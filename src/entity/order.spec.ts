import { Order } from "./order";
import { OrderItem } from "./order_item";

describe("Order unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      const order = new Order("", "123", []);
    }).toThrowError("Id is required");
  });

  it("should throw error when customerId is empty", () => {
    expect(() => {
      const order = new Order("123", "", []);
    }).toThrowError("CustomerID is required");
  });

  it("should throw error when customerId is empty", () => {
    expect(() => {
      const order = new Order("123", "12", []);
    }).toThrowError("Item quantity must be greater than 0");
  });

  it("should calculate total", () => {
    const item1 = new OrderItem("123", "p1", "Item 1", 10, 2);
    const item2 = new OrderItem("123", "p2", "Item 2", 20, 2);

    const order = new Order("123", "123", [item1]);

    const total = order.total();

    expect(total).toBe(20);

    const order2 = new Order("1234", "1234", [item1, item2]);

    const total2 = order2.total();

    expect(total2).toBe(60);
  });

  it("should throw error when the item quantity is less or equal to zero", () => {
    expect(() => {
      const item1 = new OrderItem("123", "p1", "Item 1", 10, -2);
    }).toThrowError("Quantity must be greater than zero");
  });
});
