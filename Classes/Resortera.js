class Resortera{
    constructor(bodyA, pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        //this.sling1 = loadImage("images/Catapulta.png");
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    fly(){
        this.rope.bodyA = null;
    }
    attached(body){
        this.rope.bodyA = body;
    }

    display(){
        if (this.rope.bodyA) {
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
      
            stroke(256, 256, 256);
            strokeWeight(4);
      
            line(pointB.x, pointB.y, pointA.x, pointA.y);
      
            pop();
        }
        
    }
}