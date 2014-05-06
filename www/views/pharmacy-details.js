Pyly['pharmacy-details'] = function(params) {
    var viewModel = {
        id: params.id,
        name: ko.observable('')
    }

    $.getJSON(pharmacyUrl).done(function(json) {
        var item = json[params.id-1];

        viewModel.name(item.p_title);
    });

    return viewModel;
}