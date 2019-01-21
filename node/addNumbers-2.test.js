const addNumbers = require('./addNumbers-2.js');
describe('Adding Numbers',()=>{
    it('should result sum of the array passed:511',()=>{
        process.argv = ['jest','test',1,10,500];
        expect(addNumbers()).toEqual(511);
    })
    it('should result sum of array passed:-8',()=>{
        process.argv = ['jest','test',-10,3,-1];
        expect(addNumbers()).toEqual(-8);
    })
})
describe('Corner Cases',()=>{
    it('should result the number itself',()=>{
        process.argv = ['jest','test',1];
        expect(addNumbers()).toEqual(1);
    })
    it('should return zero: case of empty array',()=>{
        process.argv = ['jest','test'];
        expect(addNumbers()).toEqual(0);
    })
})