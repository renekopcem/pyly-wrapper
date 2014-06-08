// View model of Herb Detail component

Pyly['herb-details'] = function(params) {
    var viewModel = {
        id: params.id,
        name: ko.observable('') // Observing the name after the JSON get back
    }

    $.getJSON(herbsUrl).done(function(json) {
        // Find item of ID in json file by h_id
        var item = findElement(json, 'h_id', params.id);

        // Set title of View
        viewModel.name(item.h_title);
    });

    return viewModel;
}