window.Pyly = window.Pyly || { };

// Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
// DevExpress.devices.current({ platform: "generic" });

$(function() {
    Pyly.app = new DevExpress.framework.html.HtmlApplication({
        namespace: Pyly,

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
                icon: "info"
            },
            {
              title: "Kalendář",
              action: "#Calendar",
              icon: "info"
            },
            {
                title: "Rostliny",
                action: "#Herbs",
                icon: "info"
            }
        ]
    });

    Pyly.app.router.register(":view/:id/", { view: "messages", id: undefined });
    Pyly.app.navigate();
});