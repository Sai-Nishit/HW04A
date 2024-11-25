function setup() {
  createCanvas(800, 800);
  noLoop();
  generateKusamaPattern();
}

function generateKusamaPattern() {
  background(30); 

  let layers = 5; 
  let maxDots = 200;

  for (let l = 0; l < layers; l++) {
    let density = random(0.02, 0.08); 
    let baseColor = color(random(255), random(255), random(255), 150);

    for (let i = 0; i < maxDots; i++) {
      let x = random(width); 
      let y = random(height);
      let size = noise(x * density, y * density) * random(10, 80);

      let brightnessOffset = map(size, 10, 80, 50, 200);
      let dotColor = color(
        red(baseColor) + brightnessOffset,
        green(baseColor) + brightnessOffset,
        blue(baseColor) + brightnessOffset,
        200
      );

      fill(dotColor);
      noStroke();
      ellipse(x, y, size);
    }
  }

  drawCentralPumpkin();
}

function drawCentralPumpkin() {
  push();
  translate(width / 2, height / 2);
  let pumpkinColor = color(255, 200, 0);
  let pumpkinOutline = color(0);
  fill(pumpkinColor);
  stroke(pumpkinOutline);
  strokeWeight(3);

  beginShape();
  for (let i = 0; i < TWO_PI; i += 0.1) {
    let r = 150 + sin(i * 8) * 30;
    let x = cos(i) * r;
    let y = sin(i) * r;
    vertex(x, y);
  }
  endShape(CLOSE);

  for (let i = 0; i < 500; i++) {
    let x = random(-150, 150);
    let y = random(-150, 150);
    let size = random(5, 15);
    let alpha = map(dist(x, y, 0, 0), 0, 150, 255, 50);
    fill(0, alpha);
    noStroke();
    ellipse(x, y, size);
  }
  pop();
}
