const OpenModalOne = document.getElementById("OpenModalOne");
OpenModalOne.addEventListener("click", ModalOneFuntion);

const OpenModalTwo = document.getElementById("OpenModalTwo");
OpenModalTwo.addEventListener("click", ModalTwoFuntion);

const OpenModalThree = document.getElementById("OpenModalThree");
OpenModalThree.addEventListener("click", ModalThreeFuntion);

const OpenModalFour = document.getElementById("OpenModalFour");
OpenModalFour.addEventListener("click", ModalFourFuntion);

window.requestAnimFrame = (function (callback) {
	return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimaitonFrame ||
				function (callback) {
					 window.setTimeout(callback, 1000/60);
		
				};
})();


function ModalOneFuntion() { 


	console.log("arlettttttttttttttt  2dooooooooooooo");

	var canvas = document.getElementById("draw-canvas");
	var ctx = canvas.getContext("2d");
	ctx.font = "bold 22px sans-serif";
	ctx.fillText("Firmar",15,30)

	ctx.fillText("_______________________________________________________",10,160)



	var drawText = document.getElementById("draw-dataUrl");
	var drawImage = document.getElementById("draw-image");
	var clearBtn = document.getElementById("draw-clearBtn");
	var submitBtn = document.getElementById("draw-submitBtn");
	clearBtn.addEventListener("click", function (e) {
		
		clearCanvas();
		drawImage.setAttribute("src", "../img/undraw_terms_re_6ak.svg");
		drawText.innerHTML = '';
		ctx.font = "bold 22px sans-serif";
		ctx.fillText("Firmar",15,30)

		ctx.fillText("_______________________________________________________",10,160)

	}, false);
		
	submitBtn.addEventListener("click", function (e) {
	var dataUrl = canvas.toDataURL();
	drawText.innerHTML = dataUrl;
	drawImage.setAttribute("src", dataUrl);
	 }, false);

	
	var drawing = false;
	var mousePos = { x:0, y:0 };
	var lastPos = mousePos;
	canvas.addEventListener("mousedown", function (e)
  {

		drawing = true;
		lastPos = getMousePos(canvas, e);
	}, false);
	canvas.addEventListener("mouseup", function (e)
  {
		drawing = false;
	}, false);
	canvas.addEventListener("mousemove", function (e)
  {
		mousePos = getMousePos(canvas, e);
	}, false);


	canvas.addEventListener("touchstart", function (e) {
		mousePos = getTouchPos(canvas, e);
    e.preventDefault(); 
		var touch = e.touches[0];
		var mouseEvent = new MouseEvent("mousedown", {
			clientX: touch.clientX,
			clientY: touch.clientY
		});
		canvas.dispatchEvent(mouseEvent);
	}, false);
	canvas.addEventListener("touchend", function (e) {
    e.preventDefault(); 
		var mouseEvent = new MouseEvent("mouseup", {});
		canvas.dispatchEvent(mouseEvent);
	}, false);
  canvas.addEventListener("touchleave", function (e) {
    
    e.preventDefault();
    var mouseEvent = new MouseEvent("mouseup", {});
    canvas.dispatchEvent(mouseEvent);
  }, false);
	canvas.addEventListener("touchmove", function (e) {
    e.preventDefault(); 
		var touch = e.touches[0];
		var mouseEvent = new MouseEvent("mousemove", {
			clientX: touch.clientX,
			clientY: touch.clientY
		});
		canvas.dispatchEvent(mouseEvent);
	}, false);

	
	function getMousePos(canvasDom, mouseEvent) {
		var rect = canvasDom.getBoundingClientRect();

		return {
			x: mouseEvent.clientX - rect.left,
			y: mouseEvent.clientY - rect.top
		};
	}

	
	function getTouchPos(canvasDom, touchEvent) {
		var rect = canvasDom.getBoundingClientRect();

		return {
			x: touchEvent.touches[0].clientX - rect.left, 
			y: touchEvent.touches[0].clientY - rect.top
		};
	}


	function renderCanvas() {
		if (drawing) {
      var tint = "#000";
      var punta = 3;
      ctx.strokeStyle = tint;
      ctx.beginPath();
			ctx.moveTo(lastPos.x, lastPos.y);
			ctx.lineTo(mousePos.x, mousePos.y);
    	ctx.lineWidth = punta;
			ctx.stroke();
      ctx.closePath();

			lastPos = mousePos;
		}
	}
	function clearCanvas() {
		canvas.width = canvas.width;
	}


	(function drawLoop () {
		requestAnimFrame(drawLoop);
		renderCanvas();
	})();

}






