var openPage = false;
var inviteList = [];
var invitedFriend1 = false;


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

function inviteClose() {
    $(".invitePage").fadeOut();
    openPage = false;
    console.log(openPage);
}

function openCreatePage() {
    $(".createPage").fadeIn();
    $(".awarePage").fadeOut();
    $(".awarePage").hide();
    openPage = true;
    console.log(openPage);
}

function openInvitePage() {
    $(".createPage").fadeOut();
    $(".createPage").hide();
    $(".invitePage").fadeIn();
    openPage = true;
    console.log(openPage);
}

function inviteFriend1() {
    if (!invitedFriend1) {
        invitedFriend1 = true;
        document.getElementById("friend1").style.backgroundColor='#3f8fb4';
        document.getElementById("friend1").innerHTML = "Invited";
        inviteList.push(document.getElementById("friendPic1"));
        console.log("friend1 " + invitedFriend1);
        console.log(inviteList);
    } else {
        invitedFriend1 = false;
        for( var i = 0; i < inviteList.length; i++){ 
            console.log(i.id);
            if (i.id = "friendPic1") { 
                inviteList.splice(i, 1); i--; 
            }
        }
        document.getElementById("friend1").style.backgroundColor='#5AC8FA';
        document.getElementById("friend1").innerHTML = "Invite";
        console.log("friend1 " + invitedFriend1);
        console.log(inviteList);
    }
   
}