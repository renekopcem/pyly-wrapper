// View model of Calendar component and some supporting functions for counting

Pyly.Calendar = function (params) {
    // Definition of viewModel
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

// Function for counting items in a group
// That means that if you have null or 0 it will return 0 not undefined
function countItems(items) {

    if (items === null) {
        return '0';
    }

    if (items.length === 0) {
        return '0';
    }
    return items.length;
}