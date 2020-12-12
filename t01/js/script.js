class Movie {
    constructor(title, poster, date, info, actors) {
        this.title = title;
        this.poster = poster;
        this.date = date;
        this.info = info;
        this.actors = actors;
    }
    addToFavorite() {
        alert("add to favorite");
    }
    removeFromFavorite() {
        alert("remove to favorite");
    }
}

let johnWick = new Movie("John Wick",
    "assets/images/JohnWick.jpg", "May 9, 2019",
    `The story focuses on John Wick (Reeves) searching 
    for the men who broke into his home, stole his
    vintage car and killed his puppy, which was a
    last gift to him from his recently deceased wife
    (Moynahan). Stahelski and David Leitch directed 
    the film together,though only 
    Stahelski was credited.`, ["Keanu Reeves", "Michael Nyqvist", "Alfie Allen", "Adrianne Palicki"]);

let avengers = new Movie("Avengers: Endgame",
    "assets/images/avengers.jpg", "April 25, 2019",
    `Twenty-three days after Thanos used the Infinity 
    Gauntlet to kill half of all life in the universe,
    Carol Danvers rescues Tony Stark and Nebula from deep 
    space and they reunite with the remaining Avengers—Bruce 
    Banner, Steve Rogers, Thor, Natasha Romanoff, and James 
    Rhodes—and Rocket on Earth. Locating Thanos on an uninhabited
    planet, they plan to use the Infinity Stones to reverse "the Snap",
    but Thanos destroyed the Stones to prevent further use. Enraged,
    Thor decapitates Thanos.`, ["Robert Downey Jr", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth"]);

let inception = new Movie("Inception",
    "assets/images/inception.jpg", "July 8, 2010",
    `Dominick "Dom" Cobb and Arthur are "extractors": 
    they perform corporate espionage using experimental
    military technology to infiltrate their targets' 
    subconscious and extract information through a 
    shared dream world. Their latest target, Saito, 
    reveals he arranged their mission to test Cobb for a seemingly 
    impossible job: implanting an idea in a person's subconscious, 
    or "inception". Saito wants Cobb to convince Robert, the son of
    Saito's competitor Maurice Fischer, 
    to dissolve his father's company.`, ["Leonardo DiCaprio", "Joseph Gordon", "Elliot Page", "Tom Hardy"]);

let spiderMan = new Movie("Spider-Man",
    "assets/images/spider-man.jpg", "November 20, 2010",
    `After Osborn's fall and the Registration Act's 
    abolition following the Siege of Asgard, MJ invited 
    Peter over so the two of them could gain closure over 
    the marriage that did not happen and the breakup. 
    Later, a massive war ensued between Doctor Octopus 
    and Spider-Man to get Lily Hollister's and Norman 
    Osborn's son, in which Spider-Man found that the 
    child was actually Harry's, who later leaves town 
    to raise him. Peter then finally starts a relationship 
    with police officer Carlie Cooper. Spider-Man's heroic 
    career rose up again, he joined the reassembled Avengers 
    and also stayed with the New Avengers, who were outlaws 
    no more.`, ["Tom Holland", "Samuel L. Jackson", "Jake Gyllenhaal", "Marisa Tomei"]);

let joker = new Movie("Joker",
    "assets/images/joker.jpg", "October 4, 2019",
    `In 1981, party clown and aspiring stand-up comedian
     Arthur Fleck lives with his mother, Penny, in Gotham
    City. Gotham is rife with crime and unemployment,
    leaving swaths of the population disenfranchised 
    and impoverished. Arthur suffers from a medical 
    disorder that causes him to laugh at inappropriate 
    times, depending on social services for medication. 
    After a gang of delinquents attacks Arthur in an alley, 
    his co-worker Randall gives him a gun for protection. Arthur 
    pursues a relationship with his neighbor, single mother Sophie
    Dumond, and invites her to his upcoming stand-up routine at a 
    nightclub.`, ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz", "Frances Conroy"]);

let darkKnight = new Movie("The Dark Knight",
    "assets/images/dark-knight.jpg", "July 14, 2008",
    `A gang of criminals robs a Gotham City mob bank, 
    murdering each other for a higher share until only the 
    Joker remains; he escapes with the money. Batman, District 
    Attorney Harvey Dent and Lieutenant Jim Gordon form an alliance 
    to rid Gotham of organized crime. Bruce Wayne is impressed with 
    Dent's idealism and offers to support his career; he believes that, 
    with Dent as Gotham's protector, he can give up being Batman and lead 
    a normal life with Rachel Dawes—even though she and Dent 
    are dating.`, ["Christian Bale", "Michael Caine", "Heath Ledger", "Gary Oldman"]);

let all = new Set([johnWick, avengers, inception, spiderMan, joker, darkKnight]);

// all.add(johnWick);
// all.add(avengers);
// all.add(inception);
// all.add(spiderMan);
// all.add(joker);
// all.delete(darkKnight);

// for (let movie of all) {
//     console.log(movie.date);
// }

console.log(all.size);

let list = document.querySelector('.list');

let i = 0;
for (let movie of all) {
    list.innerHTML += `<p data-id=${i} class="title">${movie.title}</p>`;
    i++;
}

let firstTitle = document.getElementsByClassName("title");
firstTitle[0].setAttribute("id", "activeTitle");

let activeTitle = document.getElementById("activeTitle");


// console.log(activeTitle.innerHTML);

// let iterator = all.keys();

// let activeMovie = iterator.next().value;
// console.log(activeMovie.title);

// for (johnWick of all) {
//     console.log(johnWick.title);
// }
console.log(Array.from(all)[1].title);

function description(a) {
    let movieFromSet = Array.from(all)[a];
    let poster = document.getElementById("poster");
    let description = document.getElementById("description");
    // let actorsList = document.createElement("ul");

    poster.src = movieFromSet.poster;
    description.innerHTML += `<h2>${movieFromSet.title}</h2>`;
    description.innerHTML += `<p>${movieFromSet.date}</p>`;


    for (let i = 0; i < movieFromSet.actors.length; i++) {
        description.innerHTML += `<li class="actorsList">${movieFromSet.actors[i]}</li>`;
    }

    description.innerHTML += `<div class="info">${movieFromSet.info}</ class="info">`

}
description(4);