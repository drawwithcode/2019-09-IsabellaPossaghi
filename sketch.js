var value = 0;

//ball
let cx, cy

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);

  // by defaults equals to 30
  setShakeThreshold(10);
  frameRate(12);

  //ball
  cx = width / 2
  cy = height / 2
}

function draw() {
  background(value);
  fill(255-value);
  textSize(90);
  textAlign(CENTER);
  text(value,width/2,height/2+30)

  //ball
  cx += map(rotationY, -90, 90, -100, 100)
  cy += map(rotationX, -90, 90, -100, 100)
  if (cx >= width) cx = 0
  else if (cx <= 0) cx = width
  if (cy >= height) cy = 0
  else if (cy <= 0) cy = height

  const pulse = sin(frameCount / 20) * 50
  fill(sin(frameCount/60) * 30 + pulse, 250, 70)
  noStroke()
  ellipse(cx, cy, 50 + abs(rotationX*5) + pulse, 50 + abs(rotationX*5) + pulse)
}

function deviceShaken() {
  value = value + 1;
  if (value > 147, 112, 219) {
    value = 0;
  }
}

function touchEnded(event) {
  DeviceOrientationEvent.requestPermission()
}

function deviceMoved() {
  value++
}
