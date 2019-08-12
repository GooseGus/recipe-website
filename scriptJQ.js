
    $(document).ready(function(){
		
	
		$(window).scroll(function(){
			var este= $(document).height();
			var wScroll=$(window).scrollTop();
			var heightotal= $(window).outerHeight();
			
        
        
			var stickyTOP = $('.sticky-top');
			var sticky = stickyTOP.offset().top;
        
		//navbar - stick
		
			if(wScroll>=sticky  && !stickyTOP.is(".navbar-fixed-top")){
			
				$('.sticky-top').addClass('navbar-fixed-top');
			//	$('#ricee').css('margin-top',stickyy+"px");
  
			}else if(wScroll<heightotal){
				$('.sticky-top').removeClass('navbar-fixed-top');
			//	$('#ricee').css('margin-top',"0px");
           
			}
		//navbar - scrool bar
			if(stickyTOP.is(".navbar-fixed-top")){
				var actual=((wScroll-heightotal)*100)/(este-(2*heightotal));
				$('.progress-bar').css('width',actual+"%");
			}

			$('.parallax-Wand').each(function(){
				var BWandt = $(this).offset().top;
				
				if (wScroll > (BWandt-heightotal) && (BWandt > wScroll) && (wScroll+heightotal > BWandt)){
					paraBG=wScroll-(BWandt-heightotal);
					$(this).css('background-position','center '+(-paraBG*0.1)+'px')
				} else {
               // console.log( "im out" );
				}  
			});


			$('.parallax-BG').each(function(){
				var BGot = $(this).offset().top;
				
				if (wScroll > (BGot-heightotal) && (BGot > wScroll) && (wScroll+heightotal > BGot)){
					paraBG=wScroll-(BGot-heightotal);
					$(this).css('background-position','center '+(-paraBG*0.15)+'px')
				} else {
               // console.log( "im out" );
				}  
			});

			$('.parallax-IM').each(function(){
				var IMot = $(this).offset().top;

				if (wScroll > (IMot-(2*heightotal)) && (IMot > wScroll) && ( wScroll+(2*heightotal) > IMot)){
					paraIM=wScroll-(IMot-heightotal)
					$(this).css('top',(-paraIM*0.5)+'px')
				} else {
					console.log( "im out2" );
				}  
			});
		});
	});


