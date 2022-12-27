export class Coupon {
  private readonly name: string;
  private readonly amount: number;
  private readonly percentage: number;

  constructor(name: string, amount: number, percentage: number) {
    if (amount === 0 && percentage === 0) {
      throw new Error(
        "Invalid parameters for creation. Coupon should have percentage or amount"
      );
    }
    this.name = name;
    this.amount = amount;
    this.percentage = percentage;
  }

  public getAmount(name: string) {
    if (name === this.name) {
      return this.amount || 0;
    }
    throw new Error("Invalid coupon name");
  }

  public getPercentage(name: string) {
    if (name === this.name) {
      return this.percentage || 0;
    }
    throw new Error("Invalid coupon name");
  }
}
