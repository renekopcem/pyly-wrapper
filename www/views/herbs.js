/**
 * Created by renekopcem on 28.04.14.
 */

Pyly.Herbs = function (params) {

    var dataSource;
    var data = new DevExpress.data.DataSource({
        store: [],
        isLoaded: function() {
            return false;
        }
    })

    var viewModel = {

        herbs:
        {
            data: ko.observable(data),
            query: ko.observable('')
        }
    };

    $.getJSON(herbsUrl).done(function(json) {
        dataSource = new DevExpress.data.DataSource({
            store: json
        });
        viewModel.herbs.data(dataSource);
    });

    viewModel.herbs.query.subscribe(function(value) {
        dataSource.filter('h_title', 'contains', value);
        dataSource.load();
    });


    return viewModel;
}