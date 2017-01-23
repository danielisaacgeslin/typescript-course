/* generics */
interface IUserData<T> {
    id: number;
    name: string;
    misteryData: T;
}

const userData: IUserData<number> = { id: 1, name: 'Dan', misteryData: 5 };

/* more generics */
interface IPetData<T, U> {
    id: number;
    name: string;
    misteryData: T;
    moreMisteryData: U;
}

const cat: IPetData<number, string> = { id: 1, name: 'Dan', misteryData: 5, moreMisteryData: 'hello' };

/* generic on functions */
function returnsMistery<T>(param: T): T {
    return param;
}
const numberParam: number = 5;
const whatAmI = returnsMistery(numberParam); //takes number as param and returns number

/* more generics */
interface ICatList {
    catName: string;
    typeOfCat: string;
}

interface IDogList {
    dogName: string;
    typeOfDog: string;
}

interface IPetPagination<T> {
    petList: T[];
    page: number;
    totalResults: number;
    perPage: number;
}

const catPages: IPetPagination<ICatList> = {
    petList: [{ catName: 'katty', typeOfCat: 'siamese' }],
    page: 1,
    totalResults: 100,
    perPage: 20
};

const dogPages: IPetPagination<IDogList> = {
    petList: [{ dogName: 'perry', typeOfDog: 'schumacher' }],
    page: 1,
    totalResults: 100,
    perPage: 20
};

/* on promises */

const getDataFromDb = (): Promise<string[]> => new Promise(resolve => resolve(['first', 'second', 'third']));

getDataFromDb().then(
    data => data[0].toUpperCase, //data:string[] -> FIRST
    error => { } // error: any
)