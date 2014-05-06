Pyly['herb-details'] = function(params) {
    var viewModel = {
        id: params.id,
        name: ko.observable('')
    }

    $.getJSON(herbsUrl).done(function(json) {
        var item = json[params.id-1];

        viewModel.name(item.h_title);
    });

    return viewModel;
}