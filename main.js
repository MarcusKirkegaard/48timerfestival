function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction2()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction2() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var SEKUNDER = Math.floor((t / 1000) % 60);
  var MINUTTER = Math.floor((t / 1000 / 60) % 60);
  var TIMER = Math.floor((t / (1000 * 60 * 60)) % 24);
  var DAGE = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'DAGE': DAGE,
    'TIMER': TIMER,
    'MINUTTER': MINUTTER,
    'SEKUNDER': SEKUNDER
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var DAGESpan = clock.querySelector('.DAGE');
  var TIMERSpan = clock.querySelector('.TIMER');
  var MINUTTERSpan = clock.querySelector('.MINUTTER');
  var SEKUNDERSpan = clock.querySelector('.SEKUNDER');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    DAGESpan.innerHTML = t.DAGE;
    TIMERSpan.innerHTML = ('0' + t.TIMER).slice(-2);
    MINUTTERSpan.innerHTML = ('0' + t.MINUTTER).slice(-2);
    SEKUNDERSpan.innerHTML = ('0' + t.SEKUNDER).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = 'May 15 2020 12:00:00 GMT+0000';
initializeClock('clockdiv', deadline);