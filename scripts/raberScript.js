function openNav(){
	document.getElementById("mySideNav").style.width = "200px";
}

function closeNav(){
	document.getElementById("mySideNav").style.width = "0";
}


/*const nav = document.getElementsByClassName("header-row");

window.onscroll = function() {
	if (document.body.scrollTop >= 50){
		nav.classList.add("header-show");
	}
	else{
		nav.classList.remove("header-show");
	}
};
*/

const nav = document.querySelector("nav");
const layer = document.querySelector(".layer");
const logo = document.querySelector(".logo-image");
const img = document.querySelector(".resize");
const header = document.querySelector("#bus-header");
const nav_row = document.querySelectorAll(".nav-row")
const social_media = document.querySelector("#social-media")
var width = window.innerWidth;

window.onresize = function() {
	width = window.innerWidth;
};

const navOptions = {
	root: null,
	rootMargin: "-60px 0px 1000px 0px",
	threshold: 0.90
};

function navCallback(entries, observer){
	entries.forEach(entry => {
		if(!entry.isIntersecting){
			console.log("False");
			nav.classList.add("nav-scroll-class");
			header.classList.add("header-style-scroll");
			logo.classList.add("logo-image-scroll");
			img.classList.add("resize-scroll")
			nav_row[0].style.marginTop ="0px";
			nav_row[1].style.marginTop ="0px";
			social_media.style.ho
		}
		else{
			console.log("True");
			nav.classList.remove("nav-scroll-class");
			header.classList.remove("header-style-scroll")
			logo.classList.remove("logo-image-scroll");
			img.classList.remove("resize-scroll")
			nav_row[0].style.marginTop ="10px";
			nav_row[1].style.marginTop ="10px";


		}
	});	
}

const navObs = new IntersectionObserver(navCallback, navOptions);

navObs.observe(layer);


