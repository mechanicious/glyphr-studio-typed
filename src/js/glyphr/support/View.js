define(["require", "exports", "./../settings", "./../helpers"], function (require, exports, settings_1, helpers_1) {
    "use strict";
    var View = (function () {
        function View(pathbag, callback) {
            this._path = pathbag;
            this._view = {};
            this.getView(pathbag, callback);
        }
        View.prototype.expose = function () {
            return this._view;
        };
        View.prototype.query = function (path) {
            var view = this._view[path];
            if (!view)
                throw new ReferenceError('View "' + path + '" does not exist. Consider adding it and try again.');
            return view;
        };
        View.prototype.getView = function (pathbag, callback) {
            var _t = this;
            pathbag.forEach(function (path) {
                $.get(helpers_1.helpers.path([settings_1.settings.view_path, path]), function (data) {
                    _t._view[path] = data;
                    if (pathbag.indexOf(path) === pathbag.length - 1)
                        callback(_t);
                });
            });
        };
        return View;
    }());
    exports.View = View;
});
//# sourceMappingURL=View.js.map