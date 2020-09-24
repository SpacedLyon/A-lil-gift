var button = document.getElementById("ScrollButton")

function LeScroll(){
	window.scrollBy({
		top: 1200,
		left: 0,
		behavior: 'smooth'
		});
}

//Set One
function Woosh1(){
	var HiddenText1 = document.getElementById("HiddenText1")
	var Img1 = document.getElementById("Img1");
	HiddenText1.classList.add("HiddenText1Active");
	HiddenText1.style.top = "-50px";
	Img1.style.transform = "translate(-50%, -50%) scale(1.1)";
	Img1.style.cursor = "pointer";
	Img1.style.filter = "grayscale(100%)";
}

function UnWoosh1(){
	var HiddenText1 = document.getElementById("HiddenText1")
	var Img1 = document.getElementById("Img1");
	HiddenText1.classList.remove("HiddenText1Active");
	HiddenText1.style.top = "-50px";
	Img1.style.transform = "translate(-50%, -50%)";
	Img1.style.cursor = "default";
	Img1.style.filter = "grayscale(0%)";
}

//Set two
function Woosh2(){
	var HiddenText2 = document.getElementById("HiddenText2");
	var Img2 = document.getElementById("Img2");
	HiddenText2.classList.toggle("HiddenText2Active");
	HiddenText2.style.top = "-100px";
	Img2.style.transform = "translate(-50%, -50%) scale(1.1)";
	Img2.style.cursor = "pointer";
	Img2.style.filter = "grayscale(100%)";
}

function UnWoosh2(){
	var HiddenText2 = document.getElementById("HiddenText2")
	var Img2 = document.getElementById("Img2");
	HiddenText2.classList.toggle("HiddenText2Active");
	HiddenText2.style.top = "-50px";
	Img2.style.transform = "translate(-50%, -50%)";
	Img2.style.cursor = "default";
	Img2.style.filter = "grayscale(0%)";
}

//Set Three
function Woosh3(){
	var HiddenText3 = document.getElementById("HiddenText3")
	var Img3 = document.getElementById("Img3");
	HiddenText3.classList.add("HiddenText3Active");
	HiddenText3.style.top = "-100px";
	Img3.style.transform = "translate(-50%, -50%) scale(1.1)";
	Img3.style.cursor = "pointer";
	Img3.style.filter = "grayscale(100%)";
}

function UnWoosh3(){
	var HiddenText3 = document.getElementById("HiddenText3")
	var Img3 = document.getElementById("Img3");
	HiddenText3.classList.remove("HiddenText3Active");
	HiddenText3.style.top = "-50px";
	Img3.style.transform = "translate(-50%, -50%)";
	Img3.style.cursor = "default";
	Img3.style.filter = "grayscale(0%)";
}

//Set four
function Woosh4(){
	var HiddenText4 = document.getElementById("HiddenText4")
	var Img4 = document.getElementById("Img4");
	HiddenText4.classList.add("HiddenText4Active");
	HiddenText4.style.top = "-50px";
	Img4.style.transform = "translate(-50%, -50%) scale(1.1)";
	Img4.style.cursor = "pointer";
	Img4.style.filter = "grayscale(100%)";
}

function UnWoosh4(){
	var HiddenText4 = document.getElementById("HiddenText4")
	var Img4 = document.getElementById("Img4");
	HiddenText4.classList.remove("HiddenText4Active");
	HiddenText4.style.top = "40px";
	Img4.style.transform = "translate(-50%, -50%)";
	Img4.style.cursor = "default";
	Img4.style.filter = "grayscale(0%)";
}

//Set five
function Woosh5(){
	var HiddenText5 = document.getElementById("HiddenText5")
	var Img5 = document.getElementById("Img5");
	HiddenText5.classList.add("HiddenText5Active");
	HiddenText5.style.top = "-50px";
	Img5.style.transform = "translate(-50%, -50%) scale(1.1)";
	Img5.style.cursor = "pointer";
	Img5.style.filter = "grayscale(100%)";
}

function UnWoosh5(){
	var HiddenText5 = document.getElementById("HiddenText5")
	var Img5 = document.getElementById("Img5");
	HiddenText5.classList.remove("HiddenText5Active");
	HiddenText5.style.top = "30px";
	Img5.style.transform = "translate(-50%, -50%)";
	Img5.style.cursor = "default";
	Img5.style.filter = "grayscale(0%)";
}

//Set six
function Woosh6(){
	var HiddenText6 = document.getElementById("HiddenText6")
	var Img6 = document.getElementById("Img6");
	HiddenText6.classList.add("HiddenText6Active");
	HiddenText6.style.top = "-50px";
	Img6.style.transform = "translate(-50%, -50%) scale(1.1)";
	Img6.style.cursor = "pointer";
	Img6.style.filter = "grayscale(100%)";
}

function UnWoosh6(){
	var HiddenText6 = document.getElementById("HiddenText6")
	var Img6 = document.getElementById("Img6");
	HiddenText6.classList.remove("HiddenText6Active");
	HiddenText6.style.top = "40px";
	Img6.style.transform = "translate(-50%, -50%)";
	Img6.style.cursor = "default";
	Img6.style.filter = "grayscale(0%)";
}

