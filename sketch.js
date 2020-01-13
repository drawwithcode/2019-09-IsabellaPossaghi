var value = 0;
var colors = ["#bcbbe5", "#467f16", "#e776b5", "#85ddce", "#efb865"]

//ball
let cx, cy

function preload() {
  snow_1 = loadImage("./assets/snow_1.png");
  snow_2 = loadImage("./assets/snow_2.png");
  clouds = loadImage("./assets/clouds.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  imageMode(CENTER)

  setShakeThreshold(70); // by defaults equals to 30, a little more sensitive
  frameRate(12);

  //ball
  cx = width / 2
  cy = height / 2


}

function draw() {
  background(value);
  image(clouds, width/2,100, 500, 300)
  fill(255 - value);
  textSize(150 - value);
  textAlign(CENTER);
  //text(value,width/2,height/2+30)
  text("a lucky snowflake", width/2,height/2+30)



  //ball
  cx += map(rotationY, -90, 90, -100, 100)
  cy += map(rotationX, -90, 90, -100, 100)
  if (cx >= width) cx = 0
  else if (cx <= 0) cx = width
  if (cy >= height) cy = 0
  else if (cy <= 0) cy = height

  let pulse = sin(frameCount / 20) * 50


  for (var i = 0; i < touches.length; i++) {
   // One color per finger
   fill(colors[i]);
   // Draw a circle at each finger
   rect(touches[i].x, touches[i].y, 100, 100);
 }


  //touches
  if (touches.length==0) {
    fill(50, 250, 70)
    noStroke()
    //ellipse(cx, cy, 50 + abs(rotationX*5) + pulse, 50 + abs(rotationX*5) + pulse) //with abs() the number is always positive
    image(snow_1, cx, cy, 150 + abs(rotationX*5) + pulse, 150 + abs(rotationX*5) + pulse)

  } else {

    fill(50, 250, 70)
    strokeWeight(8)
    stroke("peachpuff")
    //ellipse(cx, cy, 50 + abs(rotationX*5) + pulse, 50 + abs(rotationX*5) + pulse)
    image(snow_2, cx, cy, 150 + abs(rotationX*5) + pulse, 150 + abs(rotationX*5) + pulse)

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
