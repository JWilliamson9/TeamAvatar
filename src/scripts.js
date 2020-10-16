$(document).ready(function () {
    
    setInterval(function () { $(".awarePage").fadeIn(); }, 5000)

});

function Close() {
    $("#mainBox").fadeOut();
}

function openCreatePage() {
    $(".awarePage").fadeOut();
    $(".awarePage").hide();
    $(".createPage").fadeIn();
}