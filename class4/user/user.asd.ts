export declare module root {
    export namespace models {
        export type AdminUser = _AdminUser;
        export type BasicUser = _BasicUser;
    }
}

export interface _AdminUser {
    id: number;
    name: string;
    level: number;
}


export interface _BasicUser {
    id: number;
    email: string;
}