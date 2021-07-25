//Global Variables
var today = moment();
var currentHour = today.hours();
var saveBtn = $('.saveBtn');



//Update Time Function
function update() {
    $('#currentDay').html(moment().format('D. MMMM YYYY hh:mm:ss'));
}


//Block Time Shading Function
function timeColoring() {
    $('.time-block').each(function(){
        var timeSection = $(this).attr("id")
        if (timeSection < currentHour) {
            $(this).addClass("past")
        } else if (timeSection == currentHour) {
            $(this).addClass("present")
        } else {
            $(this).removeClass("past present")
            $(this).addClass("future")
        }
    })
}


//Function Calls
setInterval(update, 1000);
timeColoring();



$(saveBtn).on("click", function() {
    var varKey = $(this).parent().attr("id")
    var varValue = $(this).siblings(".textValue").val()

    window.localStorage.setItem(varKey, varValue)
})



$("#8").children('.textValue').val(window.localStorage.getItem("8"));
$("#9").children('.textValue').val(window.localStorage.getItem("9"));
$("#10").children('.textValue').val(window.localStorage.getItem("10"));
$("#11").children('.textValue').val(window.localStorage.getItem("11"));
$("#12").children('.textValue').val(window.localStorage.getItem("12"));
$("#13").children('.textValue').val(window.localStorage.getItem("13"));
$("#14").children('.textValue').val(window.localStorage.getItem("14"));
$("#15").children('.textValue').val(window.localStorage.getItem("15"));
$("#16").children('.textValue').val(window.localStorage.getItem("16"));
$("#17").children('.textValue').val(window.localStorage.getItem("17"));