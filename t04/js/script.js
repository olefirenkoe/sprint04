"use strict";

class Creature {
    constructor(name, age, species, _portrait) {
        this.name = name;
        this.age = age;
        this.species = species;
        this._portrait = _portrait;
    }
    say_hello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Human extends Creature {
    constructor(name, age, species, _portrait, job) {
        super(name, age, species, _portrait);
        this.job = job;
    }
}

class Vampire extends Human {
    constructor(name, age, species, _portrait, job, title) {
        super(name, age, species, _portrait, job);
        this.title = title;
    }
}

class Dog extends Creature {
    constructor(name, age, species, _portrait, color) {
        super(name, age, species, _portrait);
        this.color = color;
    }
}

class Werewolf extends Human {
    constructor(name, age, species, _portrait, job, _isWolf) {
        super(name, age, species, _portrait, job);
        this._isWolf = false;
    }
    transform() {
        if (this._isWolf == false) {
            werewolf._isWolf = true;
            werewolf.species = "werewolf";
            Object.assign(Werewolf.prototype, addHowl);
            properties.appendChild(howlButton);
            changeHead(werewolf);
            headImage.src = "assets/images/werewolf.png";

        } else {
            werewolf._isWolf = false;
            werewolf.species = human.species;
            changeHead(werewolf);
            delete Werewolf.prototype.howl;
            howlButton.remove();
        }
    }
}

let addHowl = {
    howl() {
        console.log("ARH-WOOOOOOOOOOOOOOOOOOOO");
    }
}

let human = new Human("Sasha", 21, "human", "./assets/images/human.png", "developer");
let vampire = new Vampire("Evgen", 20, "vampire", "./assets/images/vampire.png", "Vampaper", "Blade");
let dog = new Dog("Keks", 0, "animal", "./assets/images/dog.png", "brown");
let werewolf = new Werewolf("Sasha", 21, "human", "./assets/images/human.png", "developer");

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
let transformButton = document.createElement("button");
let howlButton = document.createElement("button");


do_magic.innerHTML = "Do Magic";
do_magic.setAttribute("onclick", "magician.do_magic()");
properties.appendChild(do_magic);
say_helloBtn.innerHTML = "Say hello";
transformButton.setAttribute("onclick", "magician.transform()");
transformButton.innerHTML = "transform";
howlButton.setAttribute("onclick", "magician.howl()");
howlButton.innerHTML = "howl";


function changeStatus() {
    let buttonAct = document.getElementsByClassName('active');
    buttonAct[0].setAttribute("class", "protoBtn");
    let target = event.target;
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
    if (target.innerHTML == "werewolf prototype") {
        if (magician.species == "werewolf") {
            return;
        } else {
            changeHead(werewolf);
        }
    }
}

function changeHead(obj) {
    Object.setPrototypeOf(magician, obj);
    headImage.src = magician._getPortrait();
    if (obj == Object.prototype) {
        forProperties.remove();
        say_helloBtn.remove();
        transformButton.remove();
    } else {
        transformButton.remove();
        say_helloBtn.setAttribute("onclick", `magician.say_hello()`);
        properties.appendChild(say_helloBtn);
        if (obj == werewolf) {
            properties.appendChild(transformButton);
        }
        properties.appendChild(forProperties);
        forProperties.innerHTML = `<p>name: <span class="propValue">${magician.name}</span></p>
                 <p>age: <span class="propValue">${magician.age}</span></p>
                 <p>species: <span class="propValue">${magician.species}</span></p>`;
        if (obj == werewolf) {
            forProperties.innerHTML += `<p>job: <span class="propValue">${magician.job}</span></p>`;
        }
    }
    if (obj == human) {
        forProperties.innerHTML += `<p>job: <span class="propValue">${magician.job}</span></p>`;
    }
    if (obj == vampire) {
        forProperties.innerHTML +=
            ` <p>job: <span class="propValue">${magician.job}</span></p>
          <p>title: <span class="propValue">${magician.title}</span></p>`;
    }
    if (obj == dog) {
        forProperties.innerHTML += `<p>color: <span class="propValue">${magician.color}</span></p>`;
    }

}