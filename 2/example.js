let pm = 1;
let deg = 0;
let r = 0;
let scale = 50;

function setup() {
  createCanvas(displayWidth, displayHeight);
  noFill();
  stroke(255);
  strokeWeight(4);
}

function draw() {
  background(0);

  circle(mouseX, mouseY, 50);
  circle(mouseX + (cos(radians(deg)) * r), mouseY + (sin(radians(deg)) * r), scale);
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
