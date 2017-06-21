//kelvin to celius(t in kelv -273.15)
//F = 9/5 (K - 273) + 32
var kelvinTemp=293;
var celcius=0;
var fahren= 0;



function kelvinToCelcius( ){
	 
	 celcius= kelvinTemp - 273.15;
	 return celcius;
}

function kelvinTofahren( ){
  
    fahren= (9/5)*(kelvinTemp- 273.15) +32;
	return fahren;
}

console.log("temperature converted to celcius: " + kelvinToCelcius());
console.log ("temperature converted to fahrenhite: " + kelvinTofahren());