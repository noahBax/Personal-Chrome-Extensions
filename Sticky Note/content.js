if (window.self !== window.top) {
	throw('Location: Document is Not The Topmost Document');
}
/*asdfjkl = confirm('Yes for 1, No for 2');
console.log(asdfjkl)
var bc = new BroadcastChannel("Timeline");
if (asdfjkl == true) {
	forwhat = 1;
} else if (asdfjkl == false) {
	forwhat = 2;
}
post('RELOAD');
function post(Message) {
	bc.postMessage({Message: Message, web: forwhat,});
	console.log(Message);
}
*/
function post(Message) {
	console.log(Message);
}
function WriteNote(Msg) {
	document.getElementById("NoteConfiguring").appendChild(Msg);
	for (var x=0;x<document.getElementById("NoteConfiguring").childElementCount; x++) {
		UseThis = ChooseNum()
		console.log(UseThis);
		spanName = 'Span' + UseThis;
		xBarName = 'xBar' + UseThis;
		xButtonName = 'xButton' + UseThis;
		textareaName = 'tarea' + UseThis;
		pinName = 'Pin' + UseThis;
		var y = document.getElementById("NoteConfiguring")[x];
		//y.
	}
}
function postVBody() {
	NoteContainer = document.createElement('div');
	NoteContainer.id = 'NoteContainer';
	NoteContainer.style.zIndex = 2147483646;
	document.body.insertBefore(NoteContainer, document.body.childNodes[0]);
	NoteConfiguring = document.createElement('div');
	NoteConfiguring.id = "NoteConfiguring";
	document.body.appendChild(NoteConfiguring);
}
function unFocus() {
  if (document.selection) {
    document.selection.empty()
  } else {
    window.getSelection().removeAllRanges()
  }
} 
postVBody();
var dontedit = '';
var textNoteNumber = 0;
var checkMouseMove = 'off';
var donothing = '';
var nottouse = [];
var NoteBank = [];
var ClockNumber = 1;
var alreadyUsed = [];
var produce = true;
chrome.storage.local.get(null, function(items) {
	if (items.AllNotes == null) {
		chrome.storage.local.set({'AllNotes':[]});
		NoteBank = [];
	} else {
		NoteBank = items.AllNotes;
	}
	if (items.UpdateNumber == null) {
		chrome.storage.local.set({'UpdateNumber':1});
		ClockNumber = 1;
	} else {
		ClockNumber = items.UpdateNumber;
	}
});
function EventHandlers(xBar,xButton,tarea,span,tnn,pinName) {
	document.getElementById(xButton).addEventListener('click', function () {
		post('Span ' + span.substring(4) + ' has been removed');
		p = document.getElementById(span);
		p.parentNode.removeChild(p);
		ClockNumberCycle();
		//n = parseInt(span.slice(4));
	});
	var blehhh = function() {
		unFocus();
	}
	document.getElementById(xBar).addEventListener('mousedown', function() {
		checkMouseMove = span;
		unFocus();
		document.addEventListener('mousemove', blehhh);
	});
	document.getElementById(xBar).addEventListener('mouseup', function() {
		/*post(tnn);
		EditNext = cycling(tnn,NoteBank, 'EventHandlers: mouseup');
		post('EditNext is: ' + EditNext);
		post(NoteBank);
		NoteBank[EditNext].xHeight = document.getElementById(checkMouseMove).style.top;
		NoteBank[EditNext].yHeight = document.getElementById(checkMouseMove).style.left;
		*/
		checkMouseMove = 'off';
		ClockNumberCycle()
		document.removeEventListener('mousemove', blehhh);
	});
	document.getElementById(tarea).addEventListener('focus', function() {
		document.getElementById(tarea).className = 'textNotesLucid';
		document.getElementById(xBar).className = 'xBar';
		dontedit = true;
		ClockNumberCycle();
	});
	document.getElementById(tarea).addEventListener('blur', function() {
		document.getElementById(tarea).className = 'textNotes';
		document.getElementById(xBar).className = 'xBarTrans';
		dontedit = false;
		ClockNumberCycle();
		console.log("Line 84!!");
	});
	document.getElementById(tarea).addEventListener('keyup', function() {
		//dontedit = true;
		document.getElementById(tarea).innerHTML = document.getElementById(tarea).value;
		/*EditNext = cycling(tnn,NoteBank,'EventHandlers: keyup');
		NoteBank[EditNext].boxVal = document.getElementById(tarea).value;
		*/
		ClockNumberCycle();
	});
	document.getElementById(pinName).addEventListener('contextmenu', function(e) {
            alert("You've tried to open context menu"); //here you draw your own menu
            e.preventDefault();
        }, false);
}
function cycling(searchFor,searchIn,origin) {
	post(origin);
	if (searchIn.length == 0) {
		post('rvalue error: length is invalid');
		return false;
	}
	for (l=0;l<searchIn.length;l++) {
		post(l);
		console.log(l);
		post(searchFor);
		console.log(searchFor);
		console.log(searchIn);
		if (searchIn[l].boxId == searchFor) {
			post('alreadyUsed contains a value: ' + l);
			return l;
		}
	}
	post('rvalue does not exist in alreadyUsed');
	return false;
}
function cycling2(searchFor,searchIn) {
	post('The value we are searching for is: ' + searchFor);
	if (searchIn.length == 0) {
		post('rvalue2 error: length is invalid');
		return false;
	}
	for (l=0;l<searchIn.length;l++) {
		post(l);
		post(searchFor);
		if (searchIn[l] == searchFor) {
			post('rvalue2 has a value: ' + l);
			return l;
		}
	}
	return false;
}
function FailDetector() {
	if (NoteBank.length > 50) {
		chrome.storage.local.clear(null);
		textNoteNumber = 0;
		l = document.getElementById('NoteContainer');
		l.parentNode.removeChild(l);
		postVBody();
		NoteBank = [];
		ClockNumber = 1;
		alreadyUsed = [];
		throw('Error: Number of Notes was too high');
		stop();
	}
}
console.log(464,-1224);
console.log('https://www.khanacademy.org/math/algebra2/exponential-and-logarithmic-functions/introduction-to-logarithms/e/logarithms_1.5');
//---------------------------------------------------------------------------------------------------------------------------------------------
document.addEventListener('keydown', function(event) {
	if (event.altKey && event.keyCode == 78){
		textNoteGenerator();
		post('New Note Generation Process Started: Through normal method');
	}
});
window.addEventListener('blur', function() {
	dontedit = false;
	donothing = false;
	console.log('Page off');
});
window.addEventListener('focus', function() {
	donothing = true;
	console.log('Page on');
});
document.addEventListener('mousemove',function(event) {
	if (checkMouseMove != 'off') {
		document.getElementById(checkMouseMove).style.top = event.clientY + -3 + 'px';
		document.getElementById(checkMouseMove).style.left = event.clientX + -3 + 'px';
	}
});
document.addEventListener('keydown', function(event) {
	if (event.keyCode == 67 && event.altKey) {
		chrome.storage.local.set({"AllNotes":""},null);
		chrome.storage.local.set({"UpdateNumber":1},null);
		setTimeout(location.reload(), 500);
	}
});
function ShowDebugMsg() {
	chrome.storage.local.get(null, function(items) {
		console.log('\n---DEBUG MENU---\n\nStorage: UpdateNumber is: ' + items.UpdateNumber + '\nClockNumber is: ' + ClockNumber + '\ntextNoteNumber is: ' + textNoteNumber + '\nalreadyUsed is:  ' + alreadyUsed + '\nNoteBank is: ' + NoteBank + ' \n ');
	});
}
document.addEventListener('keydown', function(event) {
	if (event.keyCode == 86 && event.altKey) {
		ShowDebugMsg();
	}
});
document.addEventListener('keydown', function(event) {
	if (event.keyCode == 87 && event.altKey) {
		NoteBank.push({boxId:'0'});
		FaultDetector(NoteBank);
	}
});
chrome.storage.onChanged.addListener(function(changes,areaName) {
	post(changes);
	post('ClockNumber: ' + ClockNumber);
	//post(StorageChange
	if (dontedit != true) {
		chrome.storage.local.get(null, function(items) {
			post(items);
			j = ClockNumber !== items.UpdateNumber;
			post("Notes should reload: " + j);
			if (ClockNumber !== items.UpdateNumber) {
				post('Notes reloading');
				post('Through benign method');
				ReplaceContent(items.AllNotes);
				ClockNumber = items.UpdateNumber;
				post('Notes reloaded');
			}
			console.log(items.AllNotes);
		});
	}
});
chrome.storage.local.get(null, function(items) {
	post(items);
	ReplaceContent(items.AllNotes);
});
console.log(document.getElementById("NoteContainer"));
/*var bc = new BroadcastChannel("test_channel");
chrome.storage.local.set({'NoteValue': false});
bc.onmessage = function (ev) { post(ev.data); }*/