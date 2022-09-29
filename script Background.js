var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient"); //change background which sits in the body tag

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value + ", " + color2.value + ")";

	//displays color of background in text
	css.textContent = body.style.background + ";";
}

//listening for when user uses the color picker
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

color1.addEventListener("click", setGradient);

color2.addEventListener("click", setGradient);


