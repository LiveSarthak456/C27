class SlingShot{
    
    constructor(bodyA, bodyB){

        var options ={

            bodyA : bodyA,
            bodyB : bodyB,
            length : 10,
            stiffness : 0.4

        }     


    this.SlingShot = Constraint.create(options);
    World.add(world, this.SlingShot);
        
    }

    display(){

        var posA = this.SlingShot.bodyA.position;
        var posB = this.SlingShot.bodyB.position;

        line(posA.x,posA.y,posB.y,posB.y)//line(x1,y1,x2,y2)

    }
    

}