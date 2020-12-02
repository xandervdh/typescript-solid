class Zoo {
    private _animals : Array<Object> = new Array<Object>();

    public addAnimal(animal: object) {
        this._animals.push(animal);
    }

    get animals(): Array<Object> {
        return this._animals;
    }

    sound(sound: string, type) {
        document.querySelector('#target').innerHTML +=(`${type} : ${sound}. <br>`);
    }

}

class Dog extends Zoo {
    private _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'dog';
    }

    sound(sound, type) {
        super.sound(sound, type);
    }
}

class Cat extends Zoo {
    private _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'cat';
    }

    sound(sound, type) {
        super.sound(sound, type);
    }
}

class Parrot extends Zoo {
    private _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'parrot';
    }

    sound(sound, type) {
        super.sound(sound, type);
    }
}

class Canary extends Zoo{
    private _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'canary';
    }

    sound(sound, type) {
        super.sound(sound, type);
    }
}

let pieterke = new Canary;
let blackie = new Dog;
let billie = new Cat;
let jef = new Parrot;
pieterke.sound('Tweet', pieterke.type);
blackie.sound('Woef', blackie.type);
billie.sound('Miauw', billie.type);
jef.sound("I'm a pirate", jef.type);
