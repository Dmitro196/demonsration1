



	var animationdelay=10,minspeed=10,maxspeed=12000;
	var count=0;
	$('.resultbutton').html('<p>'+count+'</p>');
		function getRandomInt(min, max)
		{
			return Math.floor(Math.random() * (max - min)) + min;
		}

	function createelements() 
	{	$('.bulb').remove();
	
        for(i=0;i<20;i++)
		{
			$('.gameBox').append('<div class="bulb" data-elementnumber="'+i+'"></div>');
			$('.gameBox').find('.bulb:eq('+i+')').css('top',i*20+'px');
		}

	}
	createelements();       
	

	var animation=false;
	function Moove()
	{
		for(i=0;i<$('.bulb').length;i++)
		{
			
			$('.bulb:eq('+i+')').animate({left: $('.gameBox').width()},getRandomInt(minspeed,maxspeed));
		}
		for(i=0;i<$('.bulb').length;i++)
		{
				
		$('.bulb:eq('+i+')').animate({left: 0-($('.gameBox').width())},getRandomInt(minspeed,maxspeed));
				
		}
	};
	
	function Startanimation()
	{
		
		if(animation==false)
		{
			count=0;
		
			setInterval(Moove,10);
			
		}

	}
	$('.startgamebutton').click(function()
	{
		value=0;
		count=0;
$('.resultbutton').html('<p>'+count+'</p>');
		createelements();     
		$(".bulb").hover(function(event){$(event.target).css('background-color','rgba(255,0,0,0.3)');});

	$(".bulb").mouseout(function(event){$(event.target).css('background-color','rgba(255,0,0,0.0)');});
	Startanimation();
	
	$(".bulb").click(function(event)
	{
		
		
		$(event.target).remove(); 

		count++;
		$('.resultbutton').html('<p>'+count+'//20</p>');
	});
	
	
	});

	
