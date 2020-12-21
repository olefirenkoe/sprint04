// 'use strict';

let activity = document.getElementById('activity');
let picture = document.getElementById('picture');
let information = document.getElementById('information');
let i;
let timerId;

class Human {
    constructor(firtstName, lastName, gender, age, portrait, sleepPicture, eatPicture) {
        this.firtstName = firtstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.calories = 0;
        this.portrait = portrait;
        this.sleepPicture = sleepPicture;
        this.eatPicture = eatPicture;
    }
    sleepFor() {
        let seconds = Number(prompt("Please, enter how much I can sleep"));
        picture.src = `${this.sleepPicture}`;
        disabledButton(true);
        i = 0;
        let timerId = setInterval(function() {
            blinking(`I'm sleeping ${seconds} SEC.`);
        }, 300);
        setTimeout(() => {
            clearInterval(timerId);
            picture.src = this.portrait;
            let timerid = setInterval(function() {
                blinking(`I'm awake now.`);
            }, 400);
            setTimeout(() => {
                clearInterval(timerid);
                activity.innerHTML = "";
                disabledButton();
            }, 3000);
        }, seconds * 1000);
    }
    feed() {
        if (this.calories > 500) {
            activity.innerHTML = "I'm not hungry :)";
        } else {
            this.calories += 200;
            let caloriesinfo = document.getElementById('calories');
            caloriesinfo.innerHTML = this.calories;
            picture.src = this.eatPicture;
            console.log(this.portrait)
            i = 0;
            let timerId = setInterval(function() {
                blinking(`Nom nom nom`);
            }, 300);
            setTimeout(() => {
                clearInterval(timerId);
                picture.src = this.portrait;
                if (this.calories > 500) {
                    let timerid = setInterval(function() {
                        blinking(`I'm not hungry ^_^`);
                    }, 400);
                    setTimeout(() => {
                        clearInterval(timerid);
                        activity.innerHTML = "";
                    }, 3000);
                } else {
                    let timerid = setInterval(function() {
                        blinking(`I'm still hungry :(`);
                    }, 400);
                    setTimeout(() => {
                        clearInterval(timerid);
                        activity.innerHTML = "";
                    }, 3000);
                }

            }, 10000);
        }
        setInterval(function() {
            if (human.calories != 0) {
                human.calories -= 200;
                let caloriesinfo = document.getElementById('calories');
                caloriesinfo.innerHTML -= 200;
                checkerHungry();
            }
        }, 120000);
    }

}

// blinking in activity block

function blinking(phrase) {
    if (i % 2) {
        activity.innerHTML = phrase;
        i++;
    } else {
        activity.innerHTML = "";
        i++;
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

let human = new Human("Christian", "Bale", "male", 38, "./assets/images/human.jpg", "./assets/images/human_sleep.jpg", "./assets/images/human_eat.jpg");
let batman = new Superhero("Batman", "Wayne", "male", 38, "./assets/images/batman.jpg", "./assets/images/batman_sleep.jpg", "./assets/images/batman_eat.jpg");

let sleepButton = document.getElementById("sleep");
// sleepButton.addEventListener('click', sleepFor);
sleepButton.setAttribute('onclick', 'human.sleepFor()');

let eatButtom = document.getElementById("eat");
// console.log(eatButtom);
// eatButtom.addEventListener('click', human.feed);
eatButtom.setAttribute('onclick', 'human.feed()');
// batman.fly();
// human.sleepFor()

function checkerHungry() {
    setTimeout(function() {
        if (human.calories == 0 && activity.innerHTML == "") {
            activity.innerHTML = `I'm hungry!`;
        }
    }, 5000);
}
checkerHungry();

let turnSuperhero = document.getElementById('turnInto');
turnSuperhero.addEventListener('click', turnIntoSuperhero);

function turnIntoSuperhero() {
    if (human.calories < 500) {
        i = 0;
        let timerId = setInterval(function() {
            blinking(`not enough calories`);
        }, 300);
        setTimeout(() => {
            clearInterval(timerId);
            let timerid = setInterval(function() {
                blinking(`feed me please`);
            }, 400);
            setTimeout(() => {
                clearInterval(timerid);
                activity.innerHTML = "";
            }, 3000);
        }, 3000);
    } else {
        turnSuperhero.innerHTML = "RETURN TO HUMAN";
        picture.src = batman.portrait;

    }
}

function humanRender() {
    picture.src = human.portrait;
    information.innerHTML += `<p>First name: <span>${human.firtstName}</span></p>`;
    information.innerHTML += `<p>Last name: <span>${human.lastName}</span></p>`;
    information.innerHTML += `<p>Gender: <span>${human.gender}</span></p>`;
    information.innerHTML += `<p>Age: <span>${human.age}</span></p>`;
    information.innerHTML += `<p>Calories: <span id="calories">${human.calories}</span></p>`;
}

humanRender();


function disabledButton(dis = false) {

    let buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        if (dis == true) {
            buttons[i].disabled = true;
        } else {
            buttons[i].disabled = false;
        }

    }
}