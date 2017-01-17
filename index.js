$(document).ready(function() {

    var Chrono = function(currentTime) {
        this.time = currentTime;
        this.start = function() {
            start();
        }

        this.pause = function() {
            pause();
        }
        this.stop = function() {
            stop();
        }
    }

    var chrono25 = new Chrono(1500);
    var chrono5 = new Chrono(300);
    var chrono15 = new Chrono(900);
    var count = 0;
    var compteur;

    $("#start").click(function() {
        count += 1;
        compteur = setInterval(start, 1000);
        if (count == 1 || count == 3 || count == 5 || count == 7) {
            start();
        } else if (count == 2 || count == 4 || count == 6) {
            start();
        } else if (count == 8) {
            start();
        }
    });

    $("#pause").click(function() {
        pause();
    });

    $("#stop").click(function() {
        stop();
    });

    $("#reset").click(function() {
        reset();
    });

    function start() {
        if (count == 1 || count == 3 || count == 5 || count == 7) {
            chrono25.time -= 1;
            var minute = Math.floor(chrono25.time / 60);
            var seconde = chrono25.time - minute * 60;
        } else if (count == 2 || count == 4 || count == 6) {
            chrono5.time -= 1;
            var minute = Math.floor(chrono5.time / 60);
            var seconde = chrono5.time - minute * 60;
        } else if (count == 8) {
            chrono15.time -= 1;
            var minute = Math.floor(chrono15.time / 60);
            var seconde = chrono15.time - minute * 60;
        }

        if (minute < 10) {
            minute = "0" + minute;
        } else {
            minute = minute;
        }
        if (seconde < 10) {
            seconde = "0" + seconde;
        } else {
            seconde = seconde;
        }
        $(".timer").html(minute + ":" + seconde);
    }

    function pause() {
        clearInterval(compteur);
    }

    function stop() {
        clearInterval(compteur);
        if (count == 1 || count == 3 || count == 5 || count == 7) {
            chrono25.time = 1501;
        } else if (count == 2 || count == 4 || count == 6) {
            chrono5.time = 301;
        } else if (count == 8) {
            chrono15.time = 901;
        }
    }

    function reset() {
        if (count == 1 || count == 3 || count == 5 || count == 7) {
            chrono25.time = 1501;
            $(".timer").html("25:00");
        } else if (count == 2 || count == 4 || count == 6) {
            chrono5.time = 301;
            $(".timer").html("05:00");
        } else if (count == 8) {
            chrono15.time = 901;
            $(".timer").html("15:00");
        }
    }

});