import {Controller} from "../support/Controller";
import {View} from "../support/View";
import {settings as _s} from "./../settings";
import {helpers as _h} from "./../helpers";

export class Openproject extends Controller {
    constructor(right_sidebar: string) {
       super(new View(['/open_project/index.html', '/open_project/app_info.html', right_sidebar,
            '/open_project/ui_navigation_tabs.html'], (view) => {
            var render = Mustache.to_html(view.expose()['/open_project/index.html'], {
                _s: _s,
                _h: _h
            }, {
                left_sidebar: view.query('/open_project/app_info.html'),
                right_sidebar: view.query(right_sidebar),
                ui_navigation_tabs: Mustache.to_html(view.query('/open_project/ui_navigation_tabs.html'), {
                    active_new_project: right_sidebar === '/open_project/new_project.html' ? true : false,
                    active_load_project: right_sidebar === '/open_project/load_project.html' ? true : false,
                    active_example_project: right_sidebar === '/open_project/example_project.html' ? true : false
                })
            });
            document.body.innerHTML = render;
        }));
    }

    getView(): View {
        return this._view;
    }
}