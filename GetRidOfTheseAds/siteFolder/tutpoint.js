/**
 * 1.30.2021
 * At the time of writing this, the site currently had not sent their content security policy
 * Here we exploit that by setting it for them and not loading anything that is not on the site
 */


function remove() {
    // Prevent outside content from loading by setting CSP
    var m = document.createElement("meta");
    m.httpEquiv = "content-security-policy";
    m.content = `
    default-src
        'self'
        ${window.location.hostname}/
        fonts.googleapis.com/
        search.tutorialspoint.com/
        www.google-analytics.com/
        *.cloudfront.net/;
    style-src
        'self'
        'unsafe-inline';
    script-src
        'self'
        'unsafe-inline';
    `;
    m.setAttribute("noah-was-here", "true");
    document.head.appendChild(m)

    // Get rid of white spaces
    //$("#mainLeaderboard").remove();
    $("#google-top-ads").remove();
    $(".google-right-ads").remove();
    $(".google-bottom-ads").remove();
    $(".space-bottom").remove();
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