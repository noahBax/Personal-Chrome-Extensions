// 5.15.2022 -> I just want to turn on dark mode
// 4.6.2023 -> Remove "Open in App" popup
// 7.9.2024 -> Adjusted it so that code containers would be in dark mode too

// At this time, it is literally just telling the body to be in dark mode
// It is also assumed that javascript is turned off for this site, otherwise this would be handled by the site
document.body.dataset.darkMode = "true"
document.getElementById("main").removeChild(document.getElementById("openInApp-modal"));

// Set all code snippets to dark mode too
document.querySelectorAll('.syntaxhighlighter.nogutter').forEach(ele => {
	ele.classList.add('night')
})