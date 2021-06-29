//Main ViewModel
function AppViewModel() {
    var self = this;
    self.film_list = ko.mapping.fromJS(GetFilms());
    self.current = ko.observable(null);
    self.loadDetails = function (film) {
        self.current(film);
        var modal = bootstrap.Modal.getOrCreateInstance(document.querySelector('#myModal'));
        modal.show();
    }
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
