 function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
  button = createButton('Time');
  button.mouseClicked(voice);
}

function draw() {
  background(0);
  translate(250,250);
  rotate(-90);

  let hr = hour();
  let min = minute();
  let sec = second();

  strokeWeight(6);
  stroke(160, 104, 255);
  noFill();
  let secondAngle = map(sec, 0, 60, 0, 360);
  arc(0, 0, 270, 270, 0, secondAngle);

  stroke(255,146,227);
  let minuteAngle = map(min, 0, 60, 0, 360);
  arc(0, 0, 250, 250, 0, minuteAngle);

  stroke(255);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 230, 230, 0, hourAngle);
  
  push();
  rotate(secondAngle);
  stroke(160, 104, 255);
  line(10, 0, 100, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke(255,146,227);
  line(10, 0, 80, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke(255);
  line(10, 0, 60, 0);
  pop();

  stroke(255);
  point(0, 0);
  
  rotate(90);
  let m = month()
  let d = day()
  let y = year()
  strokeWeight(4);
  stroke(255,146,227);
  textSize(35);  
  text(d + ' / ' + m + ' / ' + y, -88,-210)
  strokeWeight(4);
  stroke(160, 104, 255);
  textSize(35);
  text(hr%12 + ' : ' + min, -55,-165);
  if(hr>=12%12){
  text('pm',37,-165);
  }
  else{
    text('am',35,-165);
  }
  
  let col = color(160, 104, 255);
  button.style('font-size', '35px');
  button.style('background-color', col);
  button.position(205,420);
}

function voice(){
 let voice = new p5.Speech();
 let a = hour()%12;
 let b = minute();
 let c = second();
 voice.speak('The time is'+a+' '+b);
 if(a>=12%12){
 voice.speak('PM');
  }
 else{
   voice.speak('AM');
  }
}