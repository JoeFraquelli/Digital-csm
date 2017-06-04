var bubbles = [];

function setup(){
  createCanvas(800,600);
  textSize(32);
  textAlign(CENTER);
  textFont("Arial Black");
  text("HAVE YOU REGISTERED?", width/2, height/2);
  for (var i = 0; i < 150; i++) {
    var x = random(width);
    var y = random(height);
    bubbles.push(new Bubble (x,y));
  }
}

function mousePressed(){
  for (var i = 0; i < bubbles.length; i++){
    bubbles[i].clicked();
  }
}

function draw(){
  textSize(32);
  textAlign(CENTER);
  textFont("Arial Black");
  text("HAVE YOU REGISTERED?", width/2, height/2);
  
  for (var i = 0; i < bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].display();
    bubbles[i].clicked();
   }
}

function Bubble(x,y) {
  this.x = x;
  this.y = y;
  this.col = color(246,59,59);
  
  this.display = function (){
    stroke(255);
    fill(this.col);
    // fill(246,59,59);
    text("NO", this.x , this.y )
    noStroke()
    noFill();
    ellipse(this.x, this.y, 24, 24);
    
    if(this.x > width || this.x < 0){
      
    }
    
  }
  
  this.clicked = function() {
    var d = dist(mouseX, mouseY, this.x, this.y);
    if(d < 24){
      this.col = color(84, 238, 67);
      text("YES", this.x, this.y);
      noStroke();
      noFill();
      ellipse(this.x, this.y, 24,24);
    } 
  }
  
  this.move = function (){
    this.x = this.x + random (-1,1);
    this.y = this.y + random (-1,1);
  }
}



