const thisWithArrowFunction = require('./this.js');
test('should return Ouch!',()=>{
    expect(thisWithArrowFunction()).toEqual('Ouch!');
})
test('should not return anythong except Ouch!',()=>{
    expect(thisWithArrowFunction()).not.toEqual('Ooch!');
})