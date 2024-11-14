class able {
	static post() {
		//is the page being focused on
		return document.hasFocus();
	}
}
class Storage {
	static noteCount() {
		chrome.storage.local.get("Notes",function(j) {
			try {
				console.log(j);
				return j;
			}
			catch(err) {
				return 0;
			}
		})
	}
	static getNote(n) {
		chrome.storage.local.get("Notes",function(j) {
			$.each(j,function(index,value) {
				if (value.NoteID == n) {
					return value;
				}
			});
			return "error";
		});
	}
	static post(x,y) {
		switch(y) {
			case "Notes":
				chrome.storage.local.set({"Notes":x},null);
				break;
		}
	}
}
class ID {
	static getNew(b,c) {
		b = 0;
		c = true;
		if (Storage.noteCount() > 0) {
			return 0;
		}
		do {
			if (Storage.getNote(b) != "error") {
				b++;
			} else {
				c = false;
			}
		}
		while (c);
		return b;
	}
	
	
}
chrome.storage.local.get("Notes",function(j) {
	if (j.length > 0) {
		console.log("yay")
	} else {
		console.log("aww")
	}
});
class Note {
	//the one everything is based off of
	constructor() {
		//this.NoteID = ID.getNew();
		this.CreationTime = Date();
		this.Content = "";
	}
}
console.log(Storage.noteCount());
Storage.post(["hey"],"Notes");