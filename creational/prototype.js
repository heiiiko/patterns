class Car {
  constructor(wheels, component) {
    this.wheels = wheels;
    this.component = component;
  }
  
  clone() {
    const newObject = Object.create(this);
    newObject.wheels = this.wheels;
    newObject.component = this.component;
    return newObject;
  }
}

const component = {
  color: 'white',
};

const myCar = new Car(4, component);

const anotherCar = myCar.clone();

console.log(myCar === anotherCar);
console.log(anotherCar.__proto__ === myCar)
