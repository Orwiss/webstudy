let leng, aX, aY, aZ

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
  strokeWeight(0.3)
  leng = width / 4
  aX = random(10000)
  aY = random(10000)
  aZ = random(10000)
}

function draw() {
  //orbitControl()
  //background(240)
  
  //sphere(90)
  
  push()
  rotateX(map(noise(aX), 0, 1, 0, TAU))
  rotateY(map(noise(aY), 0, 1, 0, TAU))
  rotateZ(map(noise(aZ), 0, 1, 0, TAU))
  push()
  translate(0, 0, leng)
  circle(0, 0, 16)
  pop()
  pop()
  
  aX += 0.005
  aY += 0.005
  aZ += 0.005
}