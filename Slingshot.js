class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        //Load sling images
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    //Attach the bird to the slingshot after being released
    attach(body){
        this.sling.bodyA=body;
    }
    //Let the bird have null value after being released
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //Add position to the sling image
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            //Adding
            push()
            //Give thickness to the line
            strokeWeight(4);
            //Color the line
            stroke(68,39,20);
            //give location to the line
            line(pointA.x-25, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-25, pointA.y, pointB.x+30, pointB.y-3);
            //Give location to the image
            image(this.sling3,pointA.x-30,pointA.y-10,15,30);
            //Reverse
            pop();
        }
    }
    
}