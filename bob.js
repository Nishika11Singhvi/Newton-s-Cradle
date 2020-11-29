class Bobs
{
    constructor(x, y, radius) 
    {
        var options = 
        {
            'restitution': 0.8,
            'friction': 0.3,
            'density': 1.2,
            'isStatic' : false
        }
        this.radius = radius;
        this.body = Bodies.circle(x, y, this.radius, options);
       
        
        World.add(world, this.body);
    }

    display() 
    {
        var pos = this.body.position;
        strokeWeight(0.0001);
        stroke("magenta");
        fill("magenta");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
};


  