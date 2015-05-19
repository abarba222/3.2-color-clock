var $hours;
var $minutes;
var $seconds;

var currentTime = new Date();

function clock(){
currentTime = new Date();
}

var currentHour = currentTime.getHours();
console.log(currentHour);
$hours = document.querySelector('.hours');
$hours.textContent = currentHour + ':';

var currentMinute = currentTime.getMinutes();
console.log(currentMinute);
$minutes = document.querySelector('.minutes');
$minutes.textContent = currentMinute + ':';

var currentSecond = currentTime.getSeconds();
console.log(currentSecond);
$seconds = document.querySelector('.seconds');
$seconds.textContent = currentSecond;


function timeUpdate(event){

var intervalID = window.setInterval(clock, 1000);
}
