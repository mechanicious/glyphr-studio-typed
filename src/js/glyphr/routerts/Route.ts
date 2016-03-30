/// <reference path="../../../../typings/main.d.ts"/>
export class Route {
    hash: string;

    constructor(hash: string) {
        this.hash = hash;
    }

    getHash(): string {
        return this.hash;
    }
}