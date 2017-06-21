var myAge = 10;

function firstTwoDogYear() {
	var twoYear= 2*10.5;
	return twoYear;
} 

function remainingDogAge() {

	var remain= myAge - 2;
	remain = remain * 4;
	return remain;

}

function totalDogAge(){
	var ttDogAge= remainingDogAge() + firstTwoDogYear();
	return ttDogAge;
}

console.log("my age in dog year is: " +totalDogAge());
