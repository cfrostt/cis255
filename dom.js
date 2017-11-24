//document.body.style = "background-color: yellow;"
//document.getElementById("h1").innerHTML = "This heading is h1";

//var a = document.createElement("a");
//var b = document.createTextNode("My Link");
//a.setAttribute("href","#");
//a.append(b);
//var h = document.createElement("h1");
//var i = document.createTextNode("My header");
//h.setAttribute("id","h1");
//h.append(i);
document.getElementById("h1").onclick = function(){alert(document.URL);}

document.getElementById("input1").onkeyup = function(){
	var s = document.getElementById("input1").value;
	var result = "";
	for(var i=0; i<s.length; i++)
	{
		result += s[i] + ".";
	}
	document.getElementById("span1").innerHTML = result;
	
}

