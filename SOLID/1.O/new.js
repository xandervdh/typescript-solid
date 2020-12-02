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
    Zoo.prototype.sound = function (sound, type) {
        document.querySelector('#target').innerHTML += (type + " : " + sound + ". <br>");
    };
    return Zoo;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Dog.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "type", {
        get: function () {
            return 'dog';
        },
        enumerable: false,
        configurable: true
    });
    Dog.prototype.sound = function (sound, type) {
        _super.prototype.sound.call(this, sound, type);
    };
    return Dog;
}(Zoo));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Cat.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cat.prototype, "type", {
        get: function () {
            return 'cat';
        },
        enumerable: false,
        configurable: true
    });
    Cat.prototype.sound = function (sound, type) {
        _super.prototype.sound.call(this, sound, type);
    };
    return Cat;
}(Zoo));
var Parrot = /** @class */ (function (_super) {
    __extends(Parrot, _super);
    function Parrot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Parrot.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Parrot.prototype, "type", {
        get: function () {
            return 'parrot';
        },
        enumerable: false,
        configurable: true
    });
    Parrot.prototype.sound = function (sound, type) {
        _super.prototype.sound.call(this, sound, type);
    };
    return Parrot;
}(Zoo));
var Canary = /** @class */ (function (_super) {
    __extends(Canary, _super);
    function Canary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Canary.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Canary.prototype, "type", {
        get: function () {
            return 'canary';
        },
        enumerable: false,
        configurable: true
    });
    Canary.prototype.sound = function (sound, type) {
        _super.prototype.sound.call(this, sound, type);
    };
    return Canary;
}(Zoo));
var pieterke = new Canary;
var blackie = new Dog;
var billie = new Cat;
var jef = new Parrot;
pieterke.sound('Tweet', pieterke.type);
blackie.sound('Woef', blackie.type);
billie.sound('Miauw', billie.type);
jef.sound("I'm a pirate", jef.type);
