/*
	Every time a change gets made to a note, add it to a queue
	This queue will be looked at every two seconds
		If items are in the queue, they will be set and cleared appropriately.
			Might have to change the queue updates depending on if you perform remove operations from the storage as well every two seconds
	Set a watch specific to each note that will add something to the queue when the value changes

	Pretty much it I think
*/

//The queue
var noteQueue = {};
	noteQueue.update = false;

function upDateStorage() {
	if (noteQueue) {
		delete noteQueue.update;
		chrome.storage.local.set(noteQueue);
	}
}

var intervalID = window.setInterval(upDateStorage,2000);

//The eventlistener
