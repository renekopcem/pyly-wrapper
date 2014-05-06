/**
 * Created by renekopcem on 28.04.14.
 */

Pyly['pharmacy-details'] = function(params) {
    var viewModel = {
        id: params.id,
        name: ko.observable('')
    }

    $.getJSON('http://api.pyly.dev:8888/index.php?what=pharmacy&id=' + viewModel.id + '&callback=?').done(function(json) {
        var item = json[0];

        viewModel.name(item.p_title);
    });

    return viewModel;
}