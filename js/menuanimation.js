function menuAnimator(){

var myMenuItem;
var mySlider;
var timeoutID;

//default-Werte für x und width der defaultClass
var defaultX ;
var defaultWidth;

 //"Konstruktor"
this.menuAnimation = function (menuID, sliderDivID, defaultClass) {

    myMenuItem = menuID;
    mySlider = sliderDivID;
    //slider auf default setzen
    defaultX = $(defaultClass).position()
    defaultWidth = $(defaultClass).css("width")
    animateToDefault();

    //eventHandler
    $(myMenuItem).hover(handlerIn, handlerOut);
    $(myMenuItem).focus(handlerIn);
    $(myMenuItem).focusout(handlerOut);

}
 //bei hover: position aktuelle position des Links bestimmen und slider darunter platzieren
function handlerIn() {
    var aktPosition;
    var aktWidth;
    aktPosition = $(this).position()
    aktWidth = $(this).css("width");
    //handlerOut-actions abbrechen
  clearTimeout(timeoutID);
    //animieren!
     $(mySlider).stop();
    $(mySlider).animate({
        left:aktPosition.left,
        width:aktWidth
    }, 200);




}



//bei mouseout zurück zu current-page-item,
// aber mit Verzögerung

function handlerOut() {
    console.log("goToD")
   timeoutID = setTimeout(animateToDefault,
        300);

}
  //wird von handlerOut und bei init aufgerufen
function animateToDefault(){
    $(mySlider).animate({
    left:defaultX.left,
    width:defaultWidth
}, 200)}


}


