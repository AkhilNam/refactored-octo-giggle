setTimeout(function() {
	if (document.readyState != "complete") {
		setTimeout(arguments.callee, 100);
		return;
	}
	if (document.activeElement) {
    	document.activeElement.blur();
	}
}, 100);

window.onload = function() {
	var choice = Math.round(Math.random() * 100) % 4;
	var inner_html = "";

	switch(choice) {
		case 0:
			inner_html = 'Try <a target="_blank" href="http://chrome.google.com/webstore/detail/4096/ollcbfhfahpaldhaioijecldajadcoik">4096</a>!';
			break;
		case 1:
			inner_html = 'Try <a target="_blank" href="http://chrome.google.com/webstore/detail/flappy-2048/dhodmhiaclenkikklokijkjkodoohdgn">Flappy 2048</a>!';
			break;
		case 2:
			inner_html = 'Try <a target="_blank" href="http://chrome.google.com/webstore/detail/asteroids/jegiljjfdnpgkggoefhmkcheemikjjkm">Asteroids</a>!';
			break;
		case 3:
			inner_html = 'Try <a target="_blank" href="http://chrome.google.com/webstore/detail/16384/jmehdomlnklkcfpkgeagfomdjfhjedho">16384</a>!';
			break;
	}

	//document.getElementById("other_apps").innerHTML = inner_html;
};