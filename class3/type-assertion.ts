/* type assertion */
/* ex 1 */
class Shape { }
class Circle extends Shape { }
class Square extends Shape { }

function createShape(type: string): Shape {
    if (type === "circle") return new Circle();
    else return new Square();
}

const circle = <Circle>createShape("circle");

/* ex2 */
interface IVehicle {
    wheels: number;
    engine: boolean;
}

function getVehicleFrom() {
    return <IVehicle>{ wheels: 2, engine: false };
}

const vehicle = getVehicleFrom();

/* ex3 */
const someArray: any[] = ['one', 'two'];
const stringArray = <string[]>someArray;