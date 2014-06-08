// View model of Herbs with search component

Pyly.Herbs = function (params) {

    var dataSource;
    // Create empty datasource and put it into dataset
    var data = new DevExpress.data.DataSource({
        store: [],
        isLoaded: function() { // This prevents from flickering of spin
            return false;
        }
    });

    var viewModel = {
        // Definition of herbs dataset
        herbs:
        {
            data: ko.observable(data),
            query: ko.observable('')
        }
    };

    // Get data and fill the dataset in herbs
    $.getJSON(herbsUrl).done(function(json) {
        dataSource = new DevExpress.data.DataSource({
            store: json
        });
        viewModel.herbs.data(dataSource);
    });

    // Filtering herbs inside the app
    viewModel.herbs.query.subscribe(function(value) {
        dataSource.filter('h_title', 'contains', value);
        dataSource.load();
    });


    return viewModel;
}