define(["require", "exports"], function (require, exports) {
    "use strict";
    /// <reference path="../../../../typings/main.d.ts"/>
    var Route = (function () {
        function Route(hash) {
            this.hash = hash;
        }
        Route.prototype.getHash = function () {
            return this.hash;
        };
        return Route;
    }());
    exports.Route = Route;
});
//# sourceMappingURL=Route.js.map