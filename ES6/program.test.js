const sayHello = require('./program.js');
test('return HELLO ES6',()=>{
    expect(sayHello()).toEqual('HELLO ES6');
})
test('do not returns any other string except HELLO ES6',()=>{
    expect(sayHello()).not.toEqual('Hi');
})