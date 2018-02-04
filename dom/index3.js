function call(){
	var p = document.querySelector("p");
	p.classList.add("big");
	p.innerHTML = "change text"
	document.querySelector("h1").textContent="change heading";
	
}
setInterval(call,2000);
