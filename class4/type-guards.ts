/* type guards */
class Dog { woof() { } }
class Cat { meow() { } }
let pet: Dog | Cat// = new ...;
if (pet instanceof Dog) {
    pet.woof(); // OK
} else {
    //pet.woof(); // Error
}
let anotherPet: Dog & Cat// = new...;
anotherPet.woof(); //OK, may fail on execution time
anotherPet.meow(); //OK, may fail on execution time

/* typeof */
let someType: any;
if (typeof someType === 'string') {
    someType.charAt(0); //intellisense as string
}

if (typeof someType === 'number') {
    someType.toFixed(2); //intellisense as number
}

/* custom */
interface ITestTypeGuard {
    id: number;
    name: string;
}
function testITestTypeGuard(param: any): param is ITestTypeGuard {
    return param && typeof param.id === 'number' && typeof param.name === 'string';
}
let testTypeGuardVar: any;
if (testITestTypeGuard(testTypeGuardVar)) {
    testTypeGuardVar.id; //intellisense as ITestTypeGuard
}