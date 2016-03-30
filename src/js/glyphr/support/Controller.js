define(["require", "exports"], function (require, exports) {
    "use strict";
    var Controller = (function () {
        function Controller(view) {
            this._view = view;
        }
        Controller.prototype.expose = function () {
            return this;
        };
        return Controller;
    }());
    exports.Controller = Controller;
});
//# sourceMappingURL=Controller.js.map