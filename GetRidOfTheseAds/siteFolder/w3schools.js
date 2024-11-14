/**
 * 1.29.2021
 * At the time of writing this, the site currently had not sent their content security policy
 * Here we exploit that by setting it for them and not loading anything that is not on the site
 */


function remove() {
    // Prevent outside content from loading by setting CSP
    var m = document.createElement("meta");
    m.httpEquiv = "content-security-policy";
    m.content = `default-src 'self' w3schools.com/*; script-src 'unsafe-inline'`;
    m.setAttribute("noah-was-here", "true");
    document.head.appendChild(m)

    // Get rid of white spaces
    $("#mainLeaderboard").remove();

    // Get the rid of the adboard on the tryit parts
    $('#tryitLeaderboard').remove();

    // Move the bar up to the top
    $('.trytopnav').css('top','0px');
    $('#container').css('top','39px');
}

// Check to see if we are removing asd
chrome.storage.local.get(['removingAds'], function(result) {
    // console.log('Value currently is ' + result.removingAds);

    if (result.removingAds) {
        remove();
    } else {
        console.log("This website has been spared!");
        console.log("To enable ad removing, tap the slider in the popup for this extension");
    }
});