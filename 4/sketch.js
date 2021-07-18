let numX = 19;
let numY = 19;

let t = create2Darray(numX, numY);

function setup() {
	createCanvas(1000, 1000);
	stroke(255, 30, 30);
	strokeWeight(4);
	textSize(24);
	textAlign(CENTER, CENTER);
	
	for (let y = 0; y < numY; y++) {
		for (let x = 0; x < numX; x++) {
			t[x][y] = str(char(int(random(65, 90))));
		}
	}
}

function draw() {
	background(255);
	noFill();
	circle(mouseX, mouseY, 36);
	
	fill(0);
	for (let y = 0; y < numY; y++) {
		for (let x = 0; x < numX; x++) {
			let posX = 50 * (x + 1);
			let posY = 50 * (y + 1);
			
			push();
			noStroke();
			translate(posX, posY);
			rotate(atan2(mouseY-posY, mouseX-posX) + radians(dist(mouseX, mouseY, posX, posY) / 90));
			text(t[x][y], 0, 0);
			pop();
		}
	}
}

function create2Darray(rows, columns) {
	let arr = new Array(rows);
	for (let i = 0; i < rows; i++) {
		arr[i] = new Array(columns);
	}
	return arr;
}