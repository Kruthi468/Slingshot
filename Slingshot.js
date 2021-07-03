class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.slingS = Constraint.create(options);
        World.add(world, this.slingS);
    }
fly(){
    this.slingS.bodyA=null;
}
    display(){
        var pointA = this.slingS.bodyA.Position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}