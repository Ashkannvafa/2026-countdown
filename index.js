var countDownDate = new Date("Jan 1, 2026 00:00:00").getTime();


var x = setInterval(function() {


  var now = new Date().getTime();

  
  var distance = countDownDate - now;


  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.querySelector('.first p').innerHTML = days;
  document.querySelector('.second p').innerHTML = hours;
  document.querySelector('.third p').innerHTML = minutes;
  document.querySelector('.fourth p').innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);