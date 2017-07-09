/**
 * Created by shivani.tiwari on 09/07/17.
 */
var countDownDate = new Date("Dec 4, 2017 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    // Display the result in the element with id="demo"
    document.getElementsByClassName("day")[0].innerHTML = days + "days";

    document.getElementsByClassName("time")[0].innerHTML = hours + "hrs, " + minutes + "mins & " + seconds +
        "secs remaining...";

    // If the count down is finished, write some text
    if (days < 0 && days > -1) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Today";
    }
    else if (days < -1) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "";
    }
}, 1000);