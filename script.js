console.log('loading 1');
var car;

setTimeout(() => {
  car = 'focus';
}, 5000);

// Animal constructor that allows me to create animal instances
// which inherit their methods from Object.prototype
function Animal(name) {
  this.name = name;
}
Animal.prototype.greet = function () {
  console.log(`Hi, I am ${this.name}`);
};

class Animal2 {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hi, I am ${this.name}`);
  }
}
const someAnimal = new Animal2('Gabe');

// Mammal constructor that allows me to create mammal instances
// which inherit their methods from Animal.prototype
function Mammal(name) {
  Animal.call(this, name);
}
Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.suckle = function () {
  console.log('Yummy!');
};

class Mammal2 extends Animal2 {
  constructor(name) {
    super(name);
    this.suckles = true;
  }

  suckle() {
    console.log('Yummy!');
  }
}

// Rodent constructor that allows me to create rodent instances
// which inherit their methods from Mammal.prototype
function Rodent(name) {
  Mammal.call(this, name);
}
Rodent.prototype = Object.create(Mammal.prototype);
Rodent.prototype.eatCheese = function () {
  console.log('eating cheese!');
};


// A- SEUDO-CLASSIC INHERITANCE
//    1- Create a Vehicle constructor that "subclasses" Object.
//    2- Create a Car constructor that "subclasses" Vehicle.
//    3- Create a Tesla constructor that "subclasses" Car.
//    4- Create a Truck constructor that "subclasses" Vehicle.
//    5- Inspect the __proto__ prop on your vehicle instances. See the chain?

// B- PROTOTYPAL INHERITANCE
//    6- Add a method shared by all Vehicles.
//    7- Add a method shared by all Cars.
//    8- Add a method shared by all Trucks.
//    9- Inspect the __proto__ prop on your instances. See the methods?

// C- CLASS SYNTACTIC SUGAR
//    10- Refactor to use the new `class` and `extends` keywords
