/**
 * Unit tests for the is 10 module
 */

const isTen = require('../');


describe('is 10', () => {
    it('should return true for all', () => {
        expect(isTen(10)).toEqual(true);
        expect(isTen(10.0)).toEqual(true);
    });

    it('should return false for all', () => {
        const notTen = [
            'bill murray',
            2,
        ]
        // TODO: think of some other things that aren't 10
        notTen.forEach(x => {
            expect(isTen(x)).toEqual(false)
        });
    });
});

describe('A value that is not even a number', () => {
    it('should return false for Infinity', () => {
        expect(isTen(Infinity)).toEqual(false);
    });

    it('should return false for a function', () => {
        expect(isTen(() => {})).toEqual(false);
    });

    it('should return false for null', () => {
        expect(isTen(null)).toEqual(false);
    });

    it('should return false for an array of singleton 10', () => {
        expect(isTen([10])).toEqual(false);
    });

    it('should return false for an array of 10 items', () => {
        expect(isTen([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual(false);
    });
});

