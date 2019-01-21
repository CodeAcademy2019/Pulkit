const fileRead = require('./countLines-3.js');
describe('new lines reading',()=>{
    it('should print number of new lines into file',()=>{
        process.argv = ['jest','test','/Users/Pulkit_Agarwal-BNG/Pulkit/node/countLines-3.js'];
        expect(fileRead()).toEqual(11);
    })
    it('should print zero when empty file passed',()=>{
        process.argv = ['jest','test','/Users/Pulkit_Agarwal-BNG/Pulkit/node/test-3.js'];
        expect(fileRead()).toEqual(0);
    })
    it('should print number of new lines into file',()=>{
        process.argv = ['jest','test','/Users/Pulkit_Agarwal-BNG/Pulkit/node/helloWorld-1.js'];
        expect(fileRead()).toEqual(6);
    })
})