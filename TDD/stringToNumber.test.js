const stringToNumber = require('./stringToNumber.js');
describe('stringToNumber',()=>{
    it('should return the number',()=>{
        expect(stringToNumber('123')).toEqual(123);
    })
    it('should return NaN for undefined input',()=>{
        expect(stringToNumber(undefined)).toEqual('undefined input')
    })
    it('should return NaN for alphabet as an input',()=>{
        expect(stringToNumber('abc1')).toEqual(NaN)
    })
    it('should remove trailing zeroes from input',()=>{
        expect(stringToNumber('0012')).toEqual(12)
    })
    it('should return 0 for null',()=>{
        expect(stringToNumber(null)).toEqual('Null Object');
    })
})