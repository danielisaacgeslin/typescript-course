declare var describe, it, before, beforeEach;
import { expect } from 'chai';
import { copySomeObject, original } from '../exercises/copy-this-object';


describe('copySomeObject function', () => {
    let copy: any;
    
    beforeEach(() => {
        copy = copySomeObject(original);
    });

    it('should copy the original object', () => {
        expect(original).to.deep.equal(copy);
    });

    it('should not have references to the original on numbers', () => {
        copy.someNumber = 2;
        expect(original.someNumber).to.not.equal(copy.someNumber);
    });

    it('should not have references to the original on arrays', () => {
        copy.someList.push(1);
        expect(original.someList.length).to.not.equal(copy.someList.length);
    });

    it('should not have references to the original object on arrays', () => {
        copy.objectList[0].id = 2;
        expect(original.objectList[0].id).to.not.equal(copy.objectList[0].id);
    });

});