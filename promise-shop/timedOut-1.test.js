
const timeOut = require('./timedOut-1.js');
jest.useFakeTimers();
describe('timeOut',()=>{
    it('testing if the function has been called just once',()=>{
        timeOut();
        expect(setTimeout).toHaveBeenCalledTimes(1);
    })
    
    it('testing if the function has been called with appropriate arguments',()=>{
        timeOut();
        expect(setTimeout).toHaveBeenCalledWith(expect.any(Function),300);
    })
    it('testing if the last function was setTimeout and called with proper arguments',()=>{
        timeOut();
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function),300);
    })
   
})