var body = document.querySelector("body");
var h1 = document.querySelector("h1");
var isBlue = false;
setInterval(function(){
	if(isBlue){
		body.style.background = "blue";
		h1.style.color = "yellow";
	}
	else{
		body.style.background = "yellow";
		h1.style.color = "blue";
	}
	isBlue = !isBlue;
},2000);



