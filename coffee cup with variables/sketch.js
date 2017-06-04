function setup() {
  createCanvas(680,980);
  background(169,160,153);
  
  s="Cappuccino"
  fill(255);
  text(s,170,75,100,100);
  
   s="Latte"
  fill(255);
  text(s,352,75,100,100);
  
   s="Americano"
  fill(255);
  text(s,510,75,100,100);
}

function draw() {
  fill(45,34,32);
  strokeWeight(0);
  quad(213,613,560,337,680,477,680,1164);
  
  
  // inner scauer
  fill(169,160,153);
  stroke(3);
  strokeWeight(0);
  ellipse(386.5,475,436,436);
  
  
   
     // cup shadow on saucer
  fill(45,34,32);
  noStroke();
  strokeWeight(0);
  arc(450,510,310,400, -0.6, PI+0.6);
  
    // scauer white
  fill(229,232,239,0);
  stroke(229,232,239);
  strokeWeight(16);
  ellipse(386.5,475,460,460);
  
  
  // shadow on whote saucer 
  fill(169,160,153,0);
  stroke(169,160,153);
  strokeWeight(16);
  arc(386.5,475,460,460, 0, PI/2.12);
  

  
 
   //handle
  fill(169,160,153);
  stroke(0);
  strokeWeight(0);
  ellipse(560 ,425, 170, 175);
  
     fill(229,232,239);
  
    arc(560 ,425, 170, 175, PI, PI+PI/0.5, CHORD);

  
  
  // handle shadow
  fill(45,34,32);
  stroke(0);
  strokeWeight(0);
  ellipse(560 ,440, 100,100);
  

 
   
  // cup
  fill(229,232,239);
  stroke(0);
  strokeWeight(0);
  arc(386.5, 410, 325, 402, -0.6, PI+0.6)
  
  
  
  // cup shadow
  fill(169,160,153);
  stroke(0);
  strokeWeight(0);
  arc(386.5, 410, 327, 402, -0.6, PI-PI/2.75)
  
  fill(169,160,153);
  stroke(0);
  strokeWeight(0);
  // arc(370, 534, 165, 200, -0.6, PI+0.6 );
  
  
 
  
  // cup
  fill(169,160,153);
  stroke(229,232,239);
  strokeWeight(1);
  ellipse(386.5,380,306 ,306);
  
 

  // shadow onto coffee
  fill(45,34,32);
  stroke(45,34,32);
  strokeWeight(8);
  // ellipse(386.5,404,306,247);
  
  
  //coffee
  fill(169,160,153);
  noStroke();
  strokeWeight(8);
  ellipse(415,414,235,235);
  
    // cup bottom
  fill(45,34,32);
  stroke(45,34,32);
  strokeWeight(0);
  arc(386.5,500,185,150, PI, PI+PI);
  
  fill(45,34,32);
  stroke(45,34,32);
  strokeWeight(0);
  arc(386.5,500,185,50, 0, PI);
  

  if (mouseX>170 && mouseX<236 && mouseY > 70 && mouseY < 90){
   
  // Cappunicco
    // shadow onto coffee
  fill(45,34,32);
  stroke(45,34,32);
  strokeWeight(8);
  ellipse(386.5,404,306,247);
  fill(212,126,7);
  noStroke();
  strokeWeight(8);
  ellipse(415,414,235,235);
  
  fill(229,232,239);
  noStroke();
  strokeWeight(8);
  ellipse(415,414,200,205);
  }
  
  if(mouseX>352 && mouseX<385 && mouseY > 70 && mouseY < 90){
    
    // Latte
    // shadow onto coffee
  fill(45,34,32);
  stroke(45,34,32);
  strokeWeight(8);
  ellipse(386.5,404,306,247);
  fill(212,126,7);
  noStroke();
  strokeWeight(8);
  ellipse(415,414,235,235);
  
  fill(229,232,239);
  stroke(229,232,239);
  strokeWeight(15);
  line(420,500, 452, 373);
  line(420,500, 400, 470);
  line(420,500, 460, 470);
  line(430, 460, 400, 423);
  line(430, 460, 480, 423);
  line(438,420, 406, 385);
  
  fill(229,232,239,0);
  stroke(229,232,239);
  strokeWeight(8);
  arc(415,414,235,235,0,PI+PI);
  
  }
  
  if (mouseX>510 && mouseX<572 && mouseY > 70 && mouseY < 90){
    
    //AMERICANO
     // shadow onto coffee
  fill(45,34,32);
  stroke(45,34,32);
  strokeWeight(8);
  ellipse(386.5,404,306,247);
  
  fill(45,34,32);
  noStroke();
  strokeWeight(8);
  ellipse(415,414,235,235);
  
  fill(212,126,7);
  noStroke();
  arc(430,412, 215,222, 0-PI/3, PI/2+PI/6);
  
  fill(45,34,32);
  stroke(45,34,32);
  ellipse(430,412, 20,14);
  
  fill(45,34,32);
  stroke(45,34,32);
  ellipse(385,502, 20,14);
  ellipse(445,389, 10,5);
  ellipse(524, 412, 8,7);
  ellipse(489, 482, 8,7);
  ellipse( 512, 452, 10,12);
    
  }

  // cup
   fill(229,232,239,0);
  stroke(229,232,239);
  strokeWeight(20);
  ellipse(386.5,380,306 ,306);
  
  
}


