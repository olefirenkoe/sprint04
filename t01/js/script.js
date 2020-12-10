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