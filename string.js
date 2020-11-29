class Strings
{
    constructor(bodyA,bodyB,offsetX,offsetY)
    {
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = 
        {
            bodyA : bodyA,
            bodyB : bodyB,
            pointB : { x : offsetX, y : offsetY},
        }

        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }

    display()
    {
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
  
        stroke("white");
        strokeWeight(2);
        var pos1 = pointA.x;
        var pos11 = pointA.y;

        var pos2 = pointB.x+this.offsetX;
        var pos22 = pointB.y+this.offsetY;

        line(pos1, pos11, pos2, pos22);
    }

}
