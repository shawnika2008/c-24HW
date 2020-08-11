class Paper {
  constructor() {
    var options = {
         isStatic:true,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.body = Bodies.circle(200,376,50,options);
    this.width = 50;
  
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    //var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    //rotate(angle); 
    ellipseMode(CENTER);
    //strokeWeight(4);
    //stroke("green");
    fill("yellow");
    ellipse(0, 0, this.width );
    pop();
  }
};
