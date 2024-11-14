var PacmanWidth = 40;
var FoodWidth = 10;
var JumpDistance = 30;
var PlacementDistance = FoodWidth + JumpDistance;
var mv = 5;
var board = document.createElement("DIV");
	board.id = "PlayingBoard";
document.body.appendChild(board);
var pm = document.createElement("img");
	pm.id = "Pacmanfig";
	pm.src = chrome.extension.getURL("best-pacman-gif-754.gif");
	pm.style.position = 'absolute';
	pm.style.height = PacmanWidth + 'px';
	pm.style.length = PacmanWidth + 'px';
	pm.style.left = ((window.innerWidth/2) - 20) + 'px';
	pm.style.top = ((window.innerHeight/2) - 20) + 'px';
	pm.style.display = 'block';
document.body.appendChild(pm);
//DLL Section
function PixelRemover(c) {
	/*Returns value of a number without pixel measurements (px) on the end
	--Pixel,Delete
	*/
	return parseInt(c.substring(0,c.length-2));
}
function CoordPac(x,y) {
	x -= FoodWidth/2;
	y -= FoodWidth/2;
	return [x,y];
}
function ReverseCoordPac(x,y) {
	x += FoodWidth/2;
	y += FoodWidth/2;
	return [x,y];
}
function ChanceRoller(chances,MinumumValue) {
	timesdone = 0;
	do {
		number = Math.random();
		console.log(number);
		for (x=0;x<chances;x++) {
			console.log(x);
			if (1/x<number<1/(x+1)) {
				val = x;
			}
		}
		console.log("val is " + val);
		timesdone++;
		if (timesdone>99) {
			throw("Limit Reached\nSize of Page is Too Small");
		}
	} while (val<MinumumValue)
	console.log("The times this was completed is " + timesdone);
	return val;
}
//End DLL Section
document.addEventListener('keydown',function(event) {
	console.log(event.keyCode);
	pac = document.getElementById("Pacmanfig").style;
	if (event.keyCode == 68) {
		pac.left = PixelRemover(pac.left) + mv;
	} else if (event.keyCode == 65) {
		pac.left = PixelRemover(pac.left) - mv;
	} else if (event.keyCode == 87) {
		pac.top = PixelRemover(pac.top) - mv;
	} else if (event.keyCode == 83){
		pac.top = PixelRemover(pac.top) + mv;
	}
});
function Pave(lefter,topper) {
	var pf = document.createElement("img");
	pf.src = chrome.extension.getURL("Pacfood.png");
	pf.style.position = 'absolute';
	pf.style.display = 'block';
	pf.style.height = FoodWidth + 'px';
	pf.style.length = FoodWidth + 'px';
	pf.style.top = topper;
	pf.style.left = lefter;
	document.getElementById("PlayingBoard").appendChild(pf);
}	
function Concrete() {
	pac = document.getElementById("Pacmanfig");
	var Directions = {
		"North": Math.floor(PixelRemover(pac.style.top)/PlacementDistance),
		"East": Math.floor((PixelRemover(pac.style.left))/PlacementDistance),
		"South": Math.floor((window.innerHeight-PacmanWidth-PixelRemover(pac.style.top))/PlacementDistance),
		"West": Math.floor((window.innerWidth-PacmanWidth-PixelRemover(pac.style.left))/PlacementDistance),
	}
	console.log(Directions);
	return Directions;
}
function CoordFinder(StartX,StartY,Direction) {
	switch (Direction) {
		case 1:
			StartY -= PlacementDistance;
			break;
		case 2:
			StartX += PlacementDistance;
			break;
		case 3:
			StartY += PlacementDistance;
			break;
		case 4:
			StartX -= PlacementDistance;
			break;
	}
	return [StartX,StartY];
}
function FoodPlacer() {
	Directions = Concrete();
	StartX = window.innerWidth/2;
	StartY = window.innerHeight/2;
	UseCoords = [StartX,StartY];
	x = Math.random();
	if (x < 1/4) {
		MoveDistance = ChanceRoller(Directions.North,2);
		Direction = 1;
		PreviouslyUsed = 'AxisY';
	} else if (x < 1/2) {
		MoveDistance = ChanceRoller(Directions.East,2);
		Direction = 2;
		PreviouslyUsed = 'AxisX';
	} else if (x < 3/4) {
		MoveDistance = ChanceRoller(Directions.South,2);
		Direction = 3;
		PreviouslyUsed = 'AxisY';
	} else {
		MoveDistance = ChanceRoller(Directions.West,2);
		Direction = 4;
		PreviouslyUsed = 'AxisX';
	}
	for (y=0;y<MoveDistance;y++) {
		FinalCoords = CoordFinder(UseCoords[0],UseCoords[1],Direction);
		FinalCoordsC = CoordPac(FinalCoords[0],FinalCoords[1]);
		Pave(FinalCoordsC[0],FinalCoordsC[1]);
		UseCoords = FinalCoords;
	}
	AdditionalPaths = ChanceRoller(15,5);
	for (x=0;x<AdditionalPaths;x++) {
		console.log(x);
		y = Math.random();
		if (y<1/2) {
			First = 1;
			Direction = 0;
			if (PreviouslyUsed = "AxisX") {
				Direction = 1;
				Directions = Concrete();
				Move = Directions.North;
			} else {
				
			}
		} else {
			
		}
	}
}
Concrete();
FoodPlacer();