var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../support/Controller", "../support/View", "./../settings", "./../helpers"], function (require, exports, Controller_1, View_1, settings_1, helpers_1) {
    "use strict";
    var Openproject = (function (_super) {
        __extends(Openproject, _super);
        function Openproject(right_sidebar) {
            _super.call(this, new View_1.View(['/open_project/index.html', '/open_project/app_info.html', right_sidebar,
                '/open_project/ui_navigation_tabs.html'], function (view) {
                var render = Mustache.to_html(view.expose()['/open_project/index.html'], {
                    _s: settings_1.settings,
                    _h: helpers_1.helpers
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
        Openproject.prototype.getView = function () {
            return this._view;
        };
        return Openproject;
    }(Controller_1.Controller));
    exports.Openproject = Openproject;
});
//# sourceMappingURL=Openproject.js.map