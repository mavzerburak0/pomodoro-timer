
function pomodoroTimer(timeleft) {
    var forest = new Audio("/sounds/forest.wav")
    var pomodoroDiv = document.getElementById('pomodoro');
    var timer = setInterval(function() {
        if (timeleft <= 0) {
            clearInterval(pomodoroTimer);
            pomodoroDiv.innerHTML = "<h3>Take a break. You deserve it. Refresh the page to start another session.</h3>";
            forest.pause();
        } else {
            var timeLeftMinutes = Math.floor(timeleft / 60);
            var remainingSeconds = timeleft % 60;    
            pomodoroDiv.innerHTML = "<h2>" + timeLeftMinutes + " minutes " + remainingSeconds + " seconds remaining.</h2>";
            forest.play();
        } 
        timeleft -= 1;
        }, 1000);
}
