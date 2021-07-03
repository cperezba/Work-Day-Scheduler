var today = moment();
var currentHour = today.hours();

function update() {
    $('#currentDay').html(moment().format('D. MMMM YYYY hh:mm:ss'));
}

setInterval(update, 1000);



var saveBtn = $('#saveBtn');


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

timeColoring();