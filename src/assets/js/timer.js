window.onload = function(){

    var minutes = "00";
    var secondes = "00";

    var getSecondes = document.getElementById("secondes");
    var getMinutes = document.getElementById("minutes");
    var buttonStart = this.document.getElementById("start");
    var buttonStop = this.document.getElementById("stop");
    var buttonReset = this.document.getElementById("reset");

    var Interval;

    function startTimer(){
        secondes++;
        if(secondes <= 9){
            getSecondes.innerHTML = "0" + secondes;
        }
        if(secondes > 9){
            getSecondes.innerHTML = secondes;
        }
        if(secondes > 59){
            minutes++;  
            getMinutes.innerHTML = "0" + minutes;
            secondes = 0;
            getSecondes.innerHTML = "0" + secondes;
        }
        if(minutes > 9){
            getMinutes.innerHTML = minutes;
        }
    }
    buttonStart.onclick = function(){
        clearInterval(Interval);
        Interval = setInterval(startTimer, 1000);
    }

    buttonStop.onclick = function(){
        clearInterval(Interval);
    }

    buttonReset.onclick = function(){
        clearInterval(Interval);
        secondes = "00";
        minutes = "00";
        getSecondes.innerHTML = secondes;
        getMinutes.innerHTML = minutes;
    }     
}