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