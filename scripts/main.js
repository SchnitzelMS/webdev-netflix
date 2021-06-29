function Film(id, name, director, year, description, actor, picture) {
    this.id = id;
    this.name = name;
    this.director = director;
    this.year = year;
    this.description = description;
    this.actor = actor;
    this.picture = picture;
}

//todo implement details page


function FilmList(title) {
    this.title = title;
    this.films = ko.observableArray([//todo remove fix listand use var films instead
        new Film(0, "Vikings", "../Resources/example01.jpg"),
        new Film(1, "The Witcher", "../Resources/example02.jpg"),
        new Film(2, "Mobile Suit Gundam", "../Resources/example03.jpg"),
        new Film(3, "Star Trek Discovery", "../Resources/example04.jpg"),
        new Film(4, "KIN", "../Resources/example05.jpg"),
        new Film(5, "Unser Planet", "../Resources/example06.jpg")
    ]);

    this.loadMediaDetails = function () {
        alert("Hey, ich bin " + self.title + " ");
    }
}

//Temporary method to insert new areas for a film list
function LoadFilmLists() {
    let list = [];
    list.push(new FilmList("Leider geil"));
    list.push(new FilmList("Thriller"));
    list.push(new FilmList("Neu bei uns"));
    list.push(new FilmList("Filled"));
    return list;
}

//Main ViewModel
function AppViewModel() {
    this.film_list = LoadFilmLists();
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());

