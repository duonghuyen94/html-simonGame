/*step 0: press the key to trigger "random button" function (which include "sound" and "animation"), then must stop 
(buy setting start=true after it's done)
step 1: click to trigger a few other functions
+ sound function
+ animation function
+ check function (
if click button=random button (at corresponding position)
      (when length=nhau => trigger "random button")
else => body turn red, sound: wrong, set var starts=false; other var to initial values
)

There are 2 main function (=2 action: key press or click); the rest are all local functions waiting to be called
- keypress will work IF..

- "If" that triggers "click": no if

*/
var colors=["red","green","yellow","blue"];
var randomSeries=[];
var clickSeries=[];
var start=1;
var level=0;


$(document).keydown(function(){
  if (start===1) {
  start=0;
  randomButton();}
});

$(".btn").click(function() {
var clickButton=$(this); 
var clickColor=clickButton.attr("id");
clickSeries.push(clickColor); //add to array of clicked button

sound(clickColor);  //playsound
clickButton.addClass("pressed");
setTimeout(function() {
  clickButton.removeClass("pressed");
}, 100);  //add animation

if (clickColor===randomSeries[clickSeries.length-1]){
  if (randomSeries.length===clickSeries.length)
  {setTimeout(function () {
    randomButton(); //another local function
  }, 1000);}}

else {
sound("wrong"); //sound
$("body").addClass("game-over");
setTimeout(function() {
$("body").removeClass("game-over");
}, 100);//background color

$("h1").text("Game over, please press a key to restart");
randomSeries=[];//reset all values
start=1;
level=0;
}});



function randomButton() {
  level++;
$("h1").text("Level "+level);//change title
var randomColor=colors[Math.floor(Math.random()*4)];//pick random color
$("#"+randomColor).fadeIn(100).fadeOut(100).fadeIn(100);//add animation
sound(randomColor);//add sound
randomSeries.push(randomColor);//add to an array of random button
clickSeries=[];
}


function sound(n){
var audio=new Audio("./sounds/"+n+".mp3");
audio.play();
}


