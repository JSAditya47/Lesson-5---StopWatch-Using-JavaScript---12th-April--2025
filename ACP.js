window.onload = function () {
  var seconds = 0;

  var milliseconds = 0;

  var minutes = 0;

  var appendmilliseconds = document.getElementById("milliseconds");

  var appendSeconds = document.getElementById("seconds");

  var appendMinutes = document.getElementById("minutes");

  var buttonStart = document.getElementById("button-start");

  var buttonStop = document.getElementById("button-stop");

  var buttonReset = document.getElementById("button-reset");

  var Interval;

  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  buttonStop.onclick = function () {
    clearInterval(Interval);
  };

  buttonReset.onclick = function () {
    clearInterval(Interval);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    appendmilliseconds.innerHTML = milliseconds;
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
  };

  function startTimer() {
    milliseconds++;

    if (milliseconds <= 9) {
      appendmilliseconds.innerHTML = "0" + milliseconds;
    }

    if (milliseconds > 9) {
      appendmilliseconds.innerHTML = milliseconds;
    }

    if (milliseconds > 99) {
      seconds++;
      milliseconds = 0;
      appendmilliseconds.innerHTML = "00";
    }

    if (seconds <= 9) {
      appendSeconds.innerHTML = "0" + seconds;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }

    if (seconds > 59) {
      minutes++;
      seconds = 0;
      appendSeconds.innerHTML = "00";
    }

    if (minutes <= 9) {
      appendMinutes.innerHTML = "0" + minutes;
    }

    if (minutes > 9) {
      appendMinutes.innerHTML = minutes;
    }
  }
};
