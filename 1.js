class Ball {
  constructor(x,y,w,h,vx,vy) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = vx;
    this.vy = vy;
  }

  function drawBall() {
    background(225);
  
  fill ('blue')
  ellipse(x,y,50,50);
  x = x + v;
  y = y + z;

if(x <= 0 || x > 400){
    v = v * -1 }
if(y <= 0 || y > 400){
    z = z * -1 }
  }
}
