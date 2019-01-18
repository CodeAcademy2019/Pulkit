const promises = require('./promiseMakingSynchronous-11.js');
describe('promises',()=>{
    it('should resolve to "Peter"',()=>{
        return expect(promises.getPromise1()).resolves.toEqual('Peter');
    })
    it('should resolve to " Petegrew"',()=>{
        return expect(promises.getPromise2()).resolves.toEqual('Petegrew');
    })
    it('should resolve to "Peter Petegrew"',()=>{
        return expect(promises.all(promises.getPromise1(),promises.getPromise2())).resolves.toEqual(['Peter', 'Petegrew']);
    })
    it('should give error message',()=>{
        return expect(promises.all()).toEqual('Please pass proper arguments');
    })


})