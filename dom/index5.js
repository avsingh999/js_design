var b1 =document.querySelector("#b1")
var b2 =document.querySelector("#b2")
var b3=document.getElementById("b3")
var h1 =document.querySelector("h1")
var p1_s=document.querySelector("#pl1")
var p2_s=document.querySelector("#pl2")
var input=document.querySelector("input")
var max_score=document.querySelector("p span")


var p1score=0
var p2score=0
var game_over=false;
var winner_score=0;

b1.addEventListener("click",function (){
	if(!game_over){
		p1score++;
		if(p1score==winner_score){
			game_over=true
		}
		p1_s.textContent = p1score;

	}
});
b2.addEventListener("click",function (){
	if(!game_over){
		p2score++;
		if(p2score==winner_score){
			game_over=true
		}
		p2_s.textContent = p2score;

	}
});

b3.addEventListener("click",function (){
reset();
})

function reset(){
	p1score=0;
	p2score=0;
	p1_s.textContent = 0;
	p2_s.textContent = 0;
	game_over=false;
}

input.addEventListener("click", function(){
max_score.textContent = input.value;
winner_score = (input.value);
reset();
console.log(winner_score)
})