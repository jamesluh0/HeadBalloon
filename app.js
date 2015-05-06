$(document).ready(function(){

	var ifClick = 0;

	$('#head').click(function(){

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
		

	})



	
	
})