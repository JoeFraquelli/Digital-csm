function setup(){
  createCanvas(500, 500);
  background(240);
}


var ball = {
  x:  0,
  y:  250,
  speed: {
    x:1,
    y:3,
  },
  draw: function(){
    this.x = this.x + this.speed.x;
    this.y = this.y + this.speed.y;
    
    if(this.y > height || this.y <0 ){
    this.speed.y  = this.speed.y * -1;
    }
    
    if(this.x > width || this.x <0){
      this.speed.x = this.speed.x *-1;
    }
    
    ellipse(this.x, this.y, 10 ,10);
  }
    
  };


function draw(){
  
   ball.draw();
   
  
}

