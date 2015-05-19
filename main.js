 var $hours;
 var $minutes;
 var $seconds;

function displayCurrentTime() {

  var currentTime = new Date();

  var currentHour = currentTime.getHours();
  console.log(currentHour);
  $hours = document.querySelector('.hours');
  $hours.textContent = currentHour + ":";

  var currentMinute = currentTime.getMinutes();
  console.log(currentMinute);
  $minutes = document.querySelector('.minutes');
  $minutes.textContent = currentMinute + ":";

  var currentSecond = currentTime.getSeconds();
  console.log(currentSecond);
  $seconds = document.querySelector('.seconds');
  $seconds.textContent = currentSecond;

}

displayCurrentTime();

var intervalID = window.setInterval(displayCurrentTime, 1000);
