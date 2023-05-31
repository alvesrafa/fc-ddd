import { Product } from "./product";

describe("Product unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      const product = new Product("", "Product", 10);
    }).toThrowError("Id is required");
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      const product = new Product("123", "", 10);
    }).toThrowError("Name is required");
  });

  it("should throw error when price is less than 0", () => {
    expect(() => {
      const product = new Product("123", "123", -1);
    }).toThrowError("Price must be greatear than 0");
  });

  it("should change name", () => {
    const product = new Product("123", "Product", 10);
    product.changeName("Product 2");
    expect(product.name).toBe("Product 2");
  });

  it("should change price", () => {
    const product = new Product("123", "Product", 10);
    product.changePrice(20);
    expect(product.price).toBe(20);
  });
});
