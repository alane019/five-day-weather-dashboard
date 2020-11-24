/*
 *	
 *******************************************************/

/* HTML document is loaded. DOM is ready. 
-----------------------------------------*/
$(document).ready(function(){
/* [alternate MOBILE nav MENU ] AND [NOTECARD DISMISS] ------------------------------------------- */
	/* Alternate mobile menu */
	$('.mobile-menu-icon').click(function(){
		$('.currentversion-left-nav').slideToggle();				
	});
/* Mobile menu */
	/* Close/dismiss notecard content holders when x is clicked in corner */
	$('.currentversion-content-widget .fa-times').click(function(){
		$(this).parent().slideUp(function(){
			$(this).hide();
		});
	});
/* MOBILE MENU AND WIDGET TO CLOSE --------------------------------------------- */








});