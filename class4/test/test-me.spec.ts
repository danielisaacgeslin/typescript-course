declare var describe, it, before, beforeEach;
import { expect } from 'chai';

import { default as TestMe } from '../exercises/test-me';

describe('Test me class', () => {
    let inst: TestMe;

    beforeEach(() => {
        inst = new TestMe();
    });

    it('should get uppercaseTestName', () => {
        inst.uppercaseTestName = 'asd';
        expect(inst.uppercaseTestName).to.equal('ASD');
    });
});