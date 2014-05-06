Pyly['doctor-details'] = function(params) {
    var viewModel = {
        id: params.id,
        name: ko.observable('')
    }

    $.getJSON(doctorsUrl).done(function(json) {
        var item = json[params.id-1];

        viewModel.name(item.d_firstname + ' ' + item.d_lastname);
    });

    return viewModel;
}