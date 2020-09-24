const signUpButton = document.getElementById('SecondRegister');
const signInButton = document.getElementById('SecondLogin');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
	document.getElementById("path").style.animationPlayState = "initial";
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});