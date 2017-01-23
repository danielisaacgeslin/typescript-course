/**
 * create a new class as an extension of this one.
 * create a "sound" property as a string
 * Extend the "saySomething" so it also returns the sound of the new class pet sound.
 */

abstract class Pet {
    public name: string;

    constructor(name) {
        this.name = name;
        console.log(`don't forget to call this constructor`);
    }

    public run(): string {
        return 'running';
    }

    public saySomething(): string {
        return `my name is ${this.name} and i say `;
    }
}

class Mouse extends Pet {
    public sound: string;
    constructor(name, sound) {
        super(name);
        this.sound = sound;
    }

    public saySomething() {
        return `${super.saySomething()} ${this.sound}`;
    }

}