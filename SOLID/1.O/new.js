var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Object.defineProperty(Animal.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "type", {
        get: function () {
            return 'Animal';
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Dog.prototype, "type", {
        get: function () {
            return 'Dog';
        },
        enumerable: false,
        configurable: true
    });
    Dog.prototype.makeSound = function () {
        return 'Woef';
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Cat.prototype, "type", {
        get: function () {
            return 'Cat';
        },
        enumerable: false,
        configurable: true
    });
    Cat.prototype.makeSound = function () {
        return 'Miauw';
    };
    return Cat;
}(Animal));
var Parrot = /** @class */ (function (_super) {
    __extends(Parrot, _super);
    function Parrot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Parrot.prototype, "type", {
        get: function () {
            return 'Parrot';
        },
        enumerable: false,
        configurable: true
    });
    Parrot.prototype.makeSound = function () {
        return "I'm a parrot";
    };
    return Parrot;
}(Animal));
var Canary = /** @class */ (function (_super) {
    __extends(Canary, _super);
    function Canary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Canary.prototype, "type", {
        get: function () {
            return 'Canary';
        },
        enumerable: false,
        configurable: true
    });
    Canary.prototype.makeSound = function () {
        return "Tweet";
    };
    return Canary;
}(Animal));
var Hippo = /** @class */ (function (_super) {
    __extends(Hippo, _super);
    function Hippo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Hippo.prototype, "type", {
        get: function () {
            return 'Hippo';
        },
        enumerable: false,
        configurable: true
    });
    Hippo.prototype.makeSound = function () {
        return "Aaaaaaahhhhh";
    };
    return Hippo;
}(Animal));
var Zoo = /** @class */ (function () {
    function Zoo() {
        this._animals = new Array();
    }
    Zoo.prototype.addAnimal = function (animal) {
        this._animals.push(animal);
    };
    Object.defineProperty(Zoo.prototype, "animals", {
        get: function () {
            return this._animals;
        },
        enumerable: false,
        configurable: true
    });
    return Zoo;
}());
var zoo = new Zoo;
zoo.addAnimal(new Cat);
zoo.addAnimal(new Dog);
zoo.addAnimal(new Parrot);
zoo.addAnimal(new Canary);
zoo.addAnimal(new Hippo);
zoo.animals.forEach(function (animal) {
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.makeSound() + ".<br>");
});
