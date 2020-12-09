 function Creature(name, age, species, _portrait) {
     this.name = name;
     this.age = age;
     this.species = species;
     this._portrait = _portrait;

 }
 Creature.prototype.say_hello = function() {
     console.log(`Hello, my name is ${this.name}`);
 };

 function Human(name, age, species, _portrait, job) {
     Creature.call(this, name, age, species, _portrait);
     this.job = job;
 }
 Human.prototype = Object.create(Creature.prototype);
 Object.defineProperty(Human.prototype, 'constructor', {
     value: Human,
     enumerable: false,
     writable: true
 });

 function Vampire(name, age, species, _portrait, job, title) {
     Human.call(this, name, age, species, _portrait, job);
     this.title = title;
 }
 Vampire.prototype = Object.create(Creature.prototype);
 Object.defineProperty(Vampire.prototype, 'constructor', {
     value: Vampire,
     enumerable: false,
     writable: true
 });

 function Dog(name, age, species, _portrait, color) {
     Creature.call(this, name, age, species, _portrait);
     this.color = color;
 }
 Dog.prototype = Object.create(Creature.prototype);
 Object.defineProperty(Dog.prototype, 'constructor', {
     value: Dog,
     enumerable: false,
     writable: true
 });

 let human = new Human("Sasha", 21, "human", "./assets/images/human.png", "developer");
 let vampire = new Vampire("Evgen", 20, "vampire", "./assets/images/vampire.png", "Vampaper", "Blade");
 let dog = new Dog("Keks", 0, "animal", "./assets/images/dog.png", "brown");

 const magician = {
     _hat: './assets/images/hat.png',
     _getPortrait() {
         if (this._portrait) return this._portrait;
         else return './assets/images/magician.png';
     },
     'do_magic' () {
         console.log(`ABRACADABRA
         The prototype of ${this.name} is `);
         console.log(Object.getPrototypeOf(this));
     }
 };

 let properties = document.getElementById('properties');
 let do_magic = document.createElement('button');
 let say_helloBtn = document.createElement('button');
 let headImage = document.getElementById("head");
 let forProperties = document.createElement("div");

 do_magic.innerHTML = "Do Magic";
 do_magic.setAttribute("onclick", "magician.do_magic()");
 properties.appendChild(do_magic);
 say_helloBtn.innerHTML = "Say hello";

 function changeStatus() {
     let buttonAct = document.getElementsByClassName('active');
     buttonAct[0].setAttribute("class", "protoBtn");
     target = event.target;
     target.setAttribute("class", "protoBtn active");
     if (target.innerHTML == "no prototype") {
         changeHead(Object.prototype);
     }
     if (target.innerHTML == "human prototype") {
         changeHead(human);
     }
     if (target.innerHTML == "vampire prototype") {
         changeHead(vampire);
     }
     if (target.innerHTML == "dog prototype") {
         changeHead(dog);
     }
 }

 function changeHead(obj) {
     Object.setPrototypeOf(magician, obj);
     headImage.src = magician._getPortrait();
     if (obj == Object.prototype) {
         forProperties.remove();
         say_helloBtn.remove();
     } else {
         say_helloBtn.setAttribute("onclick", `magician.say_hello()`);
         properties.appendChild(say_helloBtn);
     }
     if (obj == human) {
         properties.appendChild(forProperties);
         forProperties.innerHTML = `<p>name: <span class="propValue">${magician.name}</span></p>
                 <p>age: <span class="propValue">${magician.age}</span></p>
                 <p>species: <span class="propValue">${magician.species}</span></p>
                 <p>job: <span class="propValue">${magician.job}</span></p>`;
     }
     if (obj == vampire) {
         properties.appendChild(forProperties);
         forProperties.innerHTML = `<p>name: <span class="propValue">${magician.name}</span></p>
                <p>age: <span class="propValue">${magician.age}</span></p>
                <p>species: <span class="propValue">${magician.species}</span></p>
                <p>job: <span class="propValue">${magician.job}</span></p>
                <p>title: <span class="propValue">${vampire.title}</span></p>`;
     }
     if (obj == dog) {
         properties.appendChild(forProperties);
         forProperties.innerHTML = `<p>name: <span class="propValue">${magician.name}</span></p>
               <p>age: <span class="propValue">${magician.age}</span></p>
               <p>species: <span class="propValue">${magician.species}</span></p>
               <p>color: <span class="propValue">${dog.color}</span></p>`;
     }
 }