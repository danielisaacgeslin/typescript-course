/* create a type guard function for the 'ISomePerson' interface to test the 'testMe' variable */
interface IFullName {
    firstName: string;
    lastName: string;
}

interface ISomePerson {
    id: number;
    fullName: IFullName;
}

let testMe: any;