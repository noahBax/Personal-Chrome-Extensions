function FaultDetector(home) {
	Listofall = [];
	revision = false;
	//This step just puts all the id's into an array
	for (j=0;j<home.length;j++) {
		Listofall.push(home[j].boxId);
		console.log(home[j].boxId);
	}
	console.log(Listofall);
	for (l=0;l<Listofall.length;l++){
		//This frist part puts all the variables that are the same as one into a list
		a = [];
		for (h=0;h<Listofall.length;h++) {
			if (Listofall[l] = Listofall[h]) {
				a.push(h);
			}
		}
		console.log(a);
		//The second part takes out all the ones that are in the aforementioned list if the number of the same is higher than 2
		if (a.length >= 2) {
			revision = true;
			for (g=1;g<a.length-1;g++) {
				Listofall.splice(a[g],1)
			}
		}
	}
	console.log(Listofall);
	console.log(revision);
	return [Listofall,revision];
}
function FaultDetector(home) {
	//rn it's being used for a list of the variables that need to be removed at the end
	DeleteList = [];
	FluxVars = [];
	//Checks to see if the variable in a list has a duplicate, if no: -2. If error: -1. If Yes: List of spots where they appear.
	IdList = CreateList(home,DeleteList,FluxVars,IdList);
}
function RemoveLoop(n,DeleteList,FluxVars,IdList) {
	//n will have to probably be the first number of an array
	IndexNum = IdList.indexOf(n);
	if (IndexNum == -1) {
		return -1;
	}
	Removed = home.splice(IndexNum);
	FluxVars.push(Removed);
}
function Check(n, DeleteList, FluxVars, IdList) {
	
}
function CreateList(str) {
	Listofall = [];
	for (j=0;j<home.length;j++) {
		console.log('Item being pushed on ' + j + ' try is ' + home[j].boxId);
		Listofall.push(home[j].boxId);
	}
	return Listofall;
}






//Start New
//Done
function ReplaceContent(Content) {
	document.getElementById("NoteContainer").innerHTML = Content;
}
function ChooseNum() {
	while(FindIn(textNoteNumber,GetExistingIds())) {
		textNoteNumber++;
	}
	return textNoteNumber;
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