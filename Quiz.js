var submitbutton = document.getElementById('submitbutton');
var correctanswer = document.getElementsByClassName('correctanswer');

var myVar = setInterval(function() {
  myTimer()
}, 1000);
var d = 0;

function myTimer() {
  document.getElementById("timer").innerHTML = d++;
}
submitbutton.addEventListener("click", check);
function check() {
    for	(var i = 0; i < correctanswer.length; i++) {
    
    correctanswer[i].style.display = "block";
clearInterval(myVar);
}}