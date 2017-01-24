export default class TestMe {
    private testNameProp: string;
    constructor() { }

    get uppercaseTestName() {
        return this.testNameProp;
    }

    set uppercaseTestName(name: string) {
        if (typeof name === 'string') this.testNameProp = name.toUpperCase();
        else throw new Error(`"${name}" should be a string`);
    }
}