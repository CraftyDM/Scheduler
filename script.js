const textArea = document.getElementsByClassName('textarea')
var today = $("#current");
const now = moment().format("HH");

setInterval(function () {
    today.text(moment().format("MMM Do YYYY - hh:mm:ss a"));
}, 1000);

//loop: get hour block
function getSchedule() {
    for (var i = 9; i < 18; i++) {
        if (localStorage.getItem("text" + i)) {
            $("#text" + i).val(localStorage.getItem("text" + i));
        }
        //set to past, present, or future
        if(moment().isAfter(moment().hour(i))) {
            $(`#text${i}`).addClass("past")
        }else if(moment().isSame(moment().hour(i))) {
            $(`#text${i}`).addClass("present")
        }else{
            $(`#text${i}`).addClass("future")
        }
    }
}


//saves to local storage
$("button").on("click", function () {
    var textArea = $(this).siblings("textArea");
    var id = textArea.attr("id");
    var value = textArea.val();

    localStorage.setItem(id, value);
})

getSchedule();