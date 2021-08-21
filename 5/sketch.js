let font, txt, c;
let size = 720;
let p = [];

function preload() {
  font = loadFont("includes/demos-data/fonts/RobotoMono-Regular.otf"); // load font
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  textFont(font);
  textSize(size);
  fill(255);
  noStroke();
  background(0);
}

function draw() {
  background(0);
  if (frameCount % 180 == 1) {
    p.splice(0, p.length - 1);
    txt = char(random(65, 90)); // decide alphabet
    c = font.textToPoints(txt, (width / 2) - (textWidth(txt) / 2), (height / 2) + (textWidth(txt) / 2), size, {
      sampleFactor: .55 // density of particles
    }); // set points
  
    for (let i = 0; i < c.length; i++) {
      p.push(new Particle(c[i].x, c[i].y)); // push coordinate of every points into class
    }
  } 
 
  for (let i = 0; i < p.length; i++) {
    p[i].update();
    p[i].draw();
  }
} 
 
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.d = random(2, 10);
    this.rx = random(10000);
    this.ry = random(10000);
    this.sh = 600; // noise range
    this.sp = 32; // moving speed
    this.c = color(random(255), random(255), random(255));
  }
  
  update() {
    if (this.sh > 42) {
      this.sh -= 6; // gather particles
    }
    
    this.nx = map(noise(this.rx), 0, 1, -this.sh, this.sh);
    this.ny = map(noise(this.ry), 0, 1, -this.sh, this.sh);
    this.rx += this.sp / 1000;
    this.ry += this.sp / 1000; // noise of particles
    
    if (red(this.c) < 255) {
      this.c.setRed(red(this.c) + 1.25); // set red to white
    }
    if (green(this.c) < 255) {
      this.c.setGreen(green(this.c) + 1.25); // set green to white
    }
    if (blue(this.c) < 255) {
      this.c.setBlue(blue(this.c) + 1.25); // set blue to white
    }
  }
  
  draw() {
    fill(this.c);
    circle(this.x + this.nx, this.y + this.ny, this.d);
  }
}
