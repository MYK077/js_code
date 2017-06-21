var userQuestion= "will the world be a better place in future or mankind will destroy it based on numerology?";

console.log(userQuestion);

function randomNumber(){
	var random= Math.floor(Math.random()*7);
	return random;
}

rand_no = randomNumber()
console.log(rand_no);

switch(rand_no) {
	
	case 1:
	console.log('It is certain');
	break;
	
	case 2:
	console.log('It is decidedly so');
	break;

	case 3:
	console.log('Reply hazy try again');
	break;

	case 4:
	console.log('Dont count on it');
	break;

	case 5:
	console.log('My sources say no');
	break;

	case 6:
	console.log('Outlook not so good');
	break;

	case 7:
	console.log('Signs point to yes');
	break;

	default:
	console.log('invalid item');
	break;
}

