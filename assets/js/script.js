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


$(saveBtn).on("click", function() {
    var varValue = $(this).siblings(".textValue").val()
    var varKey = $(this).parent().attr("id")

    window.localStorage.setItem(varKey, varValue)
})

$("#0 .textValue").val(window.localStorage.getItem("0"))
$("#1 .textValue").val(window.localStorage.getItem("1"))
$("#2 .textValue").val(window.localStorage.getItem("2"))
$("#3 .textValue").val(window.localStorage.getItem("3"))
$("#4 .textValue").val(window.localStorage.getItem("4"))
$("#5 .textValue").val(window.localStorage.getItem("5"))
$("#6 .textValue").val(window.localStorage.getItem("6"))
$("#7 .textValue").val(window.localStorage.getItem("7"))
$("#8 .textValue").val(window.localStorage.getItem("8"))


$("#1 .varValue").val(window.localStorage.getItem("0"))
$("#2 .varValue").val(window.localStorage.getItem("0"))
$("#3 .varValue").val(window.localStorage.getItem("0"))
$("#4 .varValue").val(window.localStorage.getItem("0"))
$("#5 .varValue").val(window.localStorage.getItem("0"))
$("#6 .varValue").val(window.localStorage.getItem("0"))
$("#7 .varValue").val(window.localStorage.getItem("0"))
$("#8 .varValue").val(window.localStorage.getItem("0"))