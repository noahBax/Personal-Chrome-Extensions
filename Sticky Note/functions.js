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
function ChooseNum() {
	tnn2 = 0;
	while(FindIn(tnn2,GetExistingIds())) {
		tnn2++;
	}
	return tnn2;
}
function GetExistingIds() {
	ListOfUsedIds = [];
	WorkSpace = document.getElementById("NoteContainer").children;
	for (a=0;a<WorkSpace.length;a++) {
		ListOfUsedIds.push(WorkSpace[a].id.substring(4));
	}
	return ListOfUsedIds;
}
function FindIn(find,arrayin) {
	returnVal = false;
	for (n=0;n<arrayin.length;n++) {
		if (find == arrayin[n]) {
			returnVal = true;
		}
	}
	return returnVal;
}
function ReplaceContent(Content) {
	document.getElementById("NoteContainer").innerHTML = Content;
	Lol = GetExistingIds();
	for (x=0;x<Lol.length;x++) {
		u = AddNumber(Lol[x]);
		EventHandlers(u[0],u[1],u[2],u[3],Lol[x]);
	}
}
function ClockNumberCycle() {
	ClockNumber++;
	chrome.storage.local.set({'UpdateNumber':ClockNumber},null);
	chrome.storage.local.set({'AllNotes':document.getElementById("NoteContainer").innerHTML});
}
function AddNumber(UseThis) {
	console.log(UseThis);
	spanName = 'Span' + UseThis;
	xBarName = 'xBar' + UseThis;
	xButtonName = 'xButton' + UseThis;
	textareaName = 'tarea' + UseThis;
	return [xBarName,xButtonName,textareaName,spanName];
}
//chrome.browserAction.setPopup(Popup.html)
