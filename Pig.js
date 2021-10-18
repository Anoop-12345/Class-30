class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity=255;
  }
display(){
//Console the pig's speed
  console.log(this.body.speed);
//If the pig speed is <3,the bird should be displayed
  if (this.body.speed<3){
super.display();
}
//else the bird should vanish
else
{
  World.remove(world,this.body);
  push();
  this.Visiblity=this.Visiblity-5;
  //Adding transparency to the pig
  tint(255,this.Visiblity);
  image(this.image,this.body.position.x,this.body.position.y,50,50);
  pop();
}


}
};