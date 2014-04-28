(function() {
    "use strict";

    var MyApp = window.MyApp = { };
    
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });

    $(function() {
        MyApp.app = new DevExpress.framework.html.HtmlApplication({
            namespace: MyApp,
            
            navigationType: "navbar",
            navigation: [
                {
                    title: "Zprávy",
                    action: "#messages",
                    icon: "home"
                },
                {
                    title: "Seznamy",
                    action: "#lists",
                    icon: "info"
                },
                {
                  title: "Kalendář",
                  action: "#calendar",
                  icon: "info"
                },
                {
                    title: "Rostliny",
                    action: "#plants",
                    icon: "info"
                }
            ]
        });
        
        MyApp.app.router.register(":view", { view: "messages" });
        MyApp.app.navigate();
    });
    
})();