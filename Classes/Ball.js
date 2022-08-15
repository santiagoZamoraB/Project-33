class Ball{

    constructor(x,y,r){
      var options ={
        'restitution': 0.8, 
        'friction': 0.4,
        'density':1.0
      }
      this.x = x;
      this.y = y;
      this.r = r
      this.image = loadImage("images/bowling.png");
      this.body = Bodies.circle(this.x, this.y, (this.r)/2, options);
      World.add(world, this.body);
    }

    display(){
      var p = this.body.position;
      push();
        translate(p.x,p.y)
        fill(256,256,256);
        imageMode(CENTER);
        image(this.image,0,0,40,50);
      pop();
    }
}