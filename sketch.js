function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
}

function draw() {
  background(220);
  let chour = color(232, 172, 74);
  let cmin = color(30, 30, 50);
  let csec = color(7, 11, 245);

  noStroke();
  
  h = hour();
  m = minute();
  s = second();

  print(h + ":" + m + ":" + s);
  //hour
  fill(chour);
  hr = map(h, 0, 23, 0, 300);
  rect(200, 200, hr, 50);
  //minute
  fill(cmin);
  mr = map(m, 0, 59, 0, 300);
  rect(200, 300, mr, 50);
  //second
  fill(csec);
  sr = map(s, 0, 59, 0, 300);
  rect(200, 400, sr, 50);
}