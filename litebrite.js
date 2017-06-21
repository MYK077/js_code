function main() {

	var color ='';

$('.select-color').on('click',function(){

	var select_color =$(this).attr('class');

	

	switch(select_color){
		case 'select-color cyan not-selected':
		color = 'cyan';
		break;

		case 'select-color yellow not-selected ':
		color='yellow';
		break;

		case 'select-color magenta not-selected':
		color='magenta';
		break;


	}
	$(this).removeClass('not-selected'); 
	$(this).siblings().addClass('not-selected');

});

$('.box').on('click',function(){

	$(this).toggle('cyan');
	$(this).toggle('yellow');
	$(this).toggle('magenta');

});

  $('.toggle-blink').on('click',function(){

	if(color){
		$(this).toggleClass('opacity');
       setInterval(function() {
      $('.box.cyan, .box.yellow, .box.magenta').toggleClass('blink');
    }, 350);
  }
    

	

	
});

	
}
$(document).ready(main);