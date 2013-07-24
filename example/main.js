var c, //Canvas 2D Api Canvas
glCanvas, //WebGL Canvas
keys = Keyboard(), //Keyboard manager
mouse = Mouse(); //Mouse manager

Loop.update = function() {
	$("#fps").html("FPS: " + Time.fps + " | Delta: " + Time.delta);

	if (keys.isDown('A')) {
		console.log("STOP HOLDING DOWN A!");
	}

	if (mouse.isPressed(Mouse.LEFT)) {
		mouse.print();
	}

	keys.update(); //These need to be called last in order for the pressed/released functions to work.
	mouse.update();
};

$(document).ready(function() {
	//Create our canvases, specify the canvas id and then if you want WebGL.
	c = Canvas("canvas", false); //Uses canvas 2d api
	glCanvas = Canvas("glCanvas", true); //Uses WebGL

	//Attach elements to the key/mouse manager to check for input. 
	keys.attach(c.getElement());
	keys.attach(glCanvas.getElement());
	mouse.attach(c.getElement());

	var cur = new Image();
	cur.src = "cursor.png";

	var rings = new Image();
	rings.src = "Rings_28x30_strip7.png";

	var greg = Graphic(cur);
	var ringAnim = Animation(rings, 28, 30);

	c.render = function() {
		var gc = c.getContext();
		gc.fillStyle = "#0050FF";
		c.clear();

	    gc.fillStyle = '#FFFFFF';
		gc.strokeStyle = '#000000';

		gc.font = "bold 16px sans-serif";
		gc.textBaseline = "top";

		gc.lineWidth = 3;
			gc.strokeText("Yo this is text", 0, 0);
			gc.fillText("Yo this is text", 0, 0);
		gc.lineWidth = 1;

		greg.render(gc);
		ringAnim.render(gc, Time.delta);
	};

	glCanvas.render = function() {
		var gl = glCanvas.getContext();
		gl.clearColor(0, 1, 0, 1);
		gl.clear(gl.COLOR_BUFFER_BIT);
	};

	Loop.init(60); //Initialize the engine and make it sync to 60 fps.

	//Add the canvases to the loop for rendering.
	Loop.add(c);
	Loop.add(glCanvas);

	Loop.run(); //Starts the loop.
});