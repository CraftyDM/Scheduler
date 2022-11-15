const textArea = document.getElementsByClassName('textarea')
var today = $("#current");

setInterval(function () {
    today.text(moment().format("MMM Do YYYY - hh:mm:ss a"));
}, 1000);



function getTime() {

    for (var i = 9; i < 18; i++) {
        if (localStorage.getItem("text" + i)) {
            $("#text" + i).val(localStorage.getItem("text" + i));
        }
    }

}


$("button").on("click", function () {
    var textArea = $(this).siblings("textArea");
    var id = textArea.attr("id");
    var value = textArea.val();

    localStorage.setItem(id, value);


})

getTime();