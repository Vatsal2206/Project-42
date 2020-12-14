class Drop{
    constructor(x,y,r){
        var R_op = {
          'friction':0.1
        }

        this.x = x;
        this.y = y;
        this.r = r;


        this.ball = Bodies.circle(x,y,r,R_op);

        World.add(world,this.ball)

    }
    updateY(){
        if(this.ball.position.y > height){
            Matter.Body.setPosition(this.ball,{x : random(0,700) , y : 5})
        }

    }
    display(){
        var pos = this.ball.position;

        ellipseMode(CENTER)
        fill(14, 23, 120)
        ellipse(pos.x,pos.y,this.r,this.r)


       

    }
}