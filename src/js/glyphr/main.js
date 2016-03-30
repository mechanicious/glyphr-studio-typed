define(["require", "exports", "./routerts/Router", "./controller/Openproject"], function (require, exports, Router_1, Openproject_1) {
    "use strict";
    new Router_1.Router().route(['', '#openproject/new'], function (route) {
        new Openproject_1.Openproject('/open_project/new_project.html');
    })
        .route(['#openproject/load'], function (route) {
        new Openproject_1.Openproject('/open_project/load_project.html');
    })
        .route(['#openproject/example'], function (route) {
        new Openproject_1.Openproject('/open_project/example_project.html');
    })
        .navigate(window.location.hash);
});
//# sourceMappingURL=main.js.map