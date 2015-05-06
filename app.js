$(document).ready(function(){

	var music = document.getElementsByTagName('audio')[0];
	var crash= document.getElementsByTagName('audio')[1];
	var ifClick = 0;

	$('#head').click(function()
	{

		music.pause();
		$('#head').animate(
			{
				top: '-150%'
			});

		setTimeout(function()
			{ 

				$('#head2').animate(
			{
				top: '35%'
			});

				
			 }, 2000);

		setTimeout(function()
			{
				crash.play();
			}, 1000);

	})
			



	
	
})