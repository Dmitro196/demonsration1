
	
	
	
	function sidebarmenuClass(sSelector)
	{
		var s=this;
		s.scene=$(sSelector);
		s.answer=s.scene.find('.answer');
		var isacordeon=false;
		s.listcontainer=s.scene.find('ul');
		s.list=s.scene.find('.sidebarmenu-item');
		s.arrow=s.scene.find('.arrow');
		
		s.acordeonanswer=s.scene.find('#answerAcordeon');

		var messages=
		[
			 '<p>One</p>'
			,'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur ipsum ac lacinia volutpat. Pellentesque dignissim lacinia fermentum. Phasellus consequat lacinia pharetra. Suspendisse potenti. Cras vestibulum pellentesque pretium. Maecenas enim nisi, vehicula quis porttitor eu, facilisis at tellus. Cras ac lacinia ipsum, eu sodales nisl.Aliquam ut dui mauris. Aliquam euismod tortor in venenatis ornare. Phasellus a eros in ante iaculis gravida. Nulla mollis consectetur metus, laoreet vestibulum ipsum aliquet ac. Aliquam porta eleifend lorem, non cursus urna venenatis id. Cras porta vehicula neque, et maximus augue scelerisque eu. Nulla et nulla aliquet, vestibulum elit sed, tristique nisl. Donec dictum orci sit amet mi vulputate rutrum. Morbi non tellus vulputate est molestie elementum. Ut lacinia fringilla felis, eu malesuada massa hendrerit vitae. Etiam commodo massa laoreet, suscipit est nec, tincidunt magna.Pellentesque ut nunc quam. Nullam sit amet ornare velit. Phasellus nec bibendum turpis, at dapibus velit. Pellentesque sapien massa, maximus nec tincidunt non, lobortis vitae urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla pretium tortor ante, id placerat diam posuere at. Nam feugiat odio et nulla consectetur gravida. Integer facilisis quis sapien sed gravida. Cras congue metus non ex eleifend, non volutpat ligula pulvinar. Nulla vulputate elementum nisi, tincidunt varius lacus eleifend vitae. Fusce eu purus purus. Donec hendrerit, nibh et ullamcorper dapibus, ligula lorem blandit nisi, eu eleifend lacus leo at mi. Donec venenatis tellus a convallis ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus ante odio, interdum a mauris at, lobortis accumsan orci. Etiam et justo et tortor mattis iaculis ullamcorper a urna.Integer faucibus justo nisl, at pulvinar lorem finibus et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur nec enim lacinia nisi rutrum consequat. Nam vel justo ipsum. Donec sodales vestibulum egestas. Phasellus ullamcorper ipsum lectus, sit amet pretium ante placerat a. Nullam tempor dui vel convallis imperdiet. Mauris sit amet elit tortor. Phasellus lobortis vel tellus at finibus. Suspendisse scelerisque porta nisl aliquet viverra. Nulla in metus nec turpis vulputate euismod non a felis. Cras mattis nibh vitae eleifend euismod. Sed vel magna eu libero cursus auctor. Mauris rhoncus quam vel sagittis porttitor. Phasellus sit amet mi nec velit egestas egestas id non lacus.Integer eleifend felis vitae nunc ultrices, vitae suscipit arcu venenatis. Nulla facilisi. Donec consectetur justo at volutpat vulputate. Morbi consectetur laoreet mi id tempus. Nullam vel nisl pharetra, luctus nisi sodales, ullamcorper elit. Fusce quis elementum leo. Duis vel orci ornare, ultricies elit vel, pulvinar mi. Sed cursus quam justo, at sollicitudin nunc eleifend vitae. Nam consequat vehicula nulla, eget imperdiet arcu fermentum non. Praesent placerat quam blandit arcu consectetur semper. Pellentesque varius tellus ac quam auctor ultrices in porttitor purus. In ac fermentum risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce hendrerit pharetra odio vitae fermentum. Aliquam interdum neque in elementum porttitor. In hac habitasse platea dictumst.</p>'
			,'<p>Three</p>'
			,'<p>Fourght</p>'
			,'<p>Five</p>'
			,'<p>Six</p>'
			,'<p>Seven</p>'
			,'<p>eight</p>'
		];
		s.answer.html(messages[0]);
		s.acordeonanswer.html(messages[0]);
		
		s.Startpage=function()
		{  
			if(isacordeon==true)
			{
				s.arrow.css('display','none');
				s.answer.css('display','none');
				s.listcontainer.css('width','100%');
				s.list.css('width','90%');
				s.list.css('margin-left','5%');
				s.list.css('margin-right','5%');
				s.acordeonanswer.css('display','block');
			}
			if(isacordeon==false)
			{
				s.arrow.css('display','block');
				s.arrow.css('margin-top',Number(s.list.css('margin-top').substr(0,s.list.css('margin-top').length-2))+'px');
				s.arrow.css('right',(s.answer.width()-20)+'px');
				s.answer.css('display','block');
				s.listcontainer.css('width','30%');
				s.list.css('width','90%');
				s.list.css('margin-left','0');
				s.list.css('margin-right','0');
				s.acordeonanswer.css('display','none');
			}
		 
		 
		}
		if($( window ).width()<1000)
		{
			isacordeon=true;
		}
		else
		{
			isacordeon=false;
		}
		s.Startpage();
		s.Choose=function()
		{
			s.answer.html(messages[Number($(this).attr('data-sidebar-number'))-1]);
			var arrowtopmargin=(s.list.height()+Number(s.list.css('margin-top').substr(0,s.list.css('margin-top').length-2))+Number(s.list.css('border-width').substr(0,s.list.css('border-width').length-2))*2)*Number($(this).attr('data-sidebar-number')-1);
		

			s.arrow.css('margin-top',Number(s.list.css('margin-top').substr(0,s.list.css('margin-top').length-2))+arrowtopmargin+'px');
		
			s.acordeonanswer.insertAfter(s.scene.find('.sidebarmenu-item:eq('+($(this).attr('data-sidebar-number')-1)+')'));
			s.acordeonanswer.html(messages[Number($(this).attr('data-sidebar-number')-1)]);
			
		}
		$( window ).resize(function()
		{
			if($( window ).width()<1000)
			{
				isacordeon=true;
				s.Startpage();
			}
			if($( window ).width()>=1000)
			{
				isacordeon=false;
				s.Startpage();
			}
		});
		s.list.click(s.Choose);
		}