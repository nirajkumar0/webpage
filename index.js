function start(){
    var audio=new Audio("WINDDsgn_Wind (ID 0595)_BSB.mp3")
    audio.play()
}

var x = prompt("enter your name");
alert("welcome to dry forest "+ x);
alert( " touch the birds to hear their inner voice ")
/////search button
let query = document.querySelector(".query");
let searchbtn = document.querySelector(".searchbtn");

searchbtn.onclick = function () {
  let url = 'https://www.google.com/search?q=' + query.value;
  window.open(url);
}
////search ends
function clickedparrot(){
    var audio=new Audio("Small Parrot Interior Constant Calls - QuickSounds.com.mp3")
    audio.play()
}
function duck(){
    var audio=new Audio("Mallard Duck Call - QuickSounds.com.mp3")
    audio.play()
}
function small(){
    var audio=new Audio("Lark Sparrow Calling - QuickSounds.com.mp3")
    audio.play()
}
function many(){
    var audio=new Audio("Parrots South America 3 - QuickSounds.com.mp3")
    audio.play()
}



window.addEventListener("load",start);
document.querySelectorAll(".parrot")[0].addEventListener("mouseover",clickedparrot);
document.querySelectorAll("button")[1].addEventListener("mouseover",duck);
document.querySelectorAll("button")[2].addEventListener("mouseover",small);
document.querySelectorAll("button")[3].addEventListener("mouseover",many);