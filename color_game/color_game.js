
var colors = generateRandomColor(6);
var squares = document.querySelectorAll(".square");
var pockedColor = pickColor();
var color_display = document.getElementById("color1");
var message_Display = document.querySelector("#message");
var h1=document.querySelector("h1");
var new_color=document.querySelector("#new_color");
var Easy = document.querySelector("#Easy");

color_display.textContent = pockedColor;

Easy.addEventListener("click",function(){
colors = generateRandomColor(3);
pockedColor=pickColor();
color_display.textContent=pockedColor;
for(var i=0;i<squares.length;i++){
	if(colors[i]){
		squares[i].style.background = colors[i];
	}
	else{
		squares[i].style.display="none"
	}
}

})


var Hard = document.querySelector("#Hard");
Hard.addEventListener("click",function(){
	colors = generateRandomColor(6);
	pockedColor=pickColor();
color_display.textContent=pockedColor;
for(var i=0;i<squares.length;i++){

		squares[i].style.background = colors[i];
	
		squares[i].style.display="block"

}
})


new_color.addEventListener("click",function(){
	colors = generateRandomColor(6);
	pockedColor = pickColor();
	this.textContent="New Color"
	color_display.textContent = pockedColor;
	message_Display.textContent="";
	for (var i = 0;i<squares.length;i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background="#216";

});






for (var i = 0;i<squares.length;i++){
squares[i].style.background = colors[i];
squares[i].addEventListener("click",function(){

		var clicked_color =this.style.background;
		// alert(clicked_color)
		if(clicked_color == pockedColor){
			message_Display.textContent="Correct";
			change_color(clicked_color);
			h1.style.background=clicked_color;
			new_color.textContent="play again";
		}
		else{
			this.style.background="#216";
			message_Display.textContent="tryagain"
		}

		
	
	});
// document.write("ds")
}

function change_color(color){
	for(var i  = 0;i<squares.length;i++){
		squares[i].style.background=color;
	}
}

function pickColor(){
	var pick = Math.floor(Math.random()*colors.length);
	return colors[pick];
}

function generateRandomColor(num){
	var arr = []
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r =Math.floor(Math.random() * 256);
	var g =Math.floor(Math.random() * 256);
	var b =Math.floor(Math.random() * 256);
	return "rgb("+r+", "+g+", "+b+")";
}