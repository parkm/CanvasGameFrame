Engine.update = function() {
	$("#fps").html("FPS: " + Time.fps + " | Delta: " + Time.delta);
}

Engine.render = function(gl) {
	gl.clearColor(0.0, 0.5, 1.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
}

$(document).ready(function() {
	Canvas c = Canvas("canvas", true, true);
	Engine.init("canvas", 60, true, true);
	Engine.run();
});