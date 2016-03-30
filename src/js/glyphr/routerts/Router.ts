import {Route} from './Route';
import {helpers as _h} from "./../helpers";

type Map<V> = { [s: string]: V; };

export class Router {
    routes: Map<(route: Route) => void>;

    constructor() {
        var _this = this;
        this.routes = {};
        window.onhashchange = (ev) => {
            ev.preventDefault();
            _this.navigate(_h.hash());
        };
    }

    route(hashbag:Array<string>, callback: (route :Route)=>any): Router {
        var _this = this;
        hashbag.forEach((hash) => {
            _this.routes[hash] = callback;
        });
        return this;
    }

    navigate(hash:string): Router {
        _h.hash(hash);
        this.routes[hash](new Route(hash));
        return this;
    }
}