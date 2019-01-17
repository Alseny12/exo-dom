document.getElementById("root").innerHTML = "le Developpement Java!!"; var div = document.getElementById("root");
var newDiv = document.createElement("ul"); 
div.appendChild(newDiv); 
var tableau = ["LA VIE DE DEV!!!","language","reflexion","courrage","reussite"];   
for (var i=0;i<tableau.length;i++){     
	var li=document.createElement('li');    
	newDiv.appendChild(li);    
	li.innerHTML=tableau[i]; 
}
function Truc() {

  a = prompt("quel est ton nom?")

  alert("bonjour je m'apelle" +" "+ a)
  }