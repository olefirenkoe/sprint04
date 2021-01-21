'use strict'
let resultDiv = document.getElementById('btnsResult');
let searchBtn = document.getElementById('searchBtn');
let searchInpt = document.getElementById('searchInpt');
let randomBtn = document.getElementById('random');
let compareDiv = document.getElementById('compare');
let compareCount = document.getElementById('number');
let compareBtn = document.getElementById('compareBtn');
let counter = 0;

searchBtn.addEventListener('click', () => {
    fetch(`https://superheroapi.com/api.php/806800199900005/search/${searchInpt.value}`)
        .then(response => response.json()).then(data => {
            resultDiv.innerHTML = '';
            for (let i = 0; i < data.results.length; i++) {
                let button = document.createElement('button');
                button.innerHTML = `<b>${data.results[i].name}</b></br>${data.results[i].biography['full-name']}`;
                resultDiv.appendChild(button);
            }
            searchInpt.value = '';
        }).catch(() => alert("Empty input or character with given name not found, please, try again."));

});

randomBtn.addEventListener('click', () => {
    fetch(`https://superheroapi.com/api.php/806800199900005/${randomId(1,731)}`)
        .then(response => response.json()).then(data => {
            // console.log(data.powerstats)
            resultDiv.innerHTML = '';
            let button = document.createElement('button');
            button.innerHTML = `<b>${data.name}</b></br>${data.biography['full-name']}`;
            resultDiv.appendChild(button);
            button.addEventListener('click', () => addCompare(data, button));
            searchInpt.value = '';
        }).catch((arr) => console.log(arr));
});

function randomId(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

//test

google.charts.load('current', { 'packages': ['corechart'] });
// google.charts.setOnClick(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Hero', 'Intelligence', 'Strength', 'Speed', 'Durability', 'Power', 'Combat'],
        ['Batman', 11, 12, 23, 10, 8, 4],
        ['Superman', 11, 12, 23, 10, 8, 4],
        // ['Ironman', 7, 12, 8]
    ]);
    var options = {
        height: 400,
        backgroundColor: 'none',
        color: '#33C35A ',
        colors: ['#3e56a2', '#e6693e', '#d89a1c', '#156812', '#68123D', '#A33232']
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('compare'));
    chart.draw(data, options);
}



function addCompare(info, target) {
    // console.log(info.name);

    // console.log(target);
    target.disabled = true;
    counter += 1;
    compareCount.innerText = counter;
}

let massivCompare = [
    ['Hero'],
];

massivCompare[0][1] = "name";

massivCompare.push(["madda"])
console.log(massivCompare)

compareBtn.addEventListener('click', drawChart);