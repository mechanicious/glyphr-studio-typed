export module helpers {
    export function path(segments: Array<string>): string {
        return segments.join('/').replace(/[\/]+/g, '/').trim();
    }
    export function hash(hash?: string): string {
        if(hash) window.location.hash = hash;
        return window.location.hash;
    }
    export function active_hash(match_hash:string): 'active'|'' {
        return hash() === match_hash ? 'active' : '';
    }
}