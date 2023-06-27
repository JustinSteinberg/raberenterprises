function openNav(){
	document.getElementById("mySideNav").style.width = "200px";
}

function closeNav(){
	document.getElementById("mySideNav").style.width = "0";
}


const nav = document.getElementsByClassName("header-row");

/*window.onscroll = function() {
	if (document.body.scrollTop >= 50){
		nav.classList.add("header-show");
	}
	else{
		nav.classList.remove("header-show");
	}
};
*/

function navCallback(entries){
	console.log(entries)
}

const navOptions = {};

const navObs = new IntersectionObserver(navCallback, navOptions)

navObs.observe(document.querySelector('header'));