class drops{
    constructor(x,y,5,height,options){
        friction:0
        reistitution:0.1;
    }
}

 this.rain = Bodies.circle(x,y,5,options);
 var maxDrops=100;
 for(var i=0; i<maxDrops; i++){
     drops.push(new createDrop(random(0,400),random(0,400)));
 }

update(){
    if(this.rain.position.y >height){
        Matter.Body.setPositon(this.rain, {x:random(0,400), y:random(0,400)})
    }
}

