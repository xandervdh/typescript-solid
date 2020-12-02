class Animal {
    private _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'Animal';
    }
}

class Dog extends Animal {

    get type() {
        return 'Dog';
    }

    public makeSound() {
        return 'Woef';
    }
}

class Cat extends Animal {

    get type() {
        return 'Cat';
    }

    public makeSound() {
        return 'Miauw';
    }
}

class Parrot extends Animal {

    get type() {
        return 'Parrot';
    }

    public makeSound() {
        return "I'm a parrot";
    }
}

class Canary extends Animal {

    get type() {
        return 'Canary';
    }

    public makeSound() {
        return "Tweet";
    }
}

class Hippo extends Animal {

    get type() {
        return 'Hippo';
    }

    public makeSound() {
        return "Aaaaaaahhhhh";
    }
}

class Zoo {
    private _animals : Array<Object> = new Array<Object>();

    public addAnimal(animal: object) {
        this._animals.push(animal);
    }

    get animals(): Array<Object> {
        return this._animals;
    }
}
let zoo = new Zoo;
zoo.addAnimal(new Cat);
zoo.addAnimal(new Dog);
zoo.addAnimal(new Parrot);
zoo.addAnimal(new Canary);
zoo.addAnimal(new Hippo);

zoo.animals.forEach((animal) => {
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.makeSound() + ".<br>");
});