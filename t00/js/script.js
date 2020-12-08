 function Creature(name, age, species) {
     this.name = name;
     this.age = age;
     this.species = species;

 }
 Creature.prototype.say_hello = function() {
     console.log(`Hello, my name is ${this.name}`);
 };


 function Human(name, age, species, job) {
     Creature.call(this, name, age, species);
     this.job = job;
 }
 Human.prototype = Object.create(Creature.prototype);

 Object.defineProperty(Human.prototype, 'constructor', {
     value: Human,
     enumerable: false,
     writable: true
 });


 function Vampire(name, age, species, job, title) {
     Human.call(this, name, age, species, job);
     this.title = title;
 }
 Vampire.prototype = Object.create(Creature.prototype);

 Object.defineProperty(Vampire.prototype, 'constructor', {
     value: Vampire,
     enumerable: false,
     writable: true
 });

 function Dog(name, age, species, color) {
     Creature.call(this, name, age, species);
     this.color = color;
 }
 Dog.prototype = Object.create(Creature.prototype);

 Object.defineProperty(Dog.prototype, 'constructor', {
     value: Dog,
     enumerable: false,
     writable: true
 });


 let human = new Human("Evgen", 20, "human", "developer");
 let vampire = new Vampire("Sasha", 21, "vampire", "Vampaper", "Blade");
 let dog = new Dog("Keks", 0, "animal", "brown");


 human.say_hello();
 vampire.say_hello();
 dog.say_hello();