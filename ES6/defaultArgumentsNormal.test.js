const average = require('./defaultArgumentsNormal.js');
describe('average',()=>{
    it('should return the average of 1.5',()=>{
        expect(average(1,2)).toEqual(1.5);
    })

    it('should return 1',()=>{
        expect(average(undefined,2)).toEqual(1);
    })

    it('should return 0',()=>{
        expect(average(-1,undefined)).toEqual(0);
    })

    it('should return 0.5',()=>{
        expect(average(undefined,undefined)).toEqual(0.5);
    })
    //try undefined

})