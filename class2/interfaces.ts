/* interfaces */

/* optionals */
interface IActor {
    readonly id: number;
    name: string;
    imageUrl?: string;
}

let mrDeniro: IActor = {
    id: 1,
    name: 'Robert'
};
mrDeniro.name = 'De Niro';
//mrDeniro.id = 2; // error

/* methods */
interface IMovie {
    readonly id: number | string;
    title: string;
    cast: IActor[];
    rate(stars: number): boolean;
    postComment(comment: string): number;
}

/* read only */
interface IFixedFruitBasket {
    readonly name: string;
    fruits: ReadonlyArray<string>;
    readonly dimensions: ReadonlyArray<number>;
}

let redBasket: IFixedFruitBasket = {
    name: 'red basket',
    fruits: ['cheery', 'apple'],
    dimensions: [10, 20, 5]
};

//redBasket.name = 'really red'; //error
//redBasket.fruits.push('something'); //error
redBasket.fruits = ['another red fruit']; //ok
//redBasket.dimensions = [1,2,3]; //error

/* dynamic props */
interface IDimensions {
    [key: string]: number
}

const boxDimensions: IDimensions = {
    width: 50,
    height: 50,
    //color: 'red' //error
}

interface ICarDimensions {
    id: number;
    [key: string]: number;
    //name: string; //error 
}

const car: ICarDimensions = {
    id: 1, //mandatory
    width: 10
}

/* merging */
interface IMillionaire {
    dollars: number;
}

interface IMillionaire {
    euros: number;
}

const a:IMillionaire = {dollars: 1, euros: 2}