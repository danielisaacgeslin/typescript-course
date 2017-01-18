/* write a class (Book) that recives data in the constructor to create an IBook like object */

type page = string;

interface IBook {
    readonly id: number | string;
    title: string;
    pages: number;
    topics: string[];
    open(page: number): page;
    close(fast?: boolean): void;
}