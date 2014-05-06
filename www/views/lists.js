Pyly.Lists = function (params) {
    var viewModel = {
        tabs: [
            { text: 'Lékarny' },
            { text: 'Lékaři'}
        ],

        selectedTab: ko.observable(),

        doctors: new DevExpress.data.DataSource(
            {
                load: function(loadOption) {
                    return $.getJSON(doctorsUrl)
                },
                map: function(item) {
                    return {
                        id: item.d_id,
                        name: item.d_firstname + ' ' + item.d_lastname
                    };
                }
            }
        ),

        pharmacy: new DevExpress.data.DataSource(
            {
                load: function(loadOption) {
                    return $.getJSON(pharmacyUrl);
                },
                map: function(item) {
                    return {
                        id: item.p_id,
                        name: item.p_title
                    };
                }
            }
        )
    };

    viewModel.selectedTab(0);

    return viewModel;
}