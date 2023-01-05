class Car {
  public wheels: number;
  public component: object;
  public circularReference: ComponentWithBackReference;
  
  public clone(): this {
    const clone = Object.create(this);
    
    clone.component = Object.create(this.component);
    
    // Клонирование объекта, который имеет вложенный объект с обратной
    // ссылкой, требует специального подхода. После завершения клонирования
    // вложенный объект должен указывать на клонированный объект, а не на
    // исходный объект. Для данного случая хорошо подойдёт оператор
    // расширения (spread).
    clone.circularReference = {
      ...this.circularReference,
      prototype: { ...this },
    };
    
    return clone;
  }
}

class ComponentWithBackReference {
  public prototype;
  
  constructor(prototype: Car) {
    this.prototype = prototype;
  }
}

const p1 = new Car();
p1.wheels = 4;
p1.component = {
  color: 'white',
  spoiler: true,
};
p1.circularReference = new ComponentWithBackReference(p1);

const p2 = p1.clone();

console.log(p1 === p2)
// @ts-ignore
console.log(p2.__proto__ === p1)
