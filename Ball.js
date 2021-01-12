class Ball
{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.8,
            density:0.04,
            friction:1.
        }
      this.x=x;
      this.y=y;
      this.radius = 100;
      
      this.body=Bodies.circle(x,y,100,options);
      World.add(world,this.body);
        
    }
    display()
    {
      var pos=this.body.position;
      var angle=this.body.angle;

      push ();
      translate(pos.x,pos.y);
      rotate(angle);     
      ellipseMode(CENTER);
      strokeWeight(3);
      stroke("black");
      fill(192,192,192);
     ellipse(0,0,100,100);
     // console.log("A");
      pop();
    }
};