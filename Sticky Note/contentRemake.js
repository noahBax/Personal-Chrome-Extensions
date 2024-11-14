if (window.self !== window.top) {
	throw('Location: Document is Not The Topmost Document');
}
function postVBody() {
	ph = document.createElement('div');
	ph.id = 'ph';
	document.body.appendChild(ph);
}
postVBody();
function cycling(searchFor) {
	for (l=0;l<NoteBank.length;l++) {
		console.log(l);
		console.log(searchFor);
		if (NoteBank[l].boxId == searchFor) {
			console.log('hello');
			return l;
		}
	}
}
var dontedit = '';
var textNoteNumber = 0;
var checkMouseMove = 'off';
var donothing = '';
var nottouse = [];
var NoteBank = [];
function EventHandlers(xBar,xButton,tarea,span,tnn) {
	document.getElementById(xButton.id).addEventListener('click', function () {
		console.log('Span ' + span.id.substring(4); + ' has been removed');
		p = document.getElementById(span.id);
		p.parentNode.removeChild(p);
	});
	document.getElementById(xBar.id).addEventListener('mousedown', function() {
		checkMouseMove = span.id;
	});
	document.getElementById(xBar.id).addEventListener('mouseup', function() {
		checkMouseMove = 'off';
		console.log(tnn);
		EditNext = cycling(tnn);
		console.log(EditNext);
		console.log(NoteBank);
		NoteBank[EditNext].xHeight = document.getElementById(checkMouseMove).style.top;
		NoteBank[EditNext].yHeight = document.getElementById(checkMouseMove).style.left;
	});
	document.getElementById(tarea.id).addEventListener('focus', function() {
		document.getElementById(tarea.id).className = 'textNotesLucid';
		document.getElementById(xBar.id).className = 'xBar';
		dontedit = true;
	});
	document.getElementById(tarea.id).addEventListener('blur', function() {
		document.getElementById(tarea.id).className = 'textNotes';
		document.getElementById(xBar.id).className = 'xBarTrans';
		dontedit = false;
		/*chrome.storage.local.set({'State': 'wait'});
		chrome.storage.local.set({'EditNote': ''});
		chrome.storage.local.set({'NoteValue': ''});*/
	});
	document.getElementById(tarea.id).addEventListener('keyup', function() {
		dontedit = true;
	});
}