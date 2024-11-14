chrome.storage.local.get(['removingAds'], function(result) {
    // console.log('Value currently is ' + result.removingAds);

    if (result.removingAds) {
        document.querySelector("input").checked = true;
        document.body.style.backgroundColor = '#53a567ff'
    } else {
        document.body.style.backgroundColor = '#da291cff'
        
    }
});

document.querySelector("input").addEventListener('change', () => {
    if (document.querySelector("input").checked) {
        chrome.storage.local.set({'removingAds': true}, function() {
            $("body").animate({
                backgroundColor: "#53a567ff"
            },400);
        });
    } else {
        chrome.storage.local.set({'removingAds': false}, function() {
            $("body").animate({
                backgroundColor: "#da291cff"
            },400);
        });
    }
})