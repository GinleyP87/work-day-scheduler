import moment from 'moment';


$(document).ready(function () {
    
    $("#currentDay").text(moment().format("MMMM DD, YYYY - hh:mm:ss a")); 
    
    $(".saveBtn").on("click", function () {
        
        console.log(this);
        var input = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        
        localStorage.setItem(time, input);
    })
    
    $("#hour09 .description").val(localStorage.getItem("hour09"));

    $("#hour10 .description").val(localStorage.getItem("hour10"));
    
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    
    $("#hour01 .description").val(localStorage.getItem("hour01"));
    
    $("#hour02 .description").val(localStorage.getItem("hour02"));
    
    $("#hour03 .description").val(localStorage.getItem("hour03"));
    
    $("#hour04 .description").val(localStorage.getItem("hour04"));
    
    $("#hour05 .description").val(localStorage.getItem("hour05"));

    function hourTracker() {
        var currentHour = moment().hour();

        
        $(".time-block").each(function () {
            var hourRow = parseInt($(this).attr("id").split("hour")[1]);
            console.log( hourRow, currentHour)

            if (hourRow < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            
            else if (hourRow === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }

            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourTracker(); 
})

moment().format();