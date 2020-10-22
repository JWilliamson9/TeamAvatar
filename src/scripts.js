var openPage = false;

$(document).ready(function () {

    console.log(openPage);
    setInterval(checkPageOpen, 8000)

    
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

function picnicClose() {
    $(".picnicPage").fadeOut();
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

function openPicnicPage() {
    $(".awarePage").fadeOut();
    $(".awarePage").hide();
    $(".picnicPage").fadeIn();
    openPage = true;
    console.log(openPage);
}

// Initialize and add the map
function initMap() {
    // The location of Brisbane Botantical Gardens
    const botgardensbris = { lat: -27.475892, lng: 152.975028 };
    // The map, centered at Brisbane Botantical Gardens
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: botgardensbris,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: botgardensbris,
      map: map,
    });
  }