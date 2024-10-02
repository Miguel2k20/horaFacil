function calc() {
    textArea = document.getElementById("hours")
    resultHtml = document.getElementById("result")

    var value = textArea.value.trim(); 

    var times = value.split("\n");

    var totalSeconds = 0;

    times.forEach(function(time) {
        var parts = time.trim().split(":");
        var hours = parseInt(parts[0], 10);
        var minutes = parseInt(parts[1], 10);
        var seconds = parseInt(parts[2], 10);

        totalSeconds += (hours * 3600) + (minutes * 60) + seconds;
    });

    var totalHours = Math.floor(totalSeconds / 3600);
    var totalMinutes = Math.floor((totalSeconds % 3600) / 60);
    var totalRemainingSeconds = totalSeconds % 60;

    var totalTime = `${totalHours.toString().padStart(2, '0')}:${totalMinutes.toString().padStart(2, '0')}:${totalRemainingSeconds.toString().padStart(2, '0')}`;

    resultHtml.innerText = "Você está com: " + totalTime;
}