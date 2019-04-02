// JavaScript source code
// WHEN THE DOCUMENT IS READYYYY, DO THISSSSS
// it means the DOM has completed loading all of the nodes for this page
$(document).ready(function () {
    // Handler for .ready() called.
    $("#invalidlogin").hide();
    $("#usernamewarning").hide();
    $("#passwarning").hide();
    $("#login").removeClass("submitinactive")

    $("#login").click(function (e) {
        e.preventDefault();
        $("#invalidlogin").show();
    });
    $("#username").keypress(function () {
        console.log("Handler for .keypress() called.");
    });
});