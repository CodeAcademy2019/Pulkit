const promises = require('./promiseHandlingError-10.js');
let i = 1;
describe('each promise should resolve to correct value',()=>{
    it('should resolves to i+1: 2 here',()=>{
        i++;
        return expect(promises.promise1()).resolves.toEqual(2);
    })
    it('should resolves to 3',()=>{
        i++;
        return expect(promises.promise2()).resolves.toEqual(3);
    })
    it('should resolves to 4',()=>{
        i++;
        return expect(promises.promise3()).resolves.toEqual(4);
    })
    it('should resolves to 5',()=>{
        i++;
        return expect(promises.promise4()).resolves.toEqual(5);
    })
    it('should resolves to 6',()=>{
        i++;
        return expect(promises.promise5()).resolves.toEqual(6);
    })
    it('should resolves to error with "OH NOES" message',()=>{
        i++;
        return expect(promises.promise6()).rejects.toEqual(new Error('OH NOES'));
    })
    it('should resolve to error with "OH NOES" message',()=>{
        i++;
        return expect(promises.promise7()).rejects.toEqual(new Error('OH NOES'));
    })

    
})

//needs modification use function only