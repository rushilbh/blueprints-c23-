class Ground {

    constructor (x,y,width,height){

        var properties = {
            isStatic : true 
        }
    this.body = Bodies.rectangle(x,y,width,height,properties);
     World.add (world,this.body);
     this.width  = width;
     this.height = height;
    }

 display(){

    var pos = this.body.position;
    rectMode( CENTER );
    fill("red");
    rect( pos.x , pos.y  ,this.width,  this.height);

 }
    

}