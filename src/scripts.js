$(document).ready(function () {

    setInterval(function () { $("#dialog").fadeIn(); }, 5000)


});

function Close() {
    $("#dialog").fadeOut();
    clearInterval(function () { $("#dialog").fadeIn(); })
}