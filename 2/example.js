let pm = 1;
let deg = 0;
let r = 0;
let scale = 50;

function setup() {
    var canvas = createCanvas(windowWidth, 720);
    canvas.parent('header-motion');
}

function draw() {
    background(0);
    noFill();
    strokeWeight(4);

    stroke(255);
    circle(width/2, height/2, 40);
<<<<<<< HEAD
=======
    circle(mouseX, mouseY, 50);
>>>>>>> 95b96e8b021aff39abe375f334b9a2cbe4485f4f
    stroke(255, 0, 0);
    circle(mouseX + (cos(radians(deg)) * r), mouseY + (sin(radians(deg)) * r), scale);
    stroke(0, 0, 255);
    circle(mouseX + (cos(radians(deg+180)) * r), mouseY + (sin(radians(deg+180)) * r), scale);

    deg ++;
    r += 1 * pm;
    scale += 0.2 * pm;
    if (r == 360) {
    pm = -1;
    }
    else if (r == 0) {
    pm = 1;
    }
}

function windowResized() {
    canvas = createCanvas(windowWidth, 720);
    canvas.parent('header-motion');
}
