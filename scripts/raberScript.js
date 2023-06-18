function changeBg(){
	
	const images = [
		'url("images/street.jpeg")',
		'url("images/nyc-cityscape-1.jpeg")',
		'url("images/nyc-cityscape-2.jpeg")',
		'url("images/nyc-cityscape-3.jpeg")'
	];

	const section = document.querySelector(".main");
	const prev = Math.floor(Math.random() * images.length);
	const bg = images[prev];
	section.style.backgroundImage = bg;

}
	
setInterval(changeBg, 5000);