//  F I R M A   2da

function ModalTwoFuntion() { 




	console.log("arlettttttttttttttt");

	var canvasTwo = document.getElementById("Twodrawcanvas");
	var ctxTwo = canvasTwo.getContext("2d");
	ctxTwo.font = "bold 22px sans-serif";
	ctxTwo.fillText("Firmar",15,30)

	ctxTwo.fillText("_______________________________________________________",10,160)

	var TwodrawText = document.getElementById("TwodrawdataUrl");
	var TwodrawImage = document.getElementById("Twodrawimage");
	var TwoclearBtn = document.getElementById("TwodrawclearBtn");
	var TwosubmitBtn = document.getElementById("TwodrawsubmitBtn");


	TwoclearBtn.addEventListener("click", function (e) {
		clearCanvas();
		TwodrawImage.setAttribute("src", "../img/undraw_terms_re_6ak4.svg");
		TwodrawText.innerHTML = '';
		ctxTwo.font = "bold 22px sans-serif";
		ctxTwo.fillText("Firmar*",15,30)
		ctxTwo.fillText("_______________________________________________________",10,160)

	}, false);
		



	TwosubmitBtn.addEventListener("click", function (e) {
	var dataUrl = canvasTwo.toDataURL();

	
	TwodrawText.innerHTML = dataUrl;
	TwodrawImage.setAttribute("src", dataUrl);
	 }, false);

	
	var drawing = false;
	var mousePos = { x:0, y:0 };
	var lastPos = mousePos;
	canvasTwo.addEventListener("mousedown", function (e)
  {
		drawing = true;
		lastPos = getMousePos(canvasTwo, e);
	}, false);
	canvasTwo.addEventListener("mouseup", function (e)
  {
		drawing = false;
	}, false);
	canvasTwo.addEventListener("mousemove", function (e)
  {
		mousePos = getMousePos(canvasTwo, e);
	}, false);


	canvasTwo.addEventListener("touchstart", function (e) {
		mousePos = getTouchPos(canvasTwo, e);
    e.preventDefault(); 
		var touch = e.touches[0];
		var mouseEvent = new MouseEvent("mousedown", {
			clientX: touch.clientX,
			clientY: touch.clientY
		});
		canvasTwo.dispatchEvent(mouseEvent);
	}, false);
	canvasTwo.addEventListener("touchend", function (e) {
    e.preventDefault(); 
		var mouseEvent = new MouseEvent("mouseup", {});
		canvasTwo.dispatchEvent(mouseEvent);
	}, false);
  canvasTwo.addEventListener("touchleave", function (e) {
    
    e.preventDefault();
    var mouseEvent = new MouseEvent("mouseup", {});
    canvasTwo.dispatchEvent(mouseEvent);
  }, false);
	canvasTwo.addEventListener("touchmove", function (e) {
    e.preventDefault(); 
		var touch = e.touches[0];
		var mouseEvent = new MouseEvent("mousemove", {
			clientX: touch.clientX,
			clientY: touch.clientY
		});
		canvasTwo.dispatchEvent(mouseEvent);
	}, false);

	
	function getMousePos(canvasDom, mouseEvent) {
		var rect = canvasDom.getBoundingClientRect();

		return {
			x: mouseEvent.clientX - rect.left,
			y: mouseEvent.clientY - rect.top
		};
	}

	
	function getTouchPos(canvasDom, touchEvent) {
		var rect = canvasDom.getBoundingClientRect();

		return {
			x: touchEvent.touches[0].clientX - rect.left, 
			y: touchEvent.touches[0].clientY - rect.top
		};
	}


	function renderCanvas() {
	if (drawing) {
      var tint = "#000";
      var punta = 3;
      ctxTwo.strokeStyle = tint;
      ctxTwo.beginPath();
			ctxTwo.moveTo(lastPos.x, lastPos.y);
			ctxTwo.lineTo(mousePos.x, mousePos.y);
    	ctxTwo.lineWidth = punta;
			ctxTwo.stroke();
      ctxTwo.closePath();

			lastPos = mousePos;
		}
	}

	function clearCanvas() {
		canvasTwo.width = canvasTwo.width;
	}

	(function drawLoop () {
		requestAnimFrame(drawLoop);
		renderCanvas();
	})();

};




