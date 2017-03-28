var isResizing = false,
        lastDownX = 0,
        parentContainer;
 
    $(function () {
        var container = $('.forResize-container'),
            handle = $('.drag1');
 
        handle.on('mousedown', function (e) {
		
            isResizing = true;
            lastDownX = e.clientX;
            parentContainer = $(this).parents('.forResize-container');
			
        });
 
        $(document).on('mousemove', function (e) {
            // we don't want to do anything if we aren't resizing.
            if (!isResizing)
                return;
 
            //var offsetRight = container.width() - (e.clientX - container.offset().left);
			var offsetRight = parentContainer.width() - (e.clientX - parentContainer.offset().left);

          
            parentContainer.children('.left_panel').css('right', offsetRight);
            parentContainer.children('.right_panel').css('width', offsetRight);
        }).on('mouseup', function (e) {
            // stop resizing
            isResizing = false;
        });
    });