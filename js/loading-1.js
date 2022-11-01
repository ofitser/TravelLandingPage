function fadeOut(el) {
	let opacity = 1;
	let timer = setInterval(function() {
		if(opacity <= 0.1) {
			clearInterval(timer);
			document.querySelector(el).style.display = "none";
		}
		document.querySelector(el).style.opacity = opacity;
		opacity -= opacity * 0.1;
	}, 10);
}

window.onload = function() {
  setTimeout(() => {
    fadeOut('.preloader__container')
  }, 5000)
}