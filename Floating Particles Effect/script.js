// https://www.youtube.com/watch?v=hotMX-pqjkQ  ---  Tuts Link

const canvas = document.getElementById("canvas1");
const ctx= canvas.getContext('2d');

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
let particleArray;

//create constructor function 


function Particle(x,y,directionX,directionY,size,color)
{
 this.x = x;
 this.y = y;
 this.size = size;
 this.directionX = directionX;
 this.directionY = directionY;
 this.color = color;

}

//add draw method to particle prototype
//  adding draw to prototye is efficient as only 
// one draw method will be refered by all particle instead of
//  creating draw method for each partilce in memory
Particle.prototype.draw = function(){
ctx.beginPath();
ctx.arc(this.x,this.y,this.size,0,Math.PI* 2,false);
// https://www.w3schools.com/tags/canvas_arc.asp


}