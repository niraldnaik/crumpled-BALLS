class Paper{ constructor(x,y,r)
  { var options = { isStatic:false, restitution:0.4, friction:0.5, density:1.2 } 
  this.x=x 
  this.y=y 
  this.r=r 
  this.body=Bodies.circle(this.x,this.y,(this.r)/2,options); 
  World.add(world,this.body)} 
  show(){ 
    var pos=this.body.position; 
    var angle=this.body.angle; push() 
    translate(pos.x,pos.y) 
    rotate(angle) 
    rectMode(CENTER) 
    imageMode(CENTER) 
    ellipse(0,0,this.r,this.r) 
    pop() }
  
  }