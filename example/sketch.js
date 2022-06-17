let img;
  let x = 0.1;
  let y = 0.1;
  let easing = 0.07;
  
  function setup() {
    createCanvas(500, 500);
    noStroke();
    img = loadImage("eye.png");
  }
  
  function draw() {
    background(170, 130, 110);
    let targetX = mouseX;
    let dx = targetX - x;
    x += dx * easing;
  
    let targetY = mouseY;
    let dy = targetY - y;
    y += dy * easing;
  
 image(img, x, y, 400, 530);
  }

