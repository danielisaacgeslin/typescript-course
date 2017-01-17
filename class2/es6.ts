/* default parameter */
function someFn(value: string = 'this is the default value') { }

/* template literal */
const template: string = `1 + 1 is: ${1 + 1}`;

/* multi line strings */
const multiLine: string = `
line 1
line 2
line 3`;

/* destructuring assignment */
const someObject: any = { first: 1, second: 2, third: 3 }
const {first, third} = someObject;

/* object literals */
const someId: number = 1;
const someName: string = 'Dani';
const someObj: { someId: number, someName: string } = { someId, someName };

/* arrow functions */
const arrow1 = () => { };
const arrow2 = data => data ? data : 'nothing to return';
const arrow3 = data => { };

/* promise */
const promise = new Promise((resolve, reject) => { });

/* let & const */
let byBlock;
const oneTime = 'something';

/* classes */
class someClass {
    constructor() { };
}

/* function generators*/
function* generate(){
    let counter: number = 0;
    while(true) yield counter++;
}

const counting = generate(); //undefined
counting.next(); // 0
counting.next(); // 1
counting.next(); // 2
counting.next(); // 3