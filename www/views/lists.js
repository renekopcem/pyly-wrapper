// View model of Lists for pharmacies and doctors component

Pyly.Lists = function (params) {
    var viewModel = {
        // Definition of tabs
        tabs: [
            { text: 'Lékarny' },
            { text: 'Lékaři'}
        ],

        selectedTab: ko.observable(),

        // Definition of doctor dataset
        doctors: new DevExpress.data.DataSource(
            {
                load: function(loadOption) {
                    return $.getJSON(doctorsUrl)
                },
                map: function(item) { // Map of id and name from JSON file
                    return {
                        id: item.d_id,
                        name: item.d_firstname + ' ' + item.d_lastname
                    };
                }
            }
        ),

        // Definition of pharmacy dataset
        pharmacy: new DevExpress.data.DataSource(
            {
                load: function(loadOption) {
                    return $.getJSON(pharmacyUrl);
                },
                map: function(item) { // Map of id and name from JSON file
                    return {
                        id: item.p_id,
                        name: item.p_title
                    };
                }
            }
        )
    };

    // Default selected first tab
    viewModel.selectedTab(0);

    return viewModel;
}