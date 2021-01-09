"use strict"
class Bot {
    constructor(first, second, third, fours, fives) {
        this.first = first;
        this.second = second;
        this.third = third;
        this.fours = fours;
        this.fives = fives;
        this.answer = answerGenerator(this);
    }
    answerMake() {
        let newAnswer = this.answer.next().value;

        if (newAnswer === undefined) {
            console.log(this.fives);
            addMessage();
        } else {
            console.log(newAnswer);
            addMessage();
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
    "I will not respond to that.");

// jarvis.answerMake();
// jarvis.answerMake();
// jarvis.answerMake();
// jarvis.answerMake();
// jarvis.answerMake();
// jarvis.answerMake();
// jarvis.answerMake();
// jarvis.answerMake();

let messageBox = document.getElementById("message");
// let redMessage = document.createElement("div");
// redMessage.setAttribute("class", "red");
// let whiteMessage = document.createElement("div");
// whiteMessage.setAttribute("class", "white");
let input = document.getElementById("input");


function addMessage(params) {
    let redMessage = document.createElement("div");
    redMessage.setAttribute("class", "red");
    let whiteMessage = document.createElement("div");
    whiteMessage.setAttribute("class", "white");


    redMessage.innerHTML = input.value;
    messageBox.appendChild(redMessage);
    input.value = " ";

}