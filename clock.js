function drawCircles(x,y,r){
ctx.lineWidth=7.5;
ctx.beginPath();
ctx.arc(x,y,r,0,2*Math.PI);
ctx.stroke();
ctx.closePath();
}
function drawLine(xi,yi,xf,yf,thickness,angle){
    ctx.lineWidth=thickness;
    ctx.save();
    ctx.beginPath();
    ctx.translate(400, 400);
    ctx.rotate(angle);
    ctx.translate(-400, -400);
    ctx.moveTo(xi,yi)
    ctx.lineTo(xf,yf)
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
}

function Clock(){
    time=new Date()
    this.hour=time.getHours()%12;
    this.min=time.getMinutes();
    this.sec=time.getMinutes();
    changAngleSec=Math.PI/30
    changeAngleMin=Math.PI/1800;
    changeAngleHour=Math.PI/43200;
    this.angleSec=this.sec*changAngleSec;
    this.angleMin=(this.min*Math.PI/30)+((this.sec/60)*Math.PI/30);
    this.angleHour=(this.hour*Math.PI/6)+(this.min/60)*Math.PI/6;

    this.draw=function(){
        
        drawCircles(400,400,200);
        drawLine(400,400,400,208,3,this.angleSec);
        drawLine(400,400,400,210,6,this.angleMin);
        drawLine(400,400,400,270,9,this.angleHour);
    }
    this.update=function(){
        this.angleSec+=changAngleSec;
        this.angleMin+=changeAngleMin;
        this.angleHour+=changeAngleHour;
    }
}