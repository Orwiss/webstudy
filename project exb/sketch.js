let num = 128, t = []

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight, WEBGL)
  let w = select('.project').width
  let h = select('.project').height
  resizeCanvas(w, h)
  noStroke()

  for(let i = 0; i < num; i++) {
    t.push(new twinkle(i))
  }

  camera(0, -180, 720, 0, 0, 0)
}

function draw() {
  background(200, 240, 240)

  for (let i = 0; i < num; i++) {
    t[i].draw()
  }
}

function twinkle(i) {
  this.w = random(20, 30)
  this.h = random(100, 160)
  this.a = random(PI)
  this.g = random(48, 216)
  this.c = color(0, this.g, 0)
  this.life =
  //this.n = map(this.g, 48, 216, -4, 4)
  this.n = random(64, 280)
  this.draw = function() {
    let x = cos(TAU / num * i + frameCount / 180) * this.n
    let y = 180
    let z = sin(TAU / num * i + frameCount / 180) * this.n

    push()
    fill(0, map(z, -280, 280, 24, 196), 0)
    translate(x, y, z)
    triangle(-this.w / 2, 0, this.w / 2, 0, map(sin(this.a + frameCount / 48), -1, 1, -this.w, this.w), -this.h)
    pop()
  }
}
