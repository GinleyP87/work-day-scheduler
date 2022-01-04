
//current day and time
var currentDay = moment().format("dddd LL");
$("#currentDay").append(currentDay);

var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);

//save button
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })
    
    $("#hour8 .description").val(localStorage.getItem("hour8"));

    $("#hour9 .description").val(localStorage.getItem("hour9"));
    
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    
    $("#hour17 .description").val(localStorage.getItem("hour17"));

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
