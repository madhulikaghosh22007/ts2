class Ball {
  constructor(x, y,r) {
    var options = {
       
        'frictionAir':0.005,
        'density':1.0
    }
    this.body = Bodies.circle(x, y, r, options);
    this.r=r
    
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    fill(0);
   ellipse(0, 0, this.r,this.r);
    pop();
    if(this.sling.bodyA){
      var pointA = this.sling.bodyA.position;
      var pointB = this.pointB;
      push();
      
      stroke(48,22,8);
      if(pointA.x < 220) {
          strokeWeight(7);
          line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
          line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
          image(this.sling3,pointA.x -30, pointA.y -10,15,30);
      }
      else{
          strokeWeight(3);
          line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
          line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
          image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
      }
     
      
      pop();
  
}
  }
};
