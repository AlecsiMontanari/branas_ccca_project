export class OrderItem {

    public readonly description:string;
    public readonly price: number;
    public readonly shippingPrice: number;

    constructor(description: string, price:number, shippingPrice: number) {
        this.description = description;
        this.price = price;
        this.shippingPrice = shippingPrice;
    }
}