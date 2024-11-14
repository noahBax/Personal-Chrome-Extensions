function AS(a,b) {
	if (b == 'top') {
		c = document.getElementById("Pacmanfig").style.top;
	} else if (b == 'left') {
		c = document.getElementById("Pacmanfig").style.left;
	}
	d = parseInt(c.substring(0,c.length-2));
	if (a == 'a') {
		e = d + mv;
	} else if (a == 's') {
		e = d - mv;
	}
	console.log(e);
	return e;
}
function RandomRounderFour() {
	n = Math.random();
	if (n < 1/4) {
		return 1;
	} else if (n < 1/2) {
		return 2;
	} else if (n < 3/4) {
		return 3;
	} else {
		return 4;
	}
}
function DirectionCollider(a,b) {
	c = 0;
	if (b == 1) {
		c = a.North;
	} else if (b == 2) {
		c = a.East;
	} else if (b == 3) {
		c = a.South;
	} else if (b == 4) {
		c = a.West;
	}
	console.log([b,c]);
	return [b,c];
}
function AddDistance(a,b,c) {
	if (a == 1) {
		b += JumpDistance;
	} else if (a == 2) {
		c += JumpDistance + PacmanWidth;
	} else if (a == 3) {
		b = b - JumpDistance - PacmanWidth;
	} else if (a == 4) {
		c = c - JumpDistance;
	}
	return [b,c];
}
function PathLayer(a) {
	pac = document.getElementById("Pacmanfig");
	StartCoordsX = PixelRemover(pac.style.left) + PacmanWidth/2;
	StartCoordsY = PixelRemover(pac.style.top) + PacmanWidth/2;
	for (x=0;x<a[1]+1;a++) {
		console.log("Test " + x);
		NextCoord = AddDistance(a[0],PixelRemover(document.getElementById("Pacmanfig").style.top),PixelRemover(document.getElementById("Pacmanfig").style.left));
		var pf = document.createElement("img");
			pf.src = chrome.extension.getURL("Pacfood.png");
			pf.style.position = 'absolute';
			pf.style.display = 'block';
			pf.style.height = FoodWidth + 'px';
			pf.style.length = FoodWidth + 'px';
			pf.style.left = NextCoord[1] + 'px';
			pf.style.top = NextCoord[0] + 'px';
		document.body.appendChild(pf);
	}
}
function PacfoodLayer() {
	//Article 1: Screen Planner
	w = window.innerWidth;
	h = window.innerHeight;
	DB = JumpDistance + FoodWidth;
	Directions = Concrete(w,h,DB);
	SD /*Backwards it stands for D\*ck Size*/ = RandomRounderFour();
	//RandomRounderFour returns it in a number form and it stays that way in the variable
	FinishedPackage = DirectionCollider(Directions,SD);
	//FinishedPackage has Direction then Amount in that direction
	PathLayer(FinishedPackage);
}
PacfoodLayer();