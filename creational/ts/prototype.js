var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.clone = function () {
        var clone = Object.create(this);
        clone.component = Object.create(this.component);
        // Клонирование объекта, который имеет вложенный объект с обратной
        // ссылкой, требует специального подхода. После завершения клонирования
        // вложенный объект должен указывать на клонированный объект, а не на
        // исходный объект. Для данного случая хорошо подойдёт оператор
        // расширения (spread).
        clone.circularReference = __assign(__assign({}, this.circularReference), { prototype: __assign({}, this) });
        return clone;
    };
    return Car;
}());
var ComponentWithBackReference = /** @class */ (function () {
    function ComponentWithBackReference(prototype) {
        this.prototype = prototype;
    }
    return ComponentWithBackReference;
}());
var p1 = new Car();
p1.wheels = 4;
p1.component = {
    color: 'white',
    spoiler: true
};
p1.circularReference = new ComponentWithBackReference(p1);
var p2 = p1.clone();
console.log(p1 === p2);
// @ts-ignore
console.log(p2.__proto__ === p1);
