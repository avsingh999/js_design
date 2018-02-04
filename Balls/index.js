var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillStyle = "whiet";
c.lineWidth = 5;
// c.fill.border="white";
// c.fill();
// c.style.border = "5px";
// 
function Circle(x, y, dx, dy, radius){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy= dy;
	this.radius = radius;


	this.draw = function(){
		// console.log("DSfsd")
		c.beginPath();
		// c.clearRect(0, 0,innerWidth,innerHeight);
		c.arc (this.x,this.y,this.radius,0, Math.PI*2,false);
		// c.strokeStyle = "blue";
		c.stroke();
		c.strokeStyle = "blue";
		c.fill();
	} 
	this.update = function(){
		if(this.x+this.radius > innerWidth || this.x-this.radius<0 ){

				this.dx =- this.dx;
		}
		if(this.y+this.radius > innerHeight || this.y-this.radius<0 ){

				this.dy =-this. dy;
		}
		this.x+=this.dx;
		this.y+=this.dy;
		this.draw();
	}

}
var radius = (27)

var circleArray = [];
for (var i = 0; i < 50; i++) {
	var x=Math.random()*(innerWidth-radius*2)+radius;
	var dx=(Math.random()-0.5)*8;
	var y=Math.random()*innerHeight;
	var dy=(Math.random()-0.5)*8;
	circleArray.push(new Circle(x, y, dx, dy, radius))
	// var circle  = new Circle(200,200,3,3,30);

}

console.log(circleArray)
function animate(){
	requestAnimationFrame(animate);

	c.clearRect(0, 0,innerWidth,innerHeight);
	// circle.update();
	for (var i = 0; i < circleArray.length; i++) {
			circleArray[i].update();
	}
	// y+=2;
	// console.log("sad");
}

animate();