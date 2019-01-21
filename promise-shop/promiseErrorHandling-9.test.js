const promise = require('./promiseErrorHandling-9.js');
describe('testing for promise to resolve on correct JSON and reject on incorrect',()=>{
    it('testing if promise resolves with the JSON object on correct JSON input',()=>{
        return expect(promise('{ "name":"John", "age":30, "car":null }')).resolves.toEqual({ "name":"John", "age":30, "car":null });
    })

    it('testing if promise do not resolves with the random object on correct JSON input',()=>{
        return expect(promise('{ "name":"John", "age":30, "car":null }')).resolves.not.toEqual({ "name":"John", "age":300, "car":null });
    })

    it('testing if promise rejects with error on incorrect JSON input',()=>{
        return expect(promise('{ "name":"John", "age":30, "car":abc}')).rejects.toEqual(new Error('Unable to parse json'));
    })
})

//need modification pass proper error mssg