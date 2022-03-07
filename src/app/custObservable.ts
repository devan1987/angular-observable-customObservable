export class CustObseravle {
  arrSubscribers = [];

  constructor(sub) {
    sub(this);
  }

  subscribe(subvalue) {
    this.arrSubscribers.push(subvalue);
  }

  next(value) {
    console.log(value);
    this.arrSubscribers.forEach((x) => {
      x(value);
    });
  }
}
