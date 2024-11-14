const num_photos = 74;

// chrome.storage.local.set( { "fileList": fileNameList});

// chrome.storage.local.get(["fileList"], res => {
// 	document.body.innerHTML += res.fileList;

// });

const image = document.getElementById("display");
const image_number = Math.floor(Math.random() * num_photos) + 1;
image.src = "MrBeastHay/" + image_number + ".png";