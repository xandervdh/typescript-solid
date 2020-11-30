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
var Car = /** @class */ (function () {
    function Car(MAXIMUM_FUEL_CAPACITY) {
        //it is convention to start property names in TypeScript with an underscore.
        // If you want to known why, remove the underscore and see if your compiler is throwing you an error!
        this._miles = 0;
        //By changing this variable to readonly I have in essence created a property constant.
        // the only subtle difference is that you can write once to the variable inside the constructor
        this.FUEL_MILEAGE = 10;
        this._engine = new Engine(MAXIMUM_FUEL_CAPACITY);
    }
    Object.defineProperty(Car.prototype, "miles", {
        get: function () {
            return this._miles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        enumerable: false,
        configurable: true
    });
    return Car;
}());
var MusicPlayer = /** @class */ (function () {
    function MusicPlayer() {
        //it is convention to start property names in TypeScript with an underscore.
        // If you want to known why, remove the underscore and see if your compiler is throwing you an error!
        this._Level = 0;
        this._oldLevel = 50;
    }
    Object.defineProperty(MusicPlayer.prototype, "Level", {
        //Take attention to these getter and setters
        get: function () {
            return this._Level;
        },
        set: function (value) {
            this._Level = value;
            this._oldLevel = value;
        },
        enumerable: false,
        configurable: true
    });
    MusicPlayer.prototype.turnMusicOn = function () {
        this._Level = this._oldLevel;
    };
    MusicPlayer.prototype.turnMusicOff = function () {
        this._Level = 0;
    };
    return MusicPlayer;
}());
var Engine = /** @class */ (function (_super) {
    __extends(Engine, _super);
    function Engine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //it is convention to start property names in TypeScript with an underscore.
        // If you want to known why, remove the underscore and see if your compiler is throwing you an error!
        _this._fuel = 0;
        _this._engineStatus = false;
        return _this;
    }
    Object.defineProperty(Engine.prototype, "fuel", {
        get: function () {
            return this._fuel;
        },
        enumerable: false,
        configurable: true
    });
    //When a value can only go one way (you add fuel, consuming fuel is handled by the car itself)
    // it is better to provide a specific method for this instead of a generic setter.
    // with a setter there is always the chance of somebody lowering the fuel amount by accident.
    Engine.prototype.addFuel = function (fuel) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    };
    Object.defineProperty(Engine.prototype, "engineStatus", {
        get: function () {
            return this._engineStatus;
        },
        enumerable: false,
        configurable: true
    });
    Engine.prototype.turnEngineOn = function () {
        this._engineStatus = true;
    };
    Engine.prototype.turnEngineOff = function () {
        this._engineStatus = false;
    };
    Engine.prototype.drive = function () {
        if (this.engineStatus === false || this._fuel <= 0) {
            //what I am doing here is a good principle called "failing early"
            // If you have some conditions you need to check, that will exclude most of the code in your function check that first
            // This prevents your "happy path" of code to be deeply indented.
            return;
        }
        this._fuel -= 1;
        this._miles += this.FUEL_MILEAGE;
    };
    return Engine;
}(Car));
// When you see <cast>variable this is a "cast" of a variable, explicitly telling the code what the type of this variable will be.
// This is sometimes needed when a default JS function does not return a precise enough Type.
// I need to cast this to HtmlElement because the default Element return type is not specific to the HTML context (because some versions of JS can also be used in the backend, see node.js)
// This makes it not having some properties like .innerText. Test it out yourself by removing the <HTMLElement>
var musicToggleElement = document.querySelector('#music-toggle');
var musicSliderElement = document.querySelector('#music-slider');
var engineToggleElement = document.querySelector('#engine-toggle');
var addFuelForm = document.querySelector('#add-fuel-form');
var addFuelInput = document.querySelector('#add-fuel-input');
var fuelLevelElement = document.querySelector('#fuel-level');
var milesElement = document.querySelector('#miles-value');
var audioElement = document.querySelector('#car-music');
var car = new Car(100);
var musicPlayer = new MusicPlayer();
musicToggleElement.addEventListener('click', function () {
    if (musicPlayer.Level === 0) {
        musicPlayer.turnMusicOn();
        musicSliderElement.value = musicPlayer.Level.toString();
        musicToggleElement.innerText = 'Turn music off';
        return;
    }
    musicToggleElement.innerText = 'Turn music on';
    musicPlayer.turnMusicOff();
});
//I use input instead of change, because then the value changes when I move the mouse, not only on release
musicSliderElement.addEventListener('input', function (event) {
    var target = (event.target);
    musicPlayer.Level = target.value;
    audioElement.volume = musicPlayer.Level / 100;
    //@todo when you are repeating the same text over and over again maybe we should have made some constants for it? Can you do improve on this?
    musicToggleElement.innerText = musicPlayer.Level ? 'Turn music off' : 'Turn music on';
});
engineToggleElement.addEventListener('click', function () {
    if (car.engine.engineStatus) {
        car.engine.turnEngineOff();
        engineToggleElement.innerText = 'Turn engine on';
        return;
    }
    engineToggleElement.innerText = 'Turn engine off';
    car.engine.turnEngineOn();
});
addFuelForm.addEventListener('submit', function (event) {
    event.preventDefault();
    car.engine.addFuel(Number(addFuelInput.value));
    fuelLevelElement.innerText = car.engine.fuel.toString();
});
setInterval(function () {
    car.engine.drive();
    //while it looks like both lines below are the same there is a subtle difference (you could put breakpoints here to see the difference):
    // this <cast> will only tell TypeScript that the value is a string, but the actual variable in JS is not changed in any way: it is in reality still a number
    milesElement.innerText = (car.miles);
    // This .toString() will actually convert the value in JavaScript from an integer to a string
    fuelLevelElement.innerText = car.engine.fuel.toString();
    if (musicPlayer.Level === 0) {
        audioElement.pause();
    }
    else {
        audioElement.play();
    }
}, 1000);
