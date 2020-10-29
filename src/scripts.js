var openPage = false;
var inviteList = [];
var invitedFriend1 = false;
var invitedFriend2 = false;
var invitedFriend3 = false;
var invitedFriend4 = false;
var invitedFriend5 = false;
var invitedFriend6 = false;
var activityTitle = "Activity Name";
var activityWeather = "Sunny";
var activityDriveLength = "11 minute drive";
var activityTime = "12:00pm";
var activityLocation = "My House";

$(".phonecallScreen")


$(document).ready(function () {

    console.log(openPage);

    var min = 20,
        max = 40;

    var rand = Math.floor(Math.random() * (max - min + 1) + min);
    setInterval(checkPageOpen, rand * 1000);

    
    function checkPageOpen() {
        if (!openPage) {
            $(".awarePage").slideDown();
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

function jackClose() {
    $(".jumpPage").fadeOut();
    openPage = false;
    console.log(openPage);
}

function callClose() {
    $(".callPage").fadeOut();
    openPage = false;
    console.log(openPage);
}

function createClose() {
    $(".createPage").fadeOut();
    openPage = false;
    console.log(openPage);
}

function lunchClose() {
    $(".lunchPage").fadeOut();
    openPage = false;
    console.log(openPage);
}
    
function inviteClose() {
    $(".invitePage").fadeOut();
    openPage = false;
    console.log(openPage);
}

function calClose() {
    $(".calendarPage").fadeOut();
    openPage = false;
    console.log(openPage);
}

function openJackPage() {
    $(".jumpPage").fadeIn();
    $(".awarePage").fadeOut();
    $(".awarePage").hide();
    openPage = true;
    console.log(openPage);
}

function openPhoneCall() {
    $(".phoneCallScreen").fadeIn();
    openPage = true;
    console.log(openPage);

    setTimeout(function() {
        $(".phoneCallScreen").fadeOut();
    }, 5000);
}

function openCallPage() {
    $(".callPage").fadeIn();
    $(".awarePage").fadeOut();
    $(".awarePage").hide();
    openPage = true;
    console.log(openPage);
}

function openCreatePage() {
    $(".createPage").fadeIn();
    $(".awarePage").fadeOut();
    $(".awarePage").hide();
    openPage = true;
    console.log(openPage);
}

function openLunchPage() {
    $(".awarePage").fadeOut();
    $(".awarePage").hide();
    $(".lunchPage").fadeIn();
    openPage = true;
    console.log(openPage);
}
    
function openInvitePage() {
    $(".createPage").fadeOut();
    $(".createPage").hide();
    $(".invitePage").fadeIn();
    openPage = true;
    console.log(openPage);
    activityTitle = String(document.getElementById("activityTitle").innerHTML);
    activityWeather = String(document.getElementById("activityWeather").innerHTML);
    activityDriveLength = String(document.getElementById("activityDriveLength").innerHTML);
    activityTime = document.getElementById("time").value;
    activityLocation = document.getElementById("location").value;
    document.getElementById("invActTitle").innerHTML = activityTitle;
    document.getElementById("invActLocation").innerHTML = activityLocation;
    document.getElementById("invActTime").innerHTML = activityTime;
    document.getElementById("invActWeather").innerHTML = activityWeather;
    document.getElementById("invActDrive").innerHTML = activityDriveLength;
}

function openInvitePageFromLunch() {
    $(".lunchPage").fadeOut();
    $(".lunchPage").hide();
    $(".invitePage").fadeIn();
    openPage = true;
    console.log(openPage);
    activityTitle = String(document.getElementById("activityTitlepic").innerHTML);
    activityWeather = String(document.getElementById("activityWeatherpic").innerHTML);
    activityDriveLength = String(document.getElementById("activityDriveLengthpic").innerHTML);
    activityTime = document.getElementById("timepic").value;
    activityLocation = document.getElementById("locationpic").value;
    document.getElementById("invActTitle").innerHTML = activityTitle;
    document.getElementById("invActLocation").innerHTML = activityLocation;
    document.getElementById("invActTime").innerHTML = activityTime;
    document.getElementById("invActWeather").innerHTML = activityWeather;
    document.getElementById("invActDrive").innerHTML = activityDriveLength;
}

function openCalPage() {
    $(".invitePage").fadeOut();
    $(".invitePage").hide();
    document.getElementById("calSummaryPics").innerHTML = document.getElementById("summaryPics").innerHTML
    $(".calendarPage").fadeIn();
    openPage = true;
    console.log(openPage);
    document.getElementById("calActTitle").innerHTML = activityTitle;
    document.getElementById("calActLocation").innerHTML = activityLocation;
    document.getElementById("calActTime").innerHTML = activityTime;
    document.getElementById("calActWeather").innerHTML = activityWeather;
    document.getElementById("calActDrive").innerHTML = activityDriveLength;
}

function openCalPageFromMeTime() {
    $(".lunchPage").fadeOut();
    $(".lunchPage").hide();
    $(".createPage").fadeOut();
    $(".createPage").hide();
    document.getElementById("calSummaryPics").innerHTML = document.getElementById("summaryPics").innerHTML
    $(".calendarPage").fadeIn();
    openPage = true;
    console.log(openPage);
    activityTitle = String(document.getElementById("activityTitle").innerHTML);
    activityWeather = String(document.getElementById("activityWeather").innerHTML);
    activityDriveLength = String(document.getElementById("activityDriveLength").innerHTML);
    activityTime = document.getElementById("time").value;
    activityLocation = document.getElementById("location").value;
    document.getElementById("calActTitle").innerHTML = activityTitle;
    document.getElementById("calActLocation").innerHTML = activityLocation;
    document.getElementById("calActTime").innerHTML = activityTime;
    document.getElementById("calActWeather").innerHTML = activityWeather;
    document.getElementById("calActDrive").innerHTML = activityDriveLength;
}

function openCalPageFromMeTimeFromLunch() {
    $(".lunchPage").fadeOut();
    $(".lunchPage").hide();
    $(".createPage").fadeOut();
    $(".createPage").hide();
    document.getElementById("calSummaryPics").innerHTML = document.getElementById("summaryPics").innerHTML
    $(".calendarPage").fadeIn();
    openPage = true;
    console.log(openPage);
    activityTitle = String(document.getElementById("activityTitlepic").innerHTML);
    activityWeather = String(document.getElementById("activityWeatherpic").innerHTML);
    activityDriveLength = String(document.getElementById("activityDriveLengthpic").innerHTML);
    activityTime = document.getElementById("timepic").value;
    activityLocation = document.getElementById("locationpic").value;
    document.getElementById("calActTitle").innerHTML = activityTitle;
    document.getElementById("calActLocation").innerHTML = activityLocation;
    document.getElementById("calActTime").innerHTML = activityTime;
    document.getElementById("calActWeather").innerHTML = activityWeather;
    document.getElementById("calActDrive").innerHTML = activityDriveLength;
}

function addedToCal() {
    document.getElementById("addCalButton").innerHTML = "Added to Calendar!";
    document.getElementById("addCalButton").style.backgroundColor='#3f8fb4';
}

// Initialize and add the map
function initMap() {
    // The location of the centre of Australia
    const auscentre = { lat: -25.947028, lng: 133.209639 };
    // The map, centered at the centre of Australia
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: auscentre,
    });
    
    // The create your own  activity map marker, positioned at the centre of Australia
    const marker = new google.maps.Marker({
        position: auscentre,
        map: map,
    });

    const miniMap = new google.maps.Map(document.getElementById("miniMap"), {
        zoom: 3,
        center: auscentre,
    });
    
    // The create your own  activity map marker, positioned at the centre of Australia
    const miniMarker = new google.maps.Marker({
        position: auscentre,
        map: miniMap,
    });

    const calMiniMap = new google.maps.Map(document.getElementById("calMiniMap"), {
        zoom: 3,
        center: auscentre,
    });
    
    // The create your own  activity map marker, positioned at the centre of Australia
    const calMiniMarker = new google.maps.Marker({
        position: auscentre,
        map: calMiniMap,
    });

    // The location of The Coffee - Club Brisbane Square
    const ccbs = { lat: -27.471111, lng: 153.022514 };
    // The map, centered at The Coffee - Club Brisbane Square
    const lunchMap = new google.maps.Map(document.getElementById("lunchMap"), {
        zoom: 18,
        center: ccbs,
    });
    // The marker, positioned at Mt Coot-tha Botatnical Gardens
    const marker2 = new google.maps.Marker({
        position: ccbs,
        map: lunchMap,
    });
}


function displayInvFriends() {
    $('#summaryPics').empty();
    for( var i = 0; i < inviteList.length; i++){ 
        if (inviteList.length > 0) {
            $('#summaryPics').append(inviteList[i]);
            inviteList[i].className = "summaryAvatarPic";
            console.log("not empty List")
        }   
    }
    if (inviteList.length == 0) {
            $('#summaryPics').empty();
            console.log("empty List");
        }
}

function inviteFriend1() {
    if (!invitedFriend1) {
        invitedFriend1 = true;
        document.getElementById("friend1").style.backgroundColor='#3f8fb4';
        document.getElementById("friend1").innerHTML = "Invited";
        inviteList.push(document.getElementById("friendPic1").cloneNode(true));
        displayInvFriends();
        console.log(inviteList);
    } else {
        invitedFriend1 = false;
        for( var i = 0; i < inviteList.length; i++){ 
            console.log(inviteList[i].id);
            if (i.id = "friendPic1") { 
                inviteList.splice(i, 1); i--; 
                console.log("removed friend 1");
                break;
            }
        }
        document.getElementById("friend1").style.backgroundColor='#5AC8FA';
        document.getElementById("friend1").innerHTML = "Invite";
        displayInvFriends();
        console.log(inviteList);
    }
}

function inviteFriend2() {
    if (!invitedFriend2) {
        invitedFriend2 = true;
        document.getElementById("friend2").style.backgroundColor='#3f8fb4';
        document.getElementById("friend2").innerHTML = "Invited";
        inviteList.push(document.getElementById("friendPic2").cloneNode(true));
        displayInvFriends();
        console.log(inviteList);
    } else {
        invitedFriend2 = false;
        for( var i = 0; i < inviteList.length; i++){ 
            console.log(inviteList[i].id);
            if (inviteList[i].id = "friendPic2") { 
                inviteList.splice(i, 1); i--;
                break;
            }
        }
        document.getElementById("friend2").style.backgroundColor='#5AC8FA';
        document.getElementById("friend2").innerHTML = "Invite";
        displayInvFriends();
        console.log(inviteList);
    }
}

function inviteFriend3() {
    if (!invitedFriend3) {
        invitedFriend3 = true;
        document.getElementById("friend3").style.backgroundColor='#3f8fb4';
        document.getElementById("friend3").innerHTML = "Invited";
        inviteList.push(document.getElementById("friendPic3").cloneNode(true));
        displayInvFriends();
        console.log(inviteList);
    } else {
        invitedFriend3 = false;
        for( var i = 0; i < inviteList.length; i++){ 
            console.log(inviteList[i].id);
            if (inviteList[i].id = "friendPic3") { 
                inviteList.splice(i, 1); i--;
                break;
            }
        }
        document.getElementById("friend3").style.backgroundColor='#5AC8FA';
        document.getElementById("friend3").innerHTML = "Invite";
        displayInvFriends();
        console.log(inviteList);
    }
}

function inviteFriend4() {
    if (!invitedFriend4) {
        invitedFriend4 = true;
        document.getElementById("friend4").style.backgroundColor='#3f8fb4';
        document.getElementById("friend4").innerHTML = "Invited";
        inviteList.push(document.getElementById("friendPic4").cloneNode(true));
        displayInvFriends();
        console.log(inviteList);
    } else {
        invitedFriend4 = false;
        for( var i = 0; i < inviteList.length; i++){ 
            console.log(inviteList[i].id);
            if (inviteList[i].id = "friendPic4") { 
                inviteList.splice(i, 1); i--;
                break;
            }
        }
        document.getElementById("friend4").style.backgroundColor='#5AC8FA';
        document.getElementById("friend4").innerHTML = "Invite";
        displayInvFriends();
        console.log(inviteList);
    } 
}

function inviteFriend5() {
    if (!invitedFriend5) {
        invitedFriend5 = true;
        document.getElementById("friend5").style.backgroundColor='#3f8fb4';
        document.getElementById("friend5").innerHTML = "Invited";
        inviteList.push(document.getElementById("friendPic5").cloneNode(true));
        displayInvFriends();
        console.log(inviteList);
    } else {
        invitedFriend5 = false;
        for( var i = 0; i < inviteList.length; i++){ 
            console.log(inviteList[i].id);
            if (inviteList[i].id = "friendPic5") { 
                inviteList.splice(i, 1); i--;
                break;
            }
        }
        document.getElementById("friend5").style.backgroundColor='#5AC8FA';
        document.getElementById("friend5").innerHTML = "Invite";
        displayInvFriends();
        console.log(inviteList);
    } 
}

function inviteFriend6() {
    if (!invitedFriend6) {
        invitedFriend6 = true;
        document.getElementById("friend6").style.backgroundColor='#3f8fb4';
        document.getElementById("friend6").innerHTML = "Invited";
        inviteList.push(document.getElementById("friendPic6").cloneNode(true));
        displayInvFriends();
        console.log(inviteList);
    } else {
        invitedFriend6 = false;
        for( var i = 0; i < inviteList.length; i++){ 
            console.log(inviteList[i].id);
            if (inviteList[i].id = "friendPic6") { 
                inviteList.splice(i, 1); i--;
                break;
            }
        }
        document.getElementById("friend6").style.backgroundColor='#5AC8FA';
        document.getElementById("friend6").innerHTML = "Invite";
        displayInvFriends();
        console.log(inviteList);
    }   
}