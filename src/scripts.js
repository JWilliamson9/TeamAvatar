var openPage = false;

$(document).ready(function () {

    console.log(openPage);
    setInterval(checkPageOpen, 8000);
    
    function checkPageOpen() {
        if (!openPage) {
            $(".awarePage").fadeIn();
            openPage = true;
            console.log(openPage);
        } else {
            console.log(openPage);
        }
    }
});

function awareClose() {
    $(".awarePage").fadeOut();
    openPage = false;
    console.log(openPage);
}

function createClose() {
    $(".createPage").fadeOut();
    openPage = false;
    console.log(openPage);
}

function openCreatePage() {
    $(".awarePage").fadeOut();
    $(".awarePage").hide();
    $(".createPage").fadeIn();
    openPage = true;
    console.log(openPage);
}