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
                button.addEventListener('click', () => addCompare(data.results[i], button));
            }
            searchInpt.value = '';
        }).catch(() => alert("Empty input or character with given name not found, please, try again."));

});

randomBtn.addEventListener('click', () => {
    fetch(`https://superheroapi.com/api.php/806800199900005/${randomId(1,731)}`)
        .then(response => response.json()).then(data => {
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

//compare 

let optionsDiv = document.createElement('div');
let optionsStats = ['Intelligence', 'Strength', 'Speed', 'Durability', 'Power', 'Combat'];

optionsDiv.setAttribute('class', 'optionsDiv');
optionsDiv.innerHTML = '<p>Select stats to compare</p>';

google.charts.load('current', { 'packages': ['corechart'] });

let compareArray = [
    ['Hero', 'Intelligence', 'Strength', 'Speed', 'Durability', 'Power', 'Combat']
];

function drawChart() {
    if (counter < 2) {
        alert("Not enough superheroes");
    } else {
        optionsDiv.innerHTML = '';
        let view;
        let data = google.visualization.arrayToDataTable(compareArray);
        let options = {
            width: 1000,
            height: 400,
            backgroundColor: 'none',
            annotations: {
                boxStyle: {
                    stroke: '#876c3c',
                    strokeWidth: 10,
                }
            },
            colors: ['#3e56a2', '#e6693e', '#d89a1c', '#156812', '#68123D', '#A33232'],
            legend: { position: 'top', maxLines: 1, textStyle: { color: '#fff' } },
            vAxis: {
                baselineColor: 'black',
                titleTextStyle: {
                    color: '#fff'
                }
            },
            hAxis: {
                textStyle: { color: '#FFF' },
                titleTextStyle: {
                    color: '#fff'
                }
            }
        };

        let chart = new google.visualization.ColumnChart(document.getElementById('compare'));

        chart.draw(data, options);

        for (let i = 0; i < optionsStats.length; i++) {
            let optionsBtn = document.createElement('button');
            optionsBtn.innerText = optionsStats[i];
            optionsBtn.setAttribute('class', 'ActOptions');
            optionsBtn.setAttribute('data-num', `${i+1}`);
            optionsBtn.addEventListener('click', hideStats);
            optionsDiv.appendChild(optionsBtn);
        }
        let arrOptions = [];

        function hideStats() {
            if (this.classList.contains('ActOptions')) {
                this.setAttribute('class', 'nonActive');
                view = new google.visualization.DataView(data);
                arrOptions.push(Number(this.dataset.num));
                arrOptions = [...new Set(arrOptions)];
                view.hideColumns(arrOptions);
                chart.draw(view, options);
            } else {
                this.setAttribute('class', 'ActOptions');
                if (arrOptions.indexOf(Number(this.dataset.num)) >= 0) {
                    arrOptions.splice(arrOptions.indexOf(Number(this.dataset.num)), 1);
                }
                chart.draw(data, options);
                view = new google.visualization.DataView(data);
                view.hideColumns(arrOptions);
                chart.draw(view, options);
            }
        }
        compareDiv.appendChild(optionsDiv);
    }
}

compareBtn.addEventListener('click', drawChart);

function addCompare(info, target) {
    if (counter >= 20) {
        alert("Too many heroes to compare")
    } else {
        compareArray.push([info.name, Number(info.powerstats.intelligence), Number(info.powerstats.strength), Number(info.powerstats.speed), Number(info.powerstats.durability), Number(info.powerstats.power), Number(info.powerstats.combat)]);
        target.disabled = true;
        counter += 1;
        compareCount.innerText = counter;
    }
}