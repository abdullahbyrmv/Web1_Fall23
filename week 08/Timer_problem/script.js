$(document).ready(function () {
    let timerInterval;
    let hours, minutes, seconds;
    let totalSeconds;

    function updateDisplay() {
        let displayTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        $('#display').text(displayTime);
    }

    function startTimer() {
        if (!timerInterval) {
            totalSeconds = hours * 3600 + minutes * 60 + seconds;
            if (totalSeconds > 0) {
                timerInterval = setInterval(updateTimer, 1000);
            }
        }
    }

    function updateTimer() {
        if (totalSeconds > 0) {
            totalSeconds--;
            hours = Math.floor(totalSeconds / 3600);
            minutes = Math.floor((totalSeconds % 3600) / 60);
            seconds = totalSeconds % 60;
            updateDisplay();
        } else {
            stopTimer();
        }
    }

    function stopTimer() {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    function resetTimer() {
        stopTimer();
        hours = minutes = seconds = 0;
        updateDisplay();
    }

    $('#start').click(startTimer);
    $('#stop').click(stopTimer);
    $('#reset').click(resetTimer);

    // Initialize timer
    resetTimer();

    $('#hours, #minutes, #seconds').on('input', function () {
        hours = parseInt($('#hours').val()) || 0;
        minutes = parseInt($('#minutes').val()) || 0;
        seconds = parseInt($('#seconds').val()) || 0;
        updateDisplay();
    });
});
