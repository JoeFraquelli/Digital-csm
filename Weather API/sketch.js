function setup() {
   createCanvas(windowWidth , windowHeight);
   
   background(240);
   
   var button1 = createButton ('London')
    button1.position(50,20);
    button1.mousePressed( function(){
      loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22London%2C%20UK%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", weatherLoaded);
    });
    
  var button2 = createButton ('San Francisco')  
  button2.position(150,20);
  button2.mousePressed(function(){
    loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22San%20Francisco%2C%20CA%2C%20US%20%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", weatherLoaded);
  });
  
  var button3 = createButton ('Tokyo')
  button3.position(300, 20);
  button3.mousePressed(function(){
    loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Tokyo%2C%20Japan%20%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", weatherLoaded);
  });
}

var ball;

function weatherLoaded(data){
  
  ball = new Ball();
  
  
   var temp = data.query.results.channel.item.condition.temp;
   var windSpeed = data.query.results.channel.wind.speed;
   var windDirection = data.query.results.channel.wind.direction;
   
  var tempD2H = data.query.results.channel.item.forecast[0].high;
  var tempD2L = data.query.results.channel.item.forecast[0].low;
   
  var windSpeedmapped = map(windSpeed,0, 50, 0 , 75);
  
  ball.speed.x = windSpeedmapped;
  ball.speed.y = windSpeedmapped;
   
   background (240);
   
  textSize(15);
  textFont("Helvetica");
  textAlign(LEFT);
  
  fill(0);
  text("Windspeed "+ windSpeed + " Mph ", 30, windowHeight - 50);
  fill(0);
  text("Temperature "+ temp + " F", 30, windowHeight - 30);
  fill(0);
  text("Winddirection "+ windDirection + " ° " , 30, windowHeight - 10);
   
  stroke(3);
  noFill();
  ellipse(width/2, height/2, temp, temp);
}



function draw() {
  if(ball) {
    ball.draw();
  }
}
   
function Ball(){
  this.x = 0;
  this.y = 0;
 
    // this.c= color(random(255), random(255), random(255));
    this.speed = {
      x:0,
      y:0,
 };
 
 this.draw = function(){
   stroke(1);
   fill(255);
   ellipse(this.x, this.y,10,10);
    this.x = this.x + this.speed.x;
    this.y = this.y +this.speed.y;
    
    
    if(this.y > height || this.y <0 ){
    this.speed.y  = this.speed.y * -1;
    }
    
    if(this.x > width || this.x <0){
      this.speed.x = this.speed.x *-1;
    }
      
    
    }
   
  }
  
  
  
  
