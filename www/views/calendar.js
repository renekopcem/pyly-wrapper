/**
 * Created by renekopcem on 28.04.14.
 */

Pyly.Calendar = function (params) {
    var viewModel = {

        calendar: new DevExpress.data.DataSource(
            {
                load: function(loadOption) {
                    return $.getJSON(calendarUrl)
                }
            }
        )
    };

    return viewModel;
}

function countItems(items) {

    if (items === null) {
        return '0';
    }

    if (items.length === 0) {
        return '0';
    }
    return items.length;
}