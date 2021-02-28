class Octogon{
    constructor(x,y,sides,radius){

        var options ={
            isStatic : false
        }
     
        this.body = Bodies.polygon(x, y, sides, radius, (options));
        World.add(world,this.body);
        this.sides = sides;
        this.radius =radius;
        this.image = loadImage("octagon.png");
       // this.image.resize(20,20);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,50,50);
    }
}