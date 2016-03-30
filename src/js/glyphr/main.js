define(["require", "exports", "./routerts/Router", "./settings", "./helpers"], function (require, exports, Router_1, settings_1, helpers_1) {
    "use strict";
    var router = new Router_1.Router(), _g = {
        openproject: function (route, right_sidebar) {
            route.getView(['/open_project/index.html', '/open_project/app_info.html', right_sidebar,
                '/open_project/ui_navigation_tabs.html'], function (view) {
                var render = Mustache.to_html(view['/open_project/index.html'], {
                    _s: settings_1.settings,
                    _h: helpers_1.helpers
                }, {
                    left_sidebar: view['/open_project/app_info.html'],
                    right_sidebar: view[right_sidebar],
                    ui_navigation_tabs: Mustache.to_html(view['/open_project/ui_navigation_tabs.html'], {
                        active_new_project: right_sidebar === '/open_project/new_project.html' ? true : false,
                        active_load_project: right_sidebar === '/open_project/load_project.html' ? true : false,
                        active_example_project: right_sidebar === '/open_project/example_project.html' ? true : false
                    })
                });
                document.body.innerHTML = render;
            });
        }
    };
    router.route(['', '#openproject/new'], function (route) {
        _g.openproject(route, '/open_project/new_project.html');
    })
        .route(['#openproject/load'], function (route) {
        _g.openproject(route, '/open_project/load_project.html');
    })
        .route(['#openproject/example'], function (route) {
        _g.openproject(route, '/open_project/example_project.html');
    })
        .navigate(window.location.hash);
});
//# sourceMappingURL=main.js.map