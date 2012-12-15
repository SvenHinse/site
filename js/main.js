$(document).ready(function()
{
 var menuLeft = new menuAnimator()
  menuLeft.menuAnimation('#menu_main li a','#slide','.current_page_item')  ;

 var menuRight = new menuAnimator();
    menuRight.menuAnimation('#menu_bass_web li a', '#slide_right','.bass') ;
})