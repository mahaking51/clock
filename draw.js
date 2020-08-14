const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
clock = new Clock();

(function setup(){
loop=window.setInterval(()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    console.log(clock.angleHour,clock.angleMin,clock.angleSec);
    document.getElementById('submitbut').addEventListener('click',function(){
        clock.hour=parseInt(document.getElementById('hour').value)%12;
        clock.min=parseInt(document.getElementById('min').value);
        clock.sec=parseInt(document.getElementById('sec').value);
        clock.angleSec=clock.sec*changAngleSec;
        clock.angleMin=(clock.min*Math.PI/30)+((clock.sec/60)*Math.PI/30);
        clock.angleHour=(clock.hour*Math.PI/6)+(clock.min/60)*Math.PI/6;
    
    })
    
    clock.draw();
    clock.update();
},1000)
}())