function ModalThreeFuntion() { 

	console.log("arlettttttttttttttt  3tresssssssssssssss ");

	var canvasTwo = document.getElementById("Threedrawcanvas");
	var ctxTwo = canvasTwo.getContext("2d");
	ctxTwo.font = "bold 22px sans-serif";
	ctxTwo.fillText("Firmar",15,30)

	ctxTwo.fillText("_______________________________________________________",10,160)

	var TwodrawText = document.getElementById("ThreedrawdataUrl");
	var TwodrawImage = document.getElementById("Threedrawimage");
	var TwoclearBtn = document.getElementById("ThreedrawclearBtn");
	var TwosubmitBtn = document.getElementById("ThreedrawsubmitBtn");


	TwoclearBtn.addEventListener("click", function (e) {
		clearCanvas();
		TwodrawImage.setAttribute("src", "../img/undraw_terms_re_6ak4.svg");
		TwodrawText.innerHTML = '';
		ctxTwo.font = "bold 22px sans-serif";
		ctxTwo.fillText("Firmar*",15,30)
		ctxTwo.fillText("_______________________________________________________",10,160)

	}, false);
		



	TwosubmitBtn.addEventListener("click", function (e) {
	var dataUrl = canvasTwo.toDataURL();

	
	TwodrawText.innerHTML = dataUrl;
	TwodrawImage.setAttribute("src", dataUrl);
	 }, false);

	
	var drawing = false;
	var mousePos = { x:0, y:0 };
	var lastPos = mousePos;
	canvasTwo.addEventListener("mousedown", function (e)
  {
		drawing = true;
		lastPos = getMousePos(canvasTwo, e);
	}, false);
	canvasTwo.addEventListener("mouseup", function (e)
  {
		drawing = false;
	}, false);
	canvasTwo.addEventListener("mousemove", function (e)
  {
		mousePos = getMousePos(canvasTwo, e);
	}, false);


	canvasTwo.addEventListener("touchstart", function (e) {
		mousePos = getTouchPos(canvasTwo, e);
    e.preventDefault(); 
		var touch = e.touches[0];
		var mouseEvent = new MouseEvent("mousedown", {
			clientX: touch.clientX,
			clientY: touch.clientY
		});
		canvasTwo.dispatchEvent(mouseEvent);
	}, false);
	canvasTwo.addEventListener("touchend", function (e) {
    e.preventDefault(); 
		var mouseEvent = new MouseEvent("mouseup", {});
		canvasTwo.dispatchEvent(mouseEvent);
	}, false);
  canvasTwo.addEventListener("touchleave", function (e) {
    
    e.preventDefault();
    var mouseEvent = new MouseEvent("mouseup", {});
    canvasTwo.dispatchEvent(mouseEvent);
  }, false);
	canvasTwo.addEventListener("touchmove", function (e) {
    e.preventDefault(); 
		var touch = e.touches[0];
		var mouseEvent = new MouseEvent("mousemove", {
			clientX: touch.clientX,
			clientY: touch.clientY
		});
		canvasTwo.dispatchEvent(mouseEvent);
	}, false);

	
	function getMousePos(canvasDom, mouseEvent) {
		var rect = canvasDom.getBoundingClientRect();

		return {
			x: mouseEvent.clientX - rect.left,
			y: mouseEvent.clientY - rect.top
		};
	}

	
	function getTouchPos(canvasDom, touchEvent) {
		var rect = canvasDom.getBoundingClientRect();

		return {
			x: touchEvent.touches[0].clientX - rect.left, 
			y: touchEvent.touches[0].clientY - rect.top
		};
	}


	function renderCanvas() {
	if (drawing) {
      var tint = "#000";
      var punta = 3;
      ctxTwo.strokeStyle = tint;
      ctxTwo.beginPath();
			ctxTwo.moveTo(lastPos.x, lastPos.y);
			ctxTwo.lineTo(mousePos.x, mousePos.y);
    	ctxTwo.lineWidth = punta;
			ctxTwo.stroke();
      ctxTwo.closePath();

			lastPos = mousePos;
		}
	}

	function clearCanvas() {
		canvasTwo.width = canvasTwo.width;
	}

	(function drawLoop () {
		requestAnimFrame(drawLoop);
		renderCanvas();	
	})();


}

