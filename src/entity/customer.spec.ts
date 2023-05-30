import { Address } from "./address";
import { Customer } from "./customer";

describe("Customer unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      const customer = new Customer("", "John");
    }).toThrowError("Id is required");
  });
  it("should throw error when name is empty", () => {
    expect(() => {
      const customer = new Customer("123", "");
    }).toThrowError("Name is required");
  });

  it("should change name", () => {
    // Arrange
    const customer = new Customer("123", "John");

    // Act
    customer.changeName("Jane");

    // Assert
    expect(customer.name).toBe("Jane");
  });

  it("should activate a customer", () => {
    const customer = new Customer("123", "John");
    const address = new Address("Rua", 123, "12345-678", "Ilhabela");
    customer.address = address;

    customer.activate();

    expect(customer.isActive()).toBe(true);
  });

  it("should deactivate a customer", () => {
    const customer = new Customer("123", "John");

    customer.deactivate();

    expect(customer.isActive()).toBe(false);
  });

  it("should throw error when address is undefined when you activate a customer", () => {
    expect(() => {
      const customer = new Customer("123", "John");
      customer.activate();
    }).toThrowError("Address is mandatory to activate a customer");
  });
});
