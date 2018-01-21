
  var id1=document.getElementById("first");
	id1.style.color = "blue";

  var y = document.getElementsByTagName("P");
    var i;
    for (i = 0; i < y.length; i++) {
        y[i].style.color = "red";
    }

    var x = document.getElementsByClassName("special");
    var i;
    for (i = 0; i < x.length; i++) {

        x[i].style.backgroundColor = "blue";
    }
    var query = document.querySelector("#first");
    query.style.fontSize = "50px";
    query.style.border = "5px solid #125";
