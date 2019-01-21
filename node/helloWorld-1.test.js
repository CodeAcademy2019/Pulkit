const greet = require('./helloWorld-1.js');
describe('Says Hello',()=>{
    it('should print HELLO WORLD',()=>{
        expect(greet()).toEqual('HELLO WORLD');
    })
    it('should not print random string',()=>{
        expect(greet()).not.toEqual('hello world');
    })
})