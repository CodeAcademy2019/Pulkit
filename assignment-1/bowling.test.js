const bowlingFunctions = require('./bowling.js');
describe('testing rolls function',()=>{
	it('should return array',()=>{
		expect(bowlingFunctions.rolls(9,3,0,6)).toEqual([9,3,0,6]);
	});
	it('should return empty array',()=>{
		expect(bowlingFunctions.rolls()).toEqual([]);
	});
});