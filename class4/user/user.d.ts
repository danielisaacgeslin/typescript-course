declare module AdminUser {
    interface props {
        id: number;
        name: string;
        level: number; 
    }
}

declare module BasicUser {
    interface props {
        id: number;
        email: string;
    }
}