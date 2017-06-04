var bubbles = [];

function setup(){
  createCanvas(900,600);
  textSize(32);
  textAlign(CENTER);
  textFont("Arial Black");
  // text("HAVE YOU REGISTERED?", width/2, height/2);
  for (var i = 0; i < 150; i++) {
    var x = random(width);
    var y = random(height);
    bubbles.push(new Bubble (x,y));
  }
}

function mouseClicked(){
  for (var i = 0; i < bubbles.length; i++){
    bubbles[i].clicked();
    bubbles[i].nomove();
  }
}

function draw(){
     

  textSize(32);
  textAlign(CENTER);
  textFont("Arial Black");

  for (var i = 0; i < bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].display();
   }

  fill(0);
  text("HAVE YOU REGISTERED?", width/2, height/2);
}

function Bubble(x,y) {
  this.x = x;
  this.y = y;
  this.pressed = false;
  
  // this.col = color(246,59,59);
  
  this.display = function (){
    stroke(255);
    
    if(this.pressed) {
      fill(84, 238, 67)
      text("YES", this.x , this.y )  
    } else {
      fill(246,59,59);
      text("NO", this.x , this.y )
    }
    
    noStroke()
    noFill();
    ellipse(this.x, this.y, 24, 24);
    
    if(this.x > width || this.x < 0){
      
    }
    
  }
  
  this.clicked = function() {
    var d = dist(mouseX, mouseY, this.x, this.y);
    if(d < 24){
      this.pressed = true;
      
      // text("YES", this.x, this.y);
      // noStroke();
      // noFill();
      // ellipse(this.x, this.y, 24,24);
      // this.col = color(84, 238, 67);
      
    } 
  }
  
  this.nomove = function  (){
    this.x = this.x + random (0,0);
    this.y = this.y + random (0,0);
  }
  
  this.move = function (){
    this.x = this.x + random (-1,1);
    this.y = this.y + random (-1,1);
    
    if(this.x < 0) {
      this.x = 0;
    }
    
    if(this.x > width) {
      this.x = width;
    }
    
    if(this.y < 0 ){
      this.y = 0;
    }
    
    if(this.y > height){
      this.y = height;
    }
 
  }
}



