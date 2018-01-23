
function playAudio(mediaUrl) {
	var audio = new Audio(mediaUrl);
	audio.play();
}

// inject bundled Elm app into div#main
var Elm = require( 'elm' );
var app = Elm.Main.embed( document.getElementById( 'main' ) );
app.ports.playAudio.subscribe(playAudio);
