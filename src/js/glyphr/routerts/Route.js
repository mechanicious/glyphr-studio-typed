/// <reference path="../../../../typings/main.d.ts"/>
define(["require", "exports", "./../settings", "./../helpers"], function (require, exports, settings_1, helpers_1) {
    "use strict";
    var Route = (function () {
        function Route(hash) {
            this.hash = hash;
        }
        Route.prototype.getHash = function () {
            return this.hash;
        };
        Route.prototype.getView = function (views, cb) {
            var viewBag = {};
            views.forEach(function (view) {
                $.get(helpers_1.helpers.path([settings_1.settings.view_path, view]), function (data) {
                    viewBag[view] = data;
                    if (views.indexOf(view) === views.length - 1)
                        cb(viewBag);
                });
            });
        };
        return Route;
    }());
    exports.Route = Route;
});
//# sourceMappingURL=Route.js.map