import { validateCpf } from "../cpfValidator/cpfAfter";
import { Coupon } from "./Coupon";
import { OrderItem } from "./OrderItem";

export class Order {
  private readonly orderNumber: string;
  private readonly items: OrderItem[];
  private readonly coupon?: Coupon;
  private readonly customerCpf:string;
  private itemsTotalAmount: number = 0;
  private shippingAmount: number = 0;
  private orderAmount: number = 0;

  constructor(orderNumber: string, customerCpf:string, items?: OrderItem[], coupon?: Coupon) {
    
    if(!validateCpf(customerCpf)) throw new Error("Invalid CPF for order");
    
    
    this.orderNumber = orderNumber;
    this.items = items || [];
    this.coupon = coupon;
    this.customerCpf = customerCpf;
  }

  public calculateTotalAmount() {
    for (let item of this.items) {
      this.itemsTotalAmount += item.price;
      this.shippingAmount += item.shippingPrice;
    }
    this.orderAmount = this.itemsTotalAmount + this.shippingAmount;
  }

  public getorderAmount() {
    return this.orderAmount;
  }
}
