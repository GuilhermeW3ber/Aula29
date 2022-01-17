class Link{
    costructor(bodyA,pointB){
        var options={
            bodyA:bodyA.body,
            bodyB:pointB,
            stiffness:0.04,
            length:5
        }
        this.link=Constraint.create(options);
        World.add(world,this.link);
    }
}