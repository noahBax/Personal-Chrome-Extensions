/**
 * 4.3.2023
 * cows cows cows
 */
let url = chrome.runtime.getURL("/images/head.jpg");
console.log(url);
document.addEventListener("DOMContentLoaded", () => document.body.style.backgroundImage = `url("${url}")`);