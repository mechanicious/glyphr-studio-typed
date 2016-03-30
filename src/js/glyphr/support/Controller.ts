import {Type} from "./Type";
import {View} from "./View";
import {Exposable} from "./interface/Exposable";

export abstract class Controller implements Exposable<Controller> {
    protected _view: View;

    constructor(view: View) {
        this._view = view;
    }

    expose(): Controller {
        return this;
    }

    public abstract getView(): View;
}