import { Coupon } from "../../src/entities/Coupon";

test("Should create a percentage Coupon", () => {
    const coupon = new Coupon("desconto_percentual", 0, 10);
    expect(coupon).toBeInstanceOf(Coupon);
    expect(coupon.getPercentage("desconto_percentual")).toBe(10);
})

test("Should create an amount Coupon", () => {
    const coupon = new Coupon("desconto_valor", 12.3, 0);
    expect(coupon).toBeInstanceOf(Coupon);
    expect(coupon.getAmount("desconto_valor")).toBe(12.3);
})

test("Should throw an error if coupon is not created", () => {
    expect(()=>{
        const coupon = new Coupon("errado", 0,0);
    }).toThrowError();
})