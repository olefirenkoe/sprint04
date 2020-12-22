'use strict';

let activity = document.getElementById('activity');
let picture = document.getElementById('picture');
let information = document.getElementById('information');
let i;
let timerId;
let sleepButton = document.getElementById("sleep");
let eatButtom = document.getElementById("eat");
let turnSuperhero = document.getElementById('turnInto');

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
            }, 2000);
        }, seconds * 1000);
    }
    feed() {
        if (this.calories > 500) {
            activity.innerHTML = "I'm not hungry :)";
        } else {
            this.calories += 200;
            disabledButton(true);
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
                        disabledButton();
                    }, 2000);
                } else {
                    let timerid = setInterval(function() {
                        blinking(`I'm still hungry :(`);
                    }, 400);
                    setTimeout(() => {
                        clearInterval(timerid);
                        activity.innerHTML = "";
                        disabledButton();
                    }, 2000);
                }

            }, 3000);
        }
        setInterval(function() {
            if (this.calories != 0) {
                this.calories -= 200;
                let caloriesinfo = document.getElementById('calories');
                caloriesinfo.innerHTML -= 200;
                checkerHungry();
            }
        }, 120000);
    }

}

class Superhero extends Human {
    fly() {
        picture.src = "./assets/images/batman_fly.jpg";
        disabledButton(true);
        i = 0;
        let timerId = setInterval(function() {
            blinking(`I'm flying!`);
        }, 300);
        setTimeout(() => {
            clearInterval(timerId);
            picture.src = this.portrait;
            let timerid = setInterval(function() {
                blinking(`I landed.`);
            }, 400);
            setTimeout(() => {
                clearInterval(timerid);
                activity.innerHTML = "";
                disabledButton();
            }, 2000);
        }, 7000);
    }

    fightWithEvil() {
        picture.src = './assets/images/batman_fight.jpg';
        disabledButton(true);
        i = 0;
        let timer1 = setInterval(function() {
            blinking(`Khhhh-chh...`);
        }, 300);
        setTimeout(() => {
            clearInterval(timer1);

            let timer2 = setInterval(function() {
                blinking(`Bang-g-g-g...`);
            }, 300);
            setTimeout(() => {
                clearInterval(timer2);
                picture.src = this.portrait;
                let timer3 = setInterval(function() {
                    blinking(`Evil is defeated!`);
                }, 500);
                setTimeout(() => {
                    clearInterval(timer3);
                    activity.innerHTML = "";

                    disabledButton();
                }, 4000);
            }, 4000);
        }, 2000);
    }
    dog() {
        picture.src = "./assets/images/batman_walking_dog.jpg";
        disabledButton(true);
        i = 0;
        let timerId = setInterval(function() {
            blinking(`We are walking!`);
        }, 300);
        setTimeout(() => {
            clearInterval(timerId);
            picture.src = "./assets/images/batman_dog.jpg"
            let timerid = setInterval(function() {
                blinking(`Dog is happy.`);
            }, 400);
            setTimeout(() => {
                clearInterval(timerid);
                picture.src = this.portrait;
                activity.innerHTML = "";
                disabledButton();
            }, 2000);
        }, 7000);
    }
}

let human = new Human("Christian", "Bale", "male", 38, "./assets/images/human.jpg", "./assets/images/human_sleep.jpg", "./assets/images/human_eat.jpg");
let batman = new Superhero("Batman", "Wayne", "male", 38, "./assets/images/batman.jpg", "./assets/images/batman_sleep.jpg", "./assets/images/batman_eat.jpg");

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

function checkerHungry() {
    setTimeout(function() {
        if (human.calories == 0 && activity.innerHTML == "") {
            activity.innerHTML = `I'm hungry!`;
        }
    }, 5000);
}
checkerHungry();

function turnIntoSuperhero() {
    if (human.calories < 500) {
        disabledButton(true);
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
                disabledButton();
            }, 3000);
        }, 3000);
    } else {
        picture.src = batman.portrait;
        i = 0;
        disabledButton(true);
        let timerId = setInterval(function() {
            blinking(`I'm batman!`);
        }, 300);
        setTimeout(() => {
            clearInterval(timerId);
            activity.innerHTML = "";
            let buttonDiv = document.getElementById("buttons");
            buttonDiv.innerHTML += `<button class="extramethods" onclick="batman.fly()">FLY</button>`;
            buttonDiv.innerHTML += `<button class="extramethods" onclick="batman.fightWithEvil()">FIGHT</button>`;
            buttonDiv.innerHTML += `<button class="extramethods" onclick="batman.dog()">WALK WITH DOG</button>`;
            disabledButton();
        }, 3000);
        turnSuperhero.innerHTML = "RETURN TO HUMAN";
        turnSuperhero.setAttribute('onclick', 'humanRender()');
        information.innerHTML = "";
        information.innerHTML += `<p>First name: <span>${batman.firtstName}</span></p>`;
        information.innerHTML += `<p>Last name: <span>${batman.lastName}</span></p>`;
        information.innerHTML += `<p>Gender: <span>${batman.gender}</span></p>`;
        information.innerHTML += `<p>Age: <span>${batman.age}</span></p>`;
        information.innerHTML += `<p>Calories: <span id="calories">${batman.calories}</span></p>`;
        sleepButton.setAttribute('onclick', 'batman.sleepFor()');
        eatButtom.setAttribute('onclick', 'batman.feed()');
    }
}

function humanRender() {
    picture.src = human.portrait;
    sleepButton = document.getElementById('sleep');
    turnSuperhero = document.getElementById('turnInto');
    eatButtom = document.getElementById('eat');
    sleepButton.setAttribute('onclick', 'human.sleepFor()');
    turnSuperhero.setAttribute('onclick', 'turnIntoSuperhero()');
    eatButtom.setAttribute('onclick', 'human.feed()');
    turnSuperhero.innerHTML = `SUPERHERO`;
    information.innerHTML = "";
    information.innerHTML += `<p>First name: <span>${human.firtstName}</span></p>`;
    information.innerHTML += `<p>Last name: <span>${human.lastName}</span></p>`;
    information.innerHTML += `<p>Gender: <span>${human.gender}</span></p>`;
    information.innerHTML += `<p>Age: <span>${human.age}</span></p>`;
    information.innerHTML += `<p>Calories: <span id="calories">${human.calories}</span></p>`;
    let extramethods = document.querySelectorAll('.extramethods');
    console.log(extramethods);
    if (extramethods) {
        for (let i = 0; i < extramethods.length; i++) {
            extramethods[i].remove();
        }
    }

}

humanRender();

function disabledButton(dis = false) {

    let buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        if (dis == true) {
            buttons[i].disabled = true;
            buttons[i].style.opacity = "0.5";

        } else {
            buttons[i].disabled = false;
            buttons[i].style.opacity = "";
        }

    }
}