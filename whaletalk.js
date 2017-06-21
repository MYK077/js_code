var input= "Turpentine and turtles";

var vowels=["a","e","i","o","u"];

resultArray=[];


	for (var i=0; i<input.length; i++){

		if(input[i]==="e"){
			resultArray.push(input[i]);
		}
		else if(input[i]==="u"){
			resultArray.push(input[i]);
		}

		for(var j=0; j<vowels.length;j++){

			if(input[i]===vowels[j]){
				resultArray.push(input[i]);
			}
			
		}
		
	}

	console.log(resultArray.join('').toUpperCase());
