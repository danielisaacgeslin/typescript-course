/* models */
class Actor implements IActor {
    constructor(
        readonly id: number,
        public name: string,
        public imageUrl?: string
    ) { }
}

class Movie implements IMovie {
    constructor(
        readonly id: number | string,
        public title: string,
        public cast: IActor[] = []
    ) { }

    rate(stars: number): boolean {
        return true;
    }

    postComment(comment: string): number {
        return 1;
    }
}

/* implementation */
const bruce: IActor = new Actor(1, 'Bruce Willis');
const joseph: IActor = new Actor(2, 'Joseph Gordon-Levitt', 'jeseph.jpg');
const looper: IMovie = new Movie(1, 'Looper', [bruce, joseph]);
const armageddon: IMovie = new Movie('abc', 'Armageddon', [bruce]);

const rateResult: boolean = looper.rate(5);
const commentId: number = looper.postComment('great movie');

/* getters & setters */
class SuperSecureClass {
    private _uppercaseName: string = '';

    set isSecure(value: string) {
        if (typeof value === 'string') this._uppercaseName = value.toUpperCase();
        else throw new Error(`got "${typeof value}", expected "string"`);
    }

    get isSecure() {
        return `uppercase name is ${this._uppercaseName}`;
    }
}

const superSecureClassInstance = new SuperSecureClass();
superSecureClassInstance.isSecure = 'hello';
const whatsInThere = superSecureClassInstance.isSecure; // 'uppercase name is HELLO'