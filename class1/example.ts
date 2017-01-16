const test: any = 'asd';
let str: string = 'asd';
const int: number = 5;
const ok: boolean = true;
const manyStrings: any[] = ['asd', 5];
let user: { id: number } = { id: 1 };
let x: [{ id: number }, boolean] = [{ id: 5 }, true]; //tuple
let fn: Function = function () { };

let a: number = 5;

function sum(a: number, b: number): number {
    return a + b;
}
const result1: number = sum(1, 5);

function noop(): void { }
noop();

function fakeFn(a) {
    return a;
}
fakeFn('5');

function getHalfs(a: number): number[] {
    return [a / 2, a / 2];
}

function optional(a: number, b?: string) {

}
optional(1);