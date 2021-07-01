//Main ViewModel
function AppViewModel() {
    let self = this;
    self.film_list = ko.mapping.fromJS(GetFilms());
    self.current = ko.observable(null);
    self.infoEnabled = ko.observable(false);

    self.loadDetails = function (film) {
        self.current(film);
        let modal = bootstrap.Modal.getOrCreateInstance(document.querySelector('#myModal'));
        modal.show();
    }

    self.enableInfo = function (film) {
        self.current(film);
        self.infoEnabled(true);
    }

    self.disableInfo = function() {
        self.infoEnabled(false);
    }
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
