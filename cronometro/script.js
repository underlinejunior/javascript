window.onload = function () {
    var dec = 00;
    var sec = 00;
    var min = 00;
    var hour = 00;
    var appendDec = document.getElementById('dec');
    var appendSec = document.getElementById('sec');
    var appendMin = document.getElementById('min');
    var appendHour = document.getElementById('hour');
    var buttonStart = document.getElementById('start');
    var buttonStop = document.getElementById('pause');
    var buttonReset = document.getElementById('reset');
    var Interval;

    buttonStart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function () {
        clearInterval(Interval);
    }

    buttonReset.onclick = function () {
        clearInterval(Interval);
        dec = "00";
        sec = "00";
        min = "00";
        hour = "00";
        appendDec.innerHTML = dec;
        appendSec.innerHTML = sec;
        appendMin.innerHTML = min;
        appendHour.innerHTML = hour;
    }

    function startTimer() {
        dec++;
        if (dec <= 9) {
            appendDec.innerHTML = "0" + dec;
        }
        if (dec > 9) {
            appendDec.innerHTML = dec;
        }
        if (dec >= 99) {
            console.log("seconds");
            sec++;
            appendSec.innerHTML = "0" + sec;
            dec = 0;
            appendSec.innerHTML = "0" + 0;
        }
        if (sec <= 9) {
            appendSec.innerHTML = "0" + sec;
        }
        if (sec > 9) {
            appendSec.innerHTML = sec;
        }
        if (sec > 59) {
            console.log("minutes");
            min++;
            appendMin.innerHTML = "0" + min;
            sec = 0;
            appendSec.innerHTML = "0" + 0;
        }
        if (min > 9) {
            appendMin.innerHTML = min;
        }
        if (min > 59) {
            console.log("hours");
            hour++;
            appendHour.innerHTML = "00" + hour;
            min = 0;
            appendMin.innerHTML = "0" + 0;
        }
        if (hour > 9) {
            appendHour.innerHTML = hour;
        }
    }
}