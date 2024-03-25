class Car {
  #name;

  #model;

  #_run;

  constructor(name, model, run) {
    this.#name = name;
    this.#model = model;
    this.#_run = run;
  }

  get run() {
    return this.#_run;
  }

  set run(newRun) {
    this.#_run = newRun;
  }
}
const car = new Car('Kia', 'Rio', 100500);
console.log(car);
console.log(car.run);
car.run = 10005003;
console.log(car.run);
