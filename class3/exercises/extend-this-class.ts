/**
 * create a new class as an extension of this one.
 * create a "sound" property as a string
 * Extend the "saySomething" so it also returns the sound of the new class pet sound.
 */

abstract class Pet {
    public name: string;

    constructor() {
        console.log(`don't forget to call this constructor`);
    }

    public run(): string {
        return 'running';
    }

    public saySomething(): string {
        return `my name is ${this.name} and i say `;
    }
}