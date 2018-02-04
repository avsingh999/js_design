function change_image(){
	var img = document.querySelector("img");
	img.setAttribute("src","https://tesswhitehurst.com/wp-content/uploads/2017/06/full-moon-2055469_1280-300x169.jpg");
	var p= document.querySelector("p");
	p.innerHTML = "the moon"

}

var button = document.querySelector("button");
button.addEventListener("click",change_image)