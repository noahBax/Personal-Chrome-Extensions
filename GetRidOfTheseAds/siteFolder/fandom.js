/**
 * 1.29.2021
 * At the time of writing this, the site currently had not sent their content security policy
 * Here we exploit that by setting it for them and not loading anything that is not on the site
 * 
 * REMARKS:
 * There are some gallery images at the bottom of the page that do not load and I would love to fix that
 */


console.log("removing");
function remove() {
    // Prevent outside content from loading by setting CSP
    var m = document.createElement("meta");
    m.httpEquiv = "content-security-policy";
    m.content = `default-src 'self' ${window.location.hostname} https://static.wikia.nocookie.net/* *.fandom.com/*; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' ; img-src *;`;
    m.setAttribute("noah-was-here", "true");
    document.head.appendChild(m)

    // Get rid of white spaces
    $('.featured-video__wrapper').remove();
    $('#WikiaRailWrapper').remove();

    // Any leftover video tags
    $('div[itemprop="video"]').remove();

    // Remove bottom feed
    $('#mixed-content-footer').remove();

    // Remove top add
    $('.top-ads-container').remove();
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