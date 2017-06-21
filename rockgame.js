function userChoice(){
	var userInput= prompt("write the user input")
	userInput=userInput.toLowercase();
	if (userInput==="rock","paper","scissors"){
		console.log(userInput);
}
    else{
    	console.log("input not correct");
    }

}

function computerChoice(){
	var comChoice= Math.random()*2;
	if(comChoice===0){
		console.log("rock");
	}
	else if(comChoice===1){
		console.log("paper");
	}
	else{
		console.log("scissors");
	}

}    
function determineWinner(computer,user){
	  if(user====computer)
        	{console.log("game is a tie");
    }
	
		if(user===paper){
			if(computer===rock){
				console.log("user wins");

		}
		else{console.log("computer wins");
	}
			}

		if(user==scissors){
			if(computer===rock){
				console.log("computer wins");

		}
		else{console.log("computer wins");
	}	
}
      
		}
	
	function playGame(x,y){
		x= computer;

		y=user;
	}
