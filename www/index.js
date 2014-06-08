window.Pyly = window.Pyly || { };

// Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
if(DevExpress.devices.current().platform === 'win8') {
    DevExpress.devices.current({ platform: "generic" });
}

$(function() {
    Pyly.app = new DevExpress.framework.html.HtmlApplication({
        namespace: Pyly,

        // Navigation type to navbar and definition of navigation items
        navigationType: "navbar",
        navigation: [
            {
                title: "Zprávy",
                action: "#messages",
                icon: "home"
            },
            {
                title: "Seznamy",
                action: "#Lists",
                icon: "bookmark"
            },
            {
              title: "Kalendář",
              action: "#Calendar",
              icon: "event"
            },
            {
                title: "Rostliny",
                action: "#Herbs",
                icon: "info"
            }
        ]
    });

    // Router for details
    Pyly.app.router.register(":view/:id/", { view: "messages", id: undefined });
    Pyly.app.navigate();
});

// Function for finding element inside json this is used for static data only
function findElement(arr, propName, propValue) {
    for (var i=0; i < arr.length; i++)
        if (arr[i][propName] == propValue)
            return arr[i];
}