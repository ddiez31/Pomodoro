$(document).ready(function() {

    var Chrono = function(currentTime) {
        this.time = currentTime;
        this.start = function() {
            start();
        };
        this.reset = function() {
            reset();
        };
    };

    var chrono25 = new Chrono(1501);
    var chrono5 = new Chrono(301);
    var chrono15 = new Chrono(901);
    var count = 0;
    var compteur;

    $("#start").click(function() {
        count += 1;
        compteur = setInterval(start, 1000);
        if (count % 2 != 0) {
            chrono25.start();
        } else if (count % 2 == 0 && count != 8 && count != 16) {
            chrono5.start();
        } else if (count == 8 || count == 16) {
            chrono15.start();
        };
    });

    $("#reset").click(function() {
        reset();
    });

    function start() {
        if (count % 2 != 0) {
            chrono25.time -= 1;
            var minute = Math.floor(chrono25.time / 60);
            var seconde = chrono25.time - minute * 60;
            todoList();
            $("#start").hide();
            $("#reset").hide();
            if (minute == 0 && seconde == 0) {
                clearInterval(compteur);
                $("#start").show();
                $("#reset").show();
                chrono25.time = 1501;
                alert("Prenez une pause!");
            }
        } else if (count % 2 == 0 && count != 8 && count != 16) {
            chrono5.time -= 1;
            var minute = Math.floor(chrono5.time / 60);
            var seconde = chrono5.time - minute * 60;
            $("#start").hide();
            $("#reset").hide();
            if (minute == 0 && seconde == 0) {
                clearInterval(compteur);
                $("#start").show();
                $("#reset").show();
                $("#todoInput").show();
                chrono5.time = 301;
                alert("Travaillez sur la tâche suivante");
            }
        } else if (count == 8 || count == 16) {
            chrono15.time -= 1;
            var minute = Math.floor(chrono15.time / 60);
            var seconde = chrono15.time - minute * 60;
            $("#start").hide();
            $("#reset").hide();
            if (minute == 0 && seconde == 0) {
                clearInterval(compteur);
                $("#start").show();
                $("#reset").show();
                $("#todoInput").show();
                chrono15.time = 901;
                alert("Repartez sur un nouveau cycle Pomodoro");
            }
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

    function reset() {
        count = 0;
        chrono25.time = 1501;
        $(".timer").html("25:00");
        $("#cbox").remove();
    }

    function todoList() {
        var item = $("#todoInput").val();
        if (item != "") {
            $("<span id='cbox'><input type='checkbox' id='cbox' name='test'>" + " " + " " + item + "</span><br>").appendTo(".todolistOutput");
            $("#todoInput").val("");
            $("#todoInput").hide();
        } else {
            $("#todoInput").hide();
        };
    };

    $("#btnClear").click(function clearList() {
        var checkboxes = $("[name=test]");
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                checkboxes[i].parentElement.remove();
            }
        }
    });

});