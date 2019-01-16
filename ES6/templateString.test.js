const templateString = require('./templateString.js');
describe('templateString',()=>{

    it('should return normal greeting message with name',()=>{
        process.argv = ["jest","test","Pulkit Agarwal"];
        expect(templateString()).toEqual(`Hello, Pulkit Agarwal!
Your name lowercased is "pulkit agarwal".`);
    })

    it('should return greetings with null on place of name',()=>{
        process.argv = ["jest"];
        expect(templateString()).toEqual(`Hello, Undefined!
Your name lowercased is "undefined".`)
    })

    it('should return greetings with null on place of name',()=>{
        process.argv = ["jest","test",null];
        expect(templateString()).toEqual(`Hello, Null!
Your name lowercased is "null".`)
    })

    it('should return greetings with undefined on place of name',()=>{
        process.argv = ["jest","test",undefined,"Gupta"];
        expect(templateString()).toEqual(`Hello, Undefined!
Your name lowercased is "undefined".`)
    })

    it('should return greetings with number on place of name',()=>{
        process.argv = ["jest","test",1234];
        expect(templateString()).toEqual(`Hello, 1234!
Your name lowercased is "1234".`)
    })
})