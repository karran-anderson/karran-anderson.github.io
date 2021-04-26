var circlex = 0; // 

var pointer = 1;

var fade;
var fadeAmount = 1;

let box;

let sphere;


function preload(){
   img1 = loadImage('amongus1.png');
   img2 = loadImage('amongus2.png');
  img3 = loadImage('speech_baloon.png');
  
  bubble = loadImage('thought_bubble.png');
  
    ship = loadImage('space_ship.png');
}


function setup() {
  createCanvas(400, 400);
  textSize(25);
  
  box=new Square();
  
  sphere=new Circle();
  //image(img, 0, 0);
  
}

function mousePressed() {

  if(pointer >= 0 || pointer <=5){
    pointer = pointer+1;
  }

  
}

function draw() {
  background("rgb(240,236,233)");


  
  
if (pointer==1){
    drawScene1();
}
  else if(pointer==2){
    drawScene2();
  } 
  else if(pointer==3){
    drawScene3();
  } 
  else if(pointer==4){
    drawScene4();
  } 
   else if(pointer==5){
    drawScene5();
  }else if(pointer > 5){
    pointer =1;
  } 
  
  


function drawScene1() {
  // text: I've always enjoyed sharing information with others, but not so much
  // the speaking.
   
  image(img1,32,150);
  img1.resize(150,100);
  
  // main character
  /*push();
  
  fill("blue");
  noStroke();
  arc(72,55,45,45,PI,0);
  square(54,55,40);
 
  pop();
  */
  image(img2,274,150);
  img2.resize(100,100);
  
   image(img3,136,110);
  img3.resize(70,70);
  
  
  
  
   fill(255);
 noStroke()
   rect(0,285,width,height/3);
  
  
    fill(0,0,0);
    
  textSize(13);
    text("I've always enjoyed sharing information with others", 20, 300);
    text(", but not so much the speaking", 20, 310);

}
 
  function drawScene2(){
  
    // text: until one day I was visited by an extra terrestrial.
  
     
     fill("white");
 stroke(0);
   rect(0,190,width/7,height/6);
    fill("white");
 stroke(0);
   rect(42,190,width/7,height/6);
    rect(84,190,width/7,height/6);
    rect(126,190,width/7,height/6);
     rect(168,190,width/7,height/6);
     rect(210,190,width/7,height/6);
     rect(252,190,width/7,height/6);
    rect(294,190,width/7,height/6);
    rect(336,190,width/7,height/6);
    
    //image(ship,200,134);
  //ship.resize(100,100);
   
    push();
    
    translate(mouseX-200,mouseY-200);
    
    fill("blue");
    stroke(0);
    arc(248,182,65,50,PI,0);
    
    fill("grey");
    
    beginShape();
    vertex(214,182);
    quadraticVertex(205,191,200,185);
    vertex(208,204);
    vertex(224,210);
    vertex(232,210);
    vertex(248,211);
    vertex(278,208);
    vertex(292,204);
    vertex(297,188);
    vertex(282,180);
    
    endShape();
    
    pop();
    
    
    
     push(); // light start
   translate(mouseX-200,mouseY-200);
  
  noFill();
    
  
  
  
  fill(255,255,100,2);
  noStroke();
  
  
  for(i=0;i<100;i++){
    ellipse(261,300,160,160,i*3);
    
  }
  
 stroke(0);
  
 
    
  pop(); // light end
    
    
    
    image(img1,166,150);
  img1.resize(80,75);
    
   
    
    fill(0,0,0);
   
  textSize(11);
    text("until one day I was visited by an extra terrestrial.", 20, 300);
   // text(", but not so much the speaking", 20, 310);
    
  
}
  function drawScene3(){
  // who flew us into outer space
   background(0);
   let x = random(width);
  let y = random(height);


  let r = random(0);
  let g = random(50);
  let b = random(100);

  background(r, g, b, 10);

  // stars
  noStroke();
  fill(255, 200, 0);
  ellipse(x, y, 5, 5);
  
  //Step 4: Create hand moving shooting star


  // hand star
  fill(250, 250, 0);
  stroke(250, 250, 250);
  
    //ellipse(mouseX, mouseY, 5, 5);
   //image(ship,mouseX,mouseY);
  // ship.resize(100,100);
    
    // ship translate start
    
    push();
    translate(mouseX-200,mouseY-200);
    
    fill("blue");
    stroke(0);
    arc(248,182,65,50,PI,0);
    
    fill("grey");
    
    beginShape();
    vertex(214,182);
    quadraticVertex(205,191,200,185);
    vertex(208,204);
    vertex(224,210);
    vertex(232,210);
    vertex(248,211);
    vertex(278,208);
    vertex(292,204);
    vertex(297,188);
    vertex(282,180);
    
    endShape();
    
    pop();
    
    
    
    // ship translate end
    
    
    
    
    
    
    
    
    
    
    
    
  // shooting star *
  fill(mouseX, 200, 150, 200); //* 
  ellipse(circlex, mouseY, 5, 5); //*
  if(circlex > width){
    circlex = 0
  }
  circlex = circlex + 5; //*
  
    fill(255,255,255);
    
  textSize(11);
    text("who flew me into outer space", 20, 300);
    
}
  function drawScene4(){
  // to the home planet.
   background(0);
    
    fill("rgb(142,217,210)");
    circle(188,154,100);
    
    push();
   
    fill("rgb(236,34,93)");
    beginShape();
    
    vertex(160,135);
    vertex(160,152);
    vertex(182,159);
    vertex(204,149);
    
    endShape();
    
    arc(155,174,10,5,0,PI/2);
    
    arc(203,125,10,5,0,PI);
    
    circle(196,184,10);
    
    
    
    pop();
    
    
    
    
  fill(255,255,255);
    // text("Choose 1!", 150, 100);
  textSize(11);
    // text("I've always enjoyed sharing information with others", 20, 300);
    text("to the home planet.", 20, 310);

  
}
  
  function drawScene5(){
  // where i learned to speak with my mind.
   
    
     
    
    
    push(); // alien
    
    image(bubble,285,42);
  bubble.resize(50,50);
    
    fill("blue");
    
    circle(219,79,10); // antenae left
    circle(268,79,10); // antenae right
    
    fill(0);
    arc(236,106,10,5,0,PI);
    arc(253,104,10,5,0,PI);
    
    noFill();
    stroke(0);
    arc(249,109,50,25,0,PI*2); // head
    fill("grey");
    arc(254,182,50,100,0,PI*2); // body
    fill('green');
    noStroke();
    beginShape();
    vertex(241,120);
    vertex(246,134);
    vertex(259,134);
    vertex(260,119);
    endShape(CLOSE);
    
    
    stroke(0);
    beginShape();
    vertex(221,82);
    vertex(232,98);
    
    endShape();
    
    beginShape();
    vertex(255,96);
    vertex(266,80);
    
    endShape();
    
    fill('orange');
    stroke('yellow');
    beginShape();
    vertex(238,245);
    vertex(235,266);
    vertex(257,254);
    vertex(261,273);
    vertex(272,250);
    vertex(291,267);
    vertex(278,232);
    vertex(258,245);
    
    
    endShape(CLOSE);
    
    
    pop();
    
    
    image(bubble,138,150);
  bubble.resize(50,50);
    
    
    image(img1,38,184);
  img1.resize(150,100);
    
    fill("rgb(236,34,93)");
 
   rect(0,285,width,height/3.5);
    
  fill(255,255,255);
    // text("Choose 1!", 150, 100);
  textSize(11);
    text("where I learned to speak with my mind.", 20, 320);
  
}

  console.log(pointer);
  console.log(mouseX+" "+mouseY);
} // end of draw