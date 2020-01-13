var value = 0;


//ball
let cx, cy

function preload() {
  snow_1 = loadImage("./assets/snow_1.png");
  snow_3 = loadImage("./assets/snow_3.png");
  clouds = loadImage("./assets/clouds.png");
  tree = loadImage("./assets/tree.png")
  deer = loadImage("./assets/deer.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  imageMode(CENTER)

  setShakeThreshold(40); // by defaults equals to 30, a little more sensitive
  frameRate(12);

  //ball
  cx = width / 2
  cy = height / 2


}

function draw() {

  //background images
  image(clouds, width / 2, 100, 800, 600)
  image(tree, width / 2, 1100, windowWidth, 800)
  background(255, 255 - value / 2);

  fill(0 + value);
  //textSize(150 - value);
  textSize(50);
  textAlign(CENTER);
  //text(value,width/2,height/2+30)
  textFont("VT323");
  text("move your device to control the snowflake", width / 2, 100)
  text("tap to make a reindeer appear", width / 2, 140)



  //ball
  cx += map(rotationY, -90, 90, -100, 100)
  cy += map(rotationX, -90, 90, -100, 100)
  if (cx >= width) cx = 0
  else if (cx <= 0) cx = width
  if (cy >= height) cy = 0
  else if (cy <= 0) cy = height

  let pulse = sin(frameCount / 20) * 50


  // a reindeer appears when you touch the screen
  for (var i = 0; i < touches.length; i++) {

    image(deer, touches[i].x, touches[i].y, 100, 100)

  }


  // the snowflake changes when you touch the screen
  if (touches.length == 0) {
    //with abs() the number is always positive
    image(snow_1, cx, cy, 20 + abs(rotationX * 5) + pulse, 20 + abs(rotationX * 5) + pulse)
  } else {
    image(snow_3, cx, cy, 20 + abs(rotationX * 5) + pulse, 20 + abs(rotationX * 5) + pulse)
  }
}


function deviceShaken() {
  value = value + 1;
  if (value > 255) {
    value = 0;
  }
}

function touchEnded(event) {
  DeviceOrientationEvent.requestPermission()
}

function deviceMoved() {
  value++
}

function touchMoved() {
  return false;
}
