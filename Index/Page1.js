var button = document.getElementById("ScrollButton")

function LeScroll(){
	window.scrollBy({
		top: 1200,
		left: 0,
		behavior: 'smooth'
		});
}

var Subscribe = document.querySelectorAll("#Subscribe")
var Email = document.getElementById("Email")

function Clickity(){
	alert('Thank you for subscribing to our newsletter!');
	Email.value = '';
}