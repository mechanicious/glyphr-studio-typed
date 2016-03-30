define(["require", "exports", './Route', "./../helpers"], function (require, exports, Route_1, helpers_1) {
    "use strict";
    var Router = (function () {
        function Router() {
            var _this = this;
            this.routes = {};
            window.onhashchange = function (ev) {
                ev.preventDefault();
                _this.navigate(helpers_1.helpers.hash());
            };
        }
        Router.prototype.route = function (hashbag, callback) {
            var _this = this;
            hashbag.forEach(function (hash) {
                _this.routes[hash] = callback;
            });
            return this;
        };
        Router.prototype.navigate = function (hash) {
            helpers_1.helpers.hash(hash);
            this.routes[hash](new Route_1.Route(hash));
            return this;
        };
        return Router;
    }());
    exports.Router = Router;
});
//# sourceMappingURL=Router.js.map