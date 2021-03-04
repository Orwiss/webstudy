let pm = 1;
let deg = 0;
let r = 0;
let scale = 50;

function setup() {
    var canvas = createCanvas(document.body.clientWidth, 720);
    canvas.parent('header-motion');
    noFill();
    stroke(255);
    strokeWeight(4);
}

function draw() {
    background(0);
    stroke(255);
    circle(width/2, height/2, 40);
    circle(mouseX, mouseY, 50);
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
