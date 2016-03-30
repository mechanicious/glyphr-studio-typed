import { settings as _s } from "./../settings";
import {helpers as _h} from "./../helpers";
import {Exposable} from "./interface/Exposable";
import {Type} from "./Type";

export class View implements Exposable<Type.Map<string>> {
    protected _view: Type.Map<string>;
    protected _path: Array<string>;

    constructor(pathbag: Array<string>, callback: (view?: View)=>any) {
        this._path = pathbag;
        this._view = {};
        this.getView(pathbag, callback);
    }
    
    expose(): Type.Map<string> {
       return this._view;
    }

    query(path: string): string {
        var view = this._view[path];
        if(! view) throw new ReferenceError('View "' + path + '" does not exist. Consider adding it and try again.');

        return view;
    }

    protected getView(pathbag: Array<string>, callback: (view: View) => any) {
        var _t = this;
        pathbag.forEach((path) => {
            $.get(_h.path([_s.view_path, path]), (data) => {
                _t._view[path] = data;
                if(pathbag.indexOf(path) === pathbag.length-1) callback(_t);
            });
        });
    }

    
}