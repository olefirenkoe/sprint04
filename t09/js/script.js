let url = `https://api.openweathermap.org/data/2.5/onecall?lat=50.271678&lon=30.312568&exclude=minutely,hourly,alerts&appid=071ed5322426afcef56d7141546f120d`;
let container = document.getElementById('container');

fetch(url)
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        for (let i = 0; i < data.daily.length - 1; i++) {

            let dayDiv = document.createElement('div');
            let date = dataFormated(new Date(data.daily[i].dt * 1000));

            dayDiv.setAttribute('class', 'day');
            dayDiv.innerHTML += `<h1>${date}</h1>
                                    <hr>
                                    <img src="https://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png">
                                    <p class="degree">min: ${Math.round(data.daily[i].temp.min-273)}&deg;</p>
                                    <p class="degree">max: ${Math.round(data.daily[i].temp.max-273)}&deg;</p>`;
            container.append(dayDiv);
        }
    });

function dataFormated(data) {
    let day = data.getDate(),
        month = data.getMonth() + 1;

    if (month < 9) {
        month = `0${month}`;
    }
    return (`${day}.${month}`);
}