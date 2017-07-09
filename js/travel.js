/**
 * Created by shivani.tiwari on 09/07/17.
 */
/*$(document).ready(function () {*/
    $("#travel").on("change", function () {
        var val = $("#travel").val();
        $(".option").hide();
        if(val== "mumbai"){
            $("#option1").show();
        }
        else if(val== "delhi"){
            $("#option2").show();
        }
        else if(val== "bangalore"){
            $("#option3").show();
        }
        else if(val== "pune"){
            $("#option4").show();
        }
        else if(val== "bhanpura"){
            $("#option5").show();
        }
        else if(val== "chechat"){
            $("#option6").show();
        }
        else if(val== "ujjain"){
            $("#option7").show();
        }
    });
/*
})*/
