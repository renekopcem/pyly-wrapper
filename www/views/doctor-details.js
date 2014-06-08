// View model of Doctor Detail component

Pyly['doctor-details'] = function(params) {
    var viewModel = {
        id: params.id,
        name: ko.observable('') // Observing the name after the JSON get back
    }

    $.getJSON(doctorsUrl).done(function(json) {
        // Find item of ID in json file by d_id
        var item = findElement(json, 'd_id', params.id);

        // Set title of View
        viewModel.name(item.d_firstname + ' ' + item.d_lastname);
    });

    return viewModel;
}