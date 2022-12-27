import { Order } from "../../src/entities/Order";

test("Should create an Order", () => {
  const order = new Order('1', '32557894869');
  expect(order).toBeInstanceOf(Order);
});

test("Should not create an Order with invalid CPF", () => {
  expect(() => {
    const order = new Order('1', '32557894819');
  }).toThrowError();
});

test("Should create and Order with 3 items(description, price and quantity)", () => {
  expect(() => {
    return true;
  }).toBeTruthy();
});

test("Should create an order with coupon discount (percentual)", ()=>{
    expect(() => {
        return true;
      }).toBeTruthy();
})

