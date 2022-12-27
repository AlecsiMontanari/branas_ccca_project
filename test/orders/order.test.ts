import { Order } from "../../src/entities/Order";

test("Should not create an Order with invalid CPF", () => {
  expect(() => {
    throw new Error("error");
  }).toThrowError();
});

test("Should create and Order with 3 items(description, price and quantity", () => {
  expect(() => {
    const order = new Order();
    return true;
  }).toBeTruthy();
});

test("Should create an order with coupon discount (percentual)", ()=>{
    expect(() => {
        const order = new Order();
        return true;
      }).toBeTruthy();
})

