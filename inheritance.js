//class inheritance
let Person = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `${this.name}: ${this.age}`;
    }
};

let andres = new Person('Andres', 30);
console.log(andres.getDetails());//Andres: 30


let Pet = class extends Person {//extends Pet prototype links to Person prototype
    constructor(name, type) {
        super(name);
        this.type = type;
    };
    petInfo() {
        return `${this.name}: ${this.type}`;
    };
}

let dog = new Pet('Clifford', 'Dog');
console.log(dog.petInfo());// Clifford: Dog


//prototypal inheritance
let Person2 = function(name, age) {
    this.name = name;
    this.age = age;
}

Person2.prototype.getDetails = function() {
    return `${this.name}: ${this.age}`;
}
let andres2 = new Person2("Andres", 30);
console.log(andres2.getDetails());// Andres: 30

let Pet2 = function(name,type) {
    Person2.call(this, name, age);
    this.type = type;
}

Object.setPrototypeOf(Pet2, Person2.prototype);//extends Pet2 prototype links to Person prototype
Pet2.prototype.petInfo = function () {
    return `${this.name}: ${this.type}`;
};
let dog2 = new Pet('Clifford', 'Dog');
console.log(dog2.petInfo());// Clifford: Dog