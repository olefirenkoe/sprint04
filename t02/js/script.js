'use strict';


let activity = document.getElementById('activity');
let picture = document.getElementById('picture');

class Human {
    constructor(firtstName, lastName, gender, age) {
        this.firtstName = firtstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.calories = 0;
    };
    sleepFor() {
        let seconds = Number(prompt("Please, enter how much I can sleep"));
        picture.src = "./assets/images/human_sleep.jpg";
        let i = 0;
        let timerId = setInterval(function() {
            if (i % 2) {
                activity.innerHTML = `I'm sleeping ${seconds} SEC.`;
                i++;
            } else {
                activity.innerHTML = "";
                i++;
            }
        }, 200);
        setTimeout(() => {
            clearInterval(timerId);
            picture.src = "./assets/images/human.jpg";
            activity.innerHTML = "";
        }, seconds * 1000);
    };
    feed() {
        this.calories += 200;
        // if (this.calories > 500) {
        //     activity.innerHTML = "I'm not hungry";
        // } else {
        //     activity.innerHTML = "I'm not hungry";
        // }
        picture.src = "./assets/images/human_eat.jpg";
        let i = 0;
        let timerId = setInterval(function() {
            if (i % 2) {
                activity.innerHTML = `Nom nom nom`;
                i++;
            } else {
                activity.innerHTML = "";
                i++;
            }
        }, 200);
        setTimeout(() => {
            clearInterval(timerId);
            picture.src = "./assets/images/human.jpg";
            activity.innerHTML = "";
        }, 10000);

    }
}

class Superhero extends Human {
    fly() {
        alert(this.firtstName);
    }
    fightWithEvil() {
        alert(this.lastName)
    }
}

let human = new Human("Christian", "Bale", "male", 38);
let batman = new Superhero("Batman", "Wayne", "male", 38);

let sleepButton = document.getElementById("sleep");
sleepButton.addEventListener('click', human.sleepFor);

let eatButtom = document.getElementById("eat");
eatButtom.addEventListener('click', human.feed);