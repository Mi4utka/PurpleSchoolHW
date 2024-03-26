// eslint-disable-next-line max-classes-per-file
class Billing {
  constructor(amount) {
    this.amount = amount;
  }

  calculateTotal() {
    return this.amount;
  }
}

class HourBilling extends Billing {
  calculateTotal(hour) {
    return this.amount * hour;
  }
}

class ItemBilling extends Billing {
  calculateTotal(itemsCount) {
    return this.amount * itemsCount;
  }
}