//  F I R M A   4da

function ModalFourFuntion() { 

	console.log("arlettttttttttttttt  3tresssssssssssssss ");

	var canvasTwo = document.getElementById("Fourdrawcanvas");
	var ctxTwo = canvasTwo.getContext("2d");
	ctxTwo.font = "bold 22px sans-serif";
	ctxTwo.fillText("Firmar",15,30)

	ctxTwo.fillText("_______________________________________________________",10,160)

	var TwodrawText = document.getElementById("FourdrawdataUrl");
	var TwodrawImage = document.getElementById("Fourdrawimage");
	var TwoclearBtn = document.getElementById("FourdrawclearBtn");
	var TwosubmitBtn = document.getElementById("FourdrawsubmitBtn");


	TwoclearBtn.addEventListener("click", function (e) {
		clearCanvas();
		TwodrawImage.setAttribute("src", "../img/undraw_terms_re_6ak4.svg");
		TwodrawText.innerHTML = '';
		ctxTwo.font = "bold 22px sans-serif";
		ctxTwo.fillText("Firmar*",15,30)
		ctxTwo.fillText("_______________________________________________________",10,160)

	}, false);
		



	TwosubmitBtn.addEventListener("click", function (e) {
	var dataUrl = canvasTwo.toDataURL();

	
	TwodrawText.innerHTML = dataUrl;
	TwodrawImage.setAttribute("src", dataUrl);
	 }, false);

	
	var drawing = false;
	var mousePos = { x:0, y:0 };
	var lastPos = mousePos;
	canvasTwo.addEventListener("mousedown", function (e)
  {
		drawing = true;
		lastPos = getMousePos(canvasTwo, e);
	}, false);
	canvasTwo.addEventListener("mouseup", function (e)
  {
		drawing = false;
	}, false);
	canvasTwo.addEventListener("mousemove", function (e)
  {
		mousePos = getMousePos(canvasTwo, e);
	}, false);


	canvasTwo.addEventListener("touchstart", function (e) {
		mousePos = getTouchPos(canvasTwo, e);
    e.preventDefault(); 
		var touch = e.touches[0];
		var mouseEvent = new MouseEvent("mousedown", {
			clientX: touch.clientX,
			clientY: touch.clientY
		});
		canvasTwo.dispatchEvent(mouseEvent);
	}, false);
	canvasTwo.addEventListener("touchend", function (e) {
    e.preventDefault(); 
		var mouseEvent = new MouseEvent("mouseup", {});
		canvasTwo.dispatchEvent(mouseEvent);
	}, false);
  canvasTwo.addEventListener("touchleave", function (e) {
    
    e.preventDefault();
    var mouseEvent = new MouseEvent("mouseup", {});
    canvasTwo.dispatchEvent(mouseEvent);
  }, false);
	canvasTwo.addEventListener("touchmove", function (e) {
    e.preventDefault(); 
		var touch = e.touches[0];
		var mouseEvent = new MouseEvent("mousemove", {
			clientX: touch.clientX,
			clientY: touch.clientY
		});
		canvasTwo.dispatchEvent(mouseEvent);
	}, false);

	
	function getMousePos(canvasDom, mouseEvent) {
		var rect = canvasDom.getBoundingClientRect();

		return {
			x: mouseEvent.clientX - rect.left,
			y: mouseEvent.clientY - rect.top
		};
	}

	
	function getTouchPos(canvasDom, touchEvent) {
		var rect = canvasDom.getBoundingClientRect();

		return {
			x: touchEvent.touches[0].clientX - rect.left, 
			y: touchEvent.touches[0].clientY - rect.top
		};
	}


	function renderCanvas() {
	if (drawing) {
      var tint = "#000";
      var punta = 3;
      ctxTwo.strokeStyle = tint;
      ctxTwo.beginPath();
			ctxTwo.moveTo(lastPos.x, lastPos.y);
			ctxTwo.lineTo(mousePos.x, mousePos.y);
    	ctxTwo.lineWidth = punta;
			ctxTwo.stroke();
      ctxTwo.closePath();

			lastPos = mousePos;
		}
	}

	function clearCanvas() {
		canvasTwo.width = canvasTwo.width;
	}

	(function drawLoop () {
		requestAnimFrame(drawLoop);
		renderCanvas();	
	})();


}