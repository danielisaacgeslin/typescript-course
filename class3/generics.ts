/* generics */
interface IUserData<T> {
    id: number;
    name: string;
    misteryData: T;
}

const userData: IUserData<number> = {id: 1, name: 'Dan', misteryData: 5};

/* more generics */
interface IPetData<T, U> {
    id: number;
    name: string;
    misteryData: T;
    moreMisteryData: U;
}

const cat: IPetData<number, string> = {id: 1, name: 'Dan', misteryData: 5, moreMisteryData: 'hello'};

/* generic on functions */
function returnsMistery<T>(param: T): T{
    return param;
}
const numberParam: number = 5;
const whatAmI = returnsMistery(numberParam); //takes number as param and returns number