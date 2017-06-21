
// debug
function c(msg){
	console.log(msg);
}


function hasUpperCase(charc){

    return charc==charc.toUpperCase()?true:false;
}

function hasLowerCase(charc){
    
    return charc==charc.toLowerCase()?true:false;
}


function is_special(charc){
   var special_chars = ['@','#'];
   for (var i = special_chars.length - 1; i >= 0; i--) {
   	   if(special_chars[i]==charc)
   	   	 return true;
   }
   return false;
}

function isPasswordValid(input){
    
    // 8=>len 1U 1L 1S 
     var len = input.length;
     var count_uc = 0;
     var count_lc = 0;
     var special_char_count = 0;

     for (var i = input.length - 1; i >= 0; i--) {
     	if(hasUpperCase(input[i]))
     		count_uc = count_uc+ 1;
       
        if(hasLowerCase(input[i]) && !is_special(input[i]))
          count_lc = count_lc+1;

        if(is_special(input[i]))
          special_char_count = special_char_count+1;

     }
     c(count_uc);
     c(count_lc);
     c(special_char_count);
     c(len);
     if(count_lc==0) c("Lower char is missing");
     if(count_uc==0) c("Upper char is missing");
     if(special_char_count==0) c("special_chars char is missing");
     
	 return (len==8 && count_uc>=1 && count_lc>=1 && special_char_count>=1);
}

var cheeck_validity = isPasswordValid("Ma@sasas")
if(cheeck_validity) c("Hurrah");
else c("Fucked up!!");



