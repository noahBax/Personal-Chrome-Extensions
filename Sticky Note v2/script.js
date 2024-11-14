if (window.self !== window.top) {
	throw('Location: Document is Not The Topmost Document');
}
//The idnum is the number that is in the id of every note
//You get the key to access the storage by combining "note" and idnum in that order. After you do, up the idnum by one and update storage!
//
//Idealy have an extra wait time after a person stops typing for it to update the stuff on the storage. Remember that we have to keep the number of transactions down to under one every 2 seconds
var storage = {};
var waitTime = 200;
var firstColor = "#EBE33B";
var secondColor = "#B2AD2D";
//Make sure to make any changes to the CSS file that you make to the colors as well
function animateArrive() {
	$(".stickyNoteContainer").children("div").animate({
		backgroundColor: secondColor
	},{
		duration: waitTime,
		queue: false
	});
	$(".xbu").animate({
		opacity: "1"
	}, {
		duration: waitTime,
		queue: false
	});
};
function animateLeave() {
	$(".stickyNoteContainer").children("div").animate({
		backgroundColor: firstColor
	}, {
		duration: waitTime,
		queue: false
	});
	$(".xbu").animate({
		opacity: ".5"
	}, {
		duration: waitTime,
		queue: false
	});
}
//chrome.storage.local.get("blehh", function (items) {
//	console.log(items);
//});
chrome.storage.local.get(null, function(items) {
	console.log(items);
	for (x in items){
		console.log(x);
		generateNote(true,items[x],x);
	}
});
function generateNote (input,val,c) {
	var xbutton = document.createElement("img");
		xbutton.src = "delete-sign.png";
		xbutton.className = "xbu";
	var header = document.createElement("div");
		header.className = "nhead";
		header.innerHTML = xbutton.outerHTML;
	var a = document.createElement("textarea");
		if (input) {
			a.innerHTML = val;
		}
		a.className = "ntexta";
	var stickyNoteContainer = document.createElement("div");
		stickyNoteContainer.innerHTML = header.outerHTML + a.outerHTML;
		stickyNoteContainer.className = "stickyNoteContainer";
	document.body.appendChild(stickyNoteContainer);
	$(".stickyNoteContainer").draggable({handle:"div"});
	$(".stickyNoteContainer").mouseenter(animateArrive);
	$(".stickyNoteContainer").mouseleave(animateLeave);
	$(".stickyNoteContainer").mousedown(function() {$(".stickyNoteContainer").off( "mouseleave" )});
	$(".stickyNoteContainer").mouseup(function() {
		$(".stickyNoteContainer").mouseleave(animateLeave);
	});
	$(".ntexta").bind('input propertychange',function() {
		console.log("update");
		console.log($(".ntexta").val());
		chrome.storage.local.set({'stickynotes': $(".ntexta").val()}, function() {
          // Notify that we saved.
          console.log('Settings saved');
        });
	})
}
document.addEventListener('keydown', function(event) {
	if (event.altKey && event.keyCode == 78){
		generateNote(false);
		console.log('New Note Generation Process Started: Through normal method');
	}
});