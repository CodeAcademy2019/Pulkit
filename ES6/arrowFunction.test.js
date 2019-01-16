const stringsToFirstCharsString = require('./arrowFunction.js');
describe('stringToFirstCharsString',()=>{
    it('should return the string "PA"',()=>{
        process.argv = ["jest","test","Pulkit","Agarwal"];
        expect(stringsToFirstCharsString()).toEqual(`[Pulkit,Agarwal] becomes "PA"`);
    })

    it('should return error message for null value',()=>{
        process.argv = ["jest","test","hello",null];
        expect(stringsToFirstCharsString()).toEqual(`undefined or null value in array`);
    })

    it('should return error message for undefined value',()=>{
        process.argv = ["jest","test",undefined];
        expect(stringsToFirstCharsString()).toEqual(`undefined or null value in array`);
    })

    it('should return error message for empty array',()=>{
        process.argv = [];
        expect(stringsToFirstCharsString()).toEqual(`Empty array passed`);
    })
    
    it('should return error message for empty array',()=>{
        process.argv = ["jest",null];
        expect(stringsToFirstCharsString()).toEqual(`Empty array passed`);
    })

})