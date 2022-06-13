let p = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeCap(SQUARE);
  
  for (let i = 0; i < width * height / 256; i ++) p.push(new po(random(width), random(height)));
}

function draw() {
  background(12);
  
  for (let i in p) {
    if (dist(p[i].x, p[i].y, mouseX, mouseY) > p[i].l / 2 + 64) p[i].draw();
  }
}

function po(x, y) {
  this.x = x;
  this.y = y;
  this.l = random(24, 48);
  this.w = random(0.2, 8);
  this.c = random(255);
  //this.c = color(random(255), random(255), random(255));
  this.draw = function() {
    push();
    translate(this.x, this.y);
    rotate(atan2(this.y - mouseY, this.x - mouseX) - 0.72);
    //stroke(this.c);
    stroke(this.c);
    strokeWeight(this.w);
    line(-this.l / 2, 0, this.l / 2, 0);
    pop();
  }
}