if (window.self !== window.top) {
	throw('Location: Document is Not The Topmost Document');
}
function textNoteGenerator() {
	if (produce != true) {
		throw('Error: Clock Has Not Reset')
	}
	produce = false;
	setTimeout(function(){produce=true;},500);
	UseThis = ChooseNum()
	console.log(UseThis);
	spanName = 'Span' + UseThis;
	xBarName = 'xBar' + UseThis;
	xButtonName = 'xButton' + UseThis;
	textareaName = 'tarea' + UseThis;
	pinName = 'Pin' + UseThis;
	dname = 'd' + UseThis;
	/*var dropdown = document.createElement("SELECT");
		dropdown.id = dname;
			o1 = document.createElement("option");
			o1.text = "Stick to tab";
			o2 = document.createElement("option");
			o2.text = "Stick to Website";
			o3 = document.createElement("option");
			o3.text = "Stick to Domain";*/
	var xBar = document.createElement("span");
		xBar.id = xBarName;
		xBar.className = 'xBar';
	var xButton = document.createElement("input");
		xButton.value = 'X';
		xButton.type = 'button';
		xButton.id = xButtonName;
		xButton.className = 'xButton';
		xButton.title = "Close note";
	var tarea = document.createElement('textarea');
		tarea.id = textareaName;
		tarea.className = 'textNotesLucid';
		tarea.placeholder = "Type your note here";
	var pin = document.createElement("img");
		pin.id = pinName;
		pin.src = chrome.extension.getURL("Thumbtack.png");
		pin.title = 'Stick to this tab only';
		pin.className = 'PinStyle';
	var span = document.createElement("span");
		span.className = 'classify';
		span.id = spanName;
		span.dataset.website = location.host;
		span.dataset.address = location.href;
		strNew = xBar.outerHTML + xButton.outerHTML + tarea.outerHTML + pin.outerHTML;
		span.innerHTML = strNew;	
	document.getElementById('NoteContainer').appendChild(span);
	//document.head.appendChild(span);
	Frame = {
		'xHeight': 'default',
		'yHeight': 'default',
		'boxVal': '',
		'boxId': String(UseThis),
		'Born': location.host,
	}
	//NoteBank.push(Frame);
	post('Updated NoteBank: ' + JSON.stringify(NoteBank));
	post('Something has been invested in the bank');
	post('Running Normal');
	textNoteNumber++;
	document.getElementById(textareaName).focus();
	ClockNumberCycle();
	EventHandlers(xBar.id,xButton.id,tarea.id,span.id,UseThis,pinName);
	
	
	FailDetector();
}
function noteGen() {
	//Creates a note and posts it to the doc
	if (able.post() != true) {
		stop();
	}
	
}

chrome.storage.local.get(null,function(store,all) {console.log(store);});
x = new Note();
console.log(x);
console.log(Storage.noteCount())