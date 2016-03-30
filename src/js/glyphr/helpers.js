define(["require", "exports"], function (require, exports) {
    "use strict";
    var helpers;
    (function (helpers) {
        function path(segments) {
            return segments.join('/').replace(/[\/]+/g, '/').trim();
        }
        helpers.path = path;
        function hash(hash) {
            if (hash)
                window.location.hash = hash;
            return window.location.hash;
        }
        helpers.hash = hash;
        function active_hash(match_hash) {
            return hash() === match_hash ? 'active' : '';
        }
        helpers.active_hash = active_hash;
    })(helpers = exports.helpers || (exports.helpers = {}));
});
//# sourceMappingURL=helpers.js.map