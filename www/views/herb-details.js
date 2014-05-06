/**
 * Created by renekopcem on 28.04.14.
 */

Pyly['herb-details'] = function(params) {
    var viewModel = {
        id: params.id,
        name: ko.observable('')
    }

    $.getJSON('http://api.pyly.dev:8888/index.php?what=herb&id=' + viewModel.id + '&callback=?').done(function(json) {
        var item = json[0];

        viewModel.name(item.h_title);
    });

    return viewModel;
}