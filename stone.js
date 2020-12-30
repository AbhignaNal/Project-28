class Stone{
    constructor(x, y, radius){
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x, y, radius, options);
        //this.x = x;
        //this.y = y;
        this.radius;
        this.image = loadImage("Plucking+mangoes/stone.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        //fill("black");
        //ellipse(0, 0, 50);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}