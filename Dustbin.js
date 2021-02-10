class Dustbin{
    constructor(x,y,w,h){
    var options = {
    isStatic:true,
    restitution:0.5,
friction:0.3,
density:0.4
   
    }
    this.x=x
    this.y=y
    this.w=w
    this.h=h
   
    this.bin=Bodies.rectangle(this.x,this.y,this.w,this.h,options);
    World.add(world,this.bin)
    
    }
    show(){
    var pos=this.bin.position;
   
    push()
    
    rectMode(CENTER)
    //imageMode(CENTER)
    fill("red")
    rect(pos.x,pos.y,this.w,this.h)
    pop()
    
    
    }
    }

