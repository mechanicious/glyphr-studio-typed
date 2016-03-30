import {Router} from "./routerts/Router";
import {settings as _s} from "./settings";
import {helpers as _h} from "./helpers";
import {Route} from "./routerts/Route";

var router = new Router(),
    _g = {
        openproject: (route: Route, right_sidebar: string) => {
            route.getView(['/open_project/index.html', '/open_project/app_info.html', right_sidebar,
                '/open_project/ui_navigation_tabs.html'], (view) => {
                var render = Mustache.to_html(view['/open_project/index.html'], {
                    _s: _s,
                    _h: _h
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

router.route(['', '#openproject/new'], (route) => {
    _g.openproject(route, '/open_project/new_project.html');
})
.route(['#openproject/load'], (route) => {
    _g.openproject(route, '/open_project/load_project.html');
})
.route(['#openproject/example'], (route) => {
    _g.openproject(route, '/open_project/example_project.html');
})

.navigate(window.location.hash);