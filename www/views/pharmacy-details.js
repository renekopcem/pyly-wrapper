// View model of Pharmacy Detail component

Pyly['pharmacy-details'] = function(params) {
    var viewModel = {
        id: params.id,
        name: ko.observable('') // Observing the name after the JSON get back
    }

    $.getJSON(pharmacyUrl).done(function(json) {
        // Find item of ID in json file by p_id
        var item = findElement(json, 'p_id', params.id);

        // Set title of View
        viewModel.name(item.p_title);
    });

    return viewModel;
}