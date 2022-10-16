class Log{
    constructor(x, y, height, angle){
        var options = {
            friction: 1,
            restitution: 0.1,
            density: 0.8
        }
        this.body = Bodies.rectangle(x,y,20,height,options);
        this.width = 100;
        this.height = height;
        Matter.Body.setAngle(this.body,angle);
        Composite.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rectMode(CENTER);
        fill("brown");
        strokeWeight(2);
        stroke("red");
        translate(pos.x, pos.y);
        rotate(angle);
        rect(0, 0, this.width, this.height);
        pop();
    }
}
