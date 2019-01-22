/*Assumptions: input will not contain any value more than 10 or sum in a frame more than 10
*/ 
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
		console.log(open_array.length,open_index);
		return new Error('less number of arguments');
	}
	const score = open_array[open_index]+open_array[open_index+1];
	if(score>=10)
	{
		return new Error('Not an open frame');
	}
	return score;
};

const score = (pins_array)=>{
	console.log(pins_array);
	if(pins_array.length<20 || pins_array.length>21)
	{
		return new Error('Ambiguos frame set');
	}
	let tiltSum = 0;
	let totScore = 0;
	let tmpScore;
	let i = 0;
	const allowedFrame = 10;
	while(i<allowedFrame*2)
	{
		if(i%2==0)
		{
			tiltSum = pins_array[i];
			if(pins_array[i]==10)
			{
				tmpScore = 	strike(pins_array,i);
				if(isNaN(tmpScore))
				{
					return tmpScore;
				}
				totScore+=tmpScore;
				i+=2;
			}else{
				i+=1;
			}
		}else{
			tiltSum+=pins_array[i];
			if(tiltSum==10)
			{
				tmpScore = spare(pins_array,i-1);
				if(isNaN(tmpScore))
				{
					return tmpScore;
				}
				totScore+=tmpScore;
			}else{
				tmpScore = openFrame(pins_array,i-1);
				if(isNaN(tmpScore))
				{
					return tmpScore;
				}
				totScore+=tmpScore;
			}
			i++;
		}

	}
	return totScore;

};

const rolls = (...arg)=>{
	return score(arg);
};


console.log(rolls(6,4,1,0,3,7,1,2,0,0,0,0,0,0,0,0,0,0,10,10,10));


module.exports = {rolls,spare,strike,openFrame,score};