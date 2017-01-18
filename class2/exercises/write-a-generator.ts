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

class Book implements IBook {
    constructor(
        readonly id: number | string,
        public title: string,
        public pages: number,
        public topics: string[]
    ) { }

    public open(page: number): page {
        return '';
    }

    public close(fast?: boolean) {

    }
}

const testBook: IBook = new Book(1, '', 1, []);