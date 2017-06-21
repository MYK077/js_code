function getSleepHours(day){
	
	var hours=prompt('enter the hours of sleep '+day+' ?');
	
	return Number(hours);

}

function getActualSleepHours(){
	return getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')
	+getSleepHours('saturday')+getSleepHours('sunday');
}

function getIdealSleepHours(){
	var idealHours=prompt('how many hours should one sleep in a day?');

	return Number(idealHours)*7;
}

function calculateDebt(){
	x= getActualSleepHours();
	y= getIdealSleepHours();

	if(x>y){
		var debt=x-y;
		console.log('you slept '+debt+' extra hours');
	}
	else if(y>x){
		var debt=y-x;
		console.log('you need '+debt+' hours more sleep');
	}
	else{
		console.log('perfect sleep hours');
	}
}

calculateDebt();