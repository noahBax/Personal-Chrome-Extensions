
setInterval(() => {
	window.open = (url, target, windowFeatures) => alert(url);
}, 1000);

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
    document.head.appendChild(m)
}

remove();