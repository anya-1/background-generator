// we want to read what the value what the colors are of both inputs.
// And we want to put out a piece of text at the bottom here with those values in the CSS format.
// So it looks like we'll need to select two inputs and then also select the H3 so we can enter some text
let css= document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.getElementById('gradient');

function setGradient(){
	body.style.background = 'linear-gradient(to right,' + color1.value + ' ,' + color2.value + ')';
	css.textContent = body.style.background + ' :';
}

// create eventListener'input' So any time the input value changes which it does every time we change the color we can detect it.
// So we're grabbing the colors, the color of value and with this values we want to change the background color of body.
color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);



	