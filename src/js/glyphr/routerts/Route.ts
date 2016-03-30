/// <reference path="../../../../typings/main.d.ts"/>

import { settings as _s } from "./../settings";
import {helpers as _h} from "./../helpers";

type Map<V> = { [s: string]: V; };

export class Route {
    hash: string;

    constructor(hash: string) {
        this.hash = hash;
    }

    getHash(): string {
        return this.hash;
    }

    getView(views: Array<string>, cb: (view: Map<string>) => any) {
        var viewBag: Map<string> = {};
        views.forEach((view) => {
            $.get(_h.path([_s.view_path, view]), (data) => {
                viewBag[view] = data;
                if(views.indexOf(view) === views.length-1) cb(viewBag);
            });
        });
    }
}