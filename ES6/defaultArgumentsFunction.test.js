const richString = require('./defaultArgumentsFunction.js');
describe('richString',()=>{
    it('should return Hello!!!',()=>{
        expect(richString("Hello",3)).toEqual("Hello!!!");
    })

    it('should return Hi!!',()=>{
        expect(richString("Hi",2)).toEqual("Hi!!");
    })

    it('should return Hi!!!!',()=>{
        expect(richString("Hi",4)).toEqual("Hi!!!!");
    })

    it('should return Hi!!!!',()=>{
        expect(richString("Hi",null)).toEqual("Hi");
    })
    

})