const bowlingFunctions = require('./bowling.js');
describe('testing rolls function',()=>{
	it('should return array',()=>{
		expect(bowlingFunctions.rolls(9,3,0,6)).toEqual([9,3,0,6]);
	});
	it('should return empty array',()=>{
		expect(bowlingFunctions.rolls()).toEqual([]);
	});
});
describe('testing spare function',()=>{
	it('should return 10 ',()=>{
		expect(bowlingFunctions.spare([9,1,0,6],0)).toEqual(10);
	});
	it('should return error: second index is not a strike',()=>{
		expect(bowlingFunctions.spare([1,2,3],0)).toEqual(new Error('Not a spare'));
	});
	it('should return error: less number of arguements',()=>{
		expect(bowlingFunctions.spare([1,2],0)).toEqual(new Error('less number of arguments'));
	});
});
describe('testing strike function',()=>{
	it('should return 11 ',()=>{
		expect(bowlingFunctions.strike([10,1,0,6],0)).toEqual(11);
	});
	it('should return error: first index is not a strike',()=>{
		expect(bowlingFunctions.strike([1,2,3],0)).toEqual(new Error('Not a strike'));
	});
	it('should return error: first index is not a strike',()=>{
		expect(bowlingFunctions.strike([9,1,10],0)).toEqual(new Error('Not a strike'));
	});
	it('should return error: less number of arguements',()=>{
		expect(bowlingFunctions.strike([1,2],0)).toEqual(new Error('less number of arguments'));
	});
});

describe('testing openFrame function',()=>{
	it('should return 6 ',()=>{
		expect(bowlingFunctions.openFrame([5,4,0,6],2)).toEqual(6);
	});
	it('should return error: Not an open frame',()=>{
		expect(bowlingFunctions.openFrame([1,9,3],0)).toEqual(new Error('Not an open frame'));
	});
	it('should return error: Not an open frame',()=>{
		expect(bowlingFunctions.openFrame([5,5],0)).toEqual(new Error('Not an open frame'));
	});
	it('should return error: less number of arguements',()=>{
		expect(bowlingFunctions.openFrame([1],0)).toEqual(new Error('less number of arguments'));
	});
});