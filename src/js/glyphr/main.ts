import {Router} from "./routerts/Router";
import {Openproject} from "./controller/Openproject";

new Router().route(['', '#openproject/new'], (route) => {
     new Openproject('/open_project/new_project.html');
})
.route(['#openproject/load'], (route) => {
    new Openproject('/open_project/load_project.html');
})
.route(['#openproject/example'], (route) => {
    new Openproject('/open_project/example_project.html');
})
.navigate(window.location.hash);