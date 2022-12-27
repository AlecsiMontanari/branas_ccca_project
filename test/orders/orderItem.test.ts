import { OrderItem } from "../../src/entities/OrderItem";

test("Should create and order item", () => {
    const orderItem = new OrderItem("Caneta Bic", 2, 0.12);
    expect(orderItem).toBeInstanceOf(OrderItem);
})

test("Should return order item", () => {
    const orderItem = new OrderItem("Caneta Bic", 2, 0.12);
    expect(orderItem.description).toBe("Caneta Bic");
    expect(orderItem.price).toBe(2);
    expect(orderItem.shippingPrice).toBe(0.12);
})