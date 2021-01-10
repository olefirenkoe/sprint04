"use strict"
class Bot {
    constructor(first, second, third, fours, fives, sixs) {
        this.first = first;
        this.second = second;
        this.third = third;
        this.fours = fours;
        this.fives = fives;
        this.sixs = sixs;
        this.answer = answerGenerator(this);
    }
    answerMake() {
        let inGreet = input.value;

        if (inGreet.match(forEmpty) === null) {
            return;
        } else {
            if (inGreet.match(greeting0) === null && inGreet.match(greeting1) === null && inGreet.match(greeting2) === null && inGreet.match(greeting3) === null && inGreet.match(greeting4) === null) {
                addMessage(this.sixs);
            } else {
                let newAnswer = this.answer.next().value;

                if (newAnswer === undefined) {
                    addMessage(this.fives);
                } else {
                    addMessage(newAnswer);
                }
            }
        }
    }
}

function* answerGenerator(name) {
    yield name.first;
    yield name.second;
    yield name.third;
    yield name.fours;
    yield name.fives;
}

let jarvis = new Bot("Hello, I am J.A.R.V.I.S.",
    "I believe I've already said it, but, sure, hello again!",
    "You are malfunctioning.",
    "I believe your intentions to be hostile.",
    "I will not respond to that.",
    "I don't understand.");

let greeting0 = /^hello$/;
let greeting1 = /^hi$/;
let greeting2 = /^howdy$/;
let greeting3 = /^hey$/;
let greeting4 = /^yo$/;
let forEmpty = /[a-zA-Z0-9]/g;

let messageBox = document.getElementById("message");
let input = document.getElementById("input");

input.addEventListener("keyup", enter);

function enter(e) {
    if (e.keyCode == 13) {
        jarvis.answerMake();
    }
}

function addMessage(phrase) {
    let redMessage = document.createElement("div");
    let whiteMessage = document.createElement("div");

    redMessage.setAttribute("class", "red");
    whiteMessage.setAttribute("class", "white");
    redMessage.innerHTML = input.value;
    messageBox.appendChild(redMessage);

    input.value = "";
    whiteMessage.innerHTML = phrase;
    setTimeout(() => messageBox.appendChild(whiteMessage), 800);
}