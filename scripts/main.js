//Main ViewModel
function AppViewModel() {
    let self = this;
    self.film_list = ko.observableArray();
    self.current = ko.observable(null);
    self.infoEnabled = ko.observable(false);

    self.loadMainPage = function () {
        self.infoEnabled(false);
        self.current(null);
        self.film_list = ko.mapping.fromJS(GetFilms());
    }

    self.loadDetails = function (film) {
        self.current(film);
        let modal = bootstrap.Modal.getOrCreateInstance(document.querySelector('#film-info-modal'));
        modal.show();
    }

    self.loadDetailsPage = function () {
        self.film_list(null);
        self.infoEnabled(true);
    }

    self.loadMainPage();
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
