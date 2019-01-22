const rolls = (...arg)=>{
	//console.log(arg);
	//console.log(strike(arg,0));
	return [...arg];
};
const spare = (spare_array,spare_index)=>{
	if((spare_array.length-spare_index)<3)
	{
		return new Error('less number of arguments');
	}
	if(spare_array[spare_index]+spare_array[spare_index+1]<10)
	{
		return new Error('Not a spare');
	}
	return 10+spare_array[spare_index+2];
};

const strike = (strike_array,strike_index)=>{
	if((strike_array.length-strike_index)<3)
	{
		return new Error('less number of arguments');
	}
	if(strike_array[strike_index]<10)
	{
		return new Error('Not a strike');
	}
	return 10+strike_array[strike_index+1]+strike_array[strike_index+2];
};

const openFrame = (open_array,open_index)=>{
	if((open_array.length-open_index)<2)
	{
		//console.log(open_array);
		console.log(open_array.length,open_index);
		return new Error('less number of arguments');
	}
	let score = open_array[open_index]+open_array[open_index+1];
	if(score>=10)
	{
		return new Error('Not an open frame');
	}
	return score;
};
console.log(openFrame([5,4,0,6],2));
// const score = (pins_array)=>{

// };
//rolls(8,2,6);


module.exports = {rolls,spare,strike,openFrame};