function fecha (){
	
}

	// firma


(function() { 

	
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

	
	var canvas = document.getElementById("draw-canvas");
	var ctx = canvas.getContext("2d");
	ctx.font = "bold 22px sans-serif";
	ctx.fillText("Firmar*",15,30)

	ctx.fillText("__________________________________________________",10,160)



	var drawText = document.getElementById("draw-dataUrl");
	var drawImage = document.getElementById("draw-image");
	var clearBtn = document.getElementById("draw-clearBtn");
	var submitBtn = document.getElementById("draw-submitBtn");
	clearBtn.addEventListener("click", function (e) {
		
		clearCanvas();
		drawImage.setAttribute("src", "../img/undraw_terms_re_6ak4.svg");
		drawText.innerHTML = '';
		ctx.font = "bold 22px sans-serif";
		ctx.fillText("Firmar*",15,30)

		ctx.fillText("__________________________________________________",10,160)

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

		var tint = document.getElementById("color");
		var punta = document.getElementById("puntero");
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
		console.log(drawing)
		if (drawing) {
      var tint = document.getElementById("color");
      var punta = document.getElementById("puntero");
	  console.log(punta)
      ctx.strokeStyle = tint.value;
      ctx.beginPath();
			ctx.moveTo(lastPos.x, lastPos.y);
			ctx.lineTo(mousePos.x, mousePos.y);
    	ctx.lineWidth = punta.value;
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

})();


// modal

const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});


const app= new Vue({

	el:'#app',
		name: "DateComponent",
		data: () => ({
		  Month: '',
		  date: '',
		  year: '',
		}),
		methods: {
		  printMonth: function () {
			return new Date().getMonth() +1;
		  },
		  printDate: function () {
			return new Date().getDate();
		  },
		  printYear: function () {
			return new Date().getFullYear();
		  },          
	
		},
		mounted: function () {
		  this.Month = this.printMonth();
		  this.date = this.printDate();
		  this.year = this.printYear();
		},
	
	
	
	})

	const container = document.querySelector('#handsontable');
	const hot = new Handsontable(container, {
	  data: [
		


	  ],
	  dataSchema: model,
	  height: 'auto',
	  width: 'auto',
	  colHeaders: [ 'Galpon', 'Lote','Sexo','Edad', 'Peso corporal promedio en granja', 'N° de huacales', 'Aves por huacal', 'Aves totales'],
	  columns: [
		{ data: property('Galpon') },
		{ data: property('Lote') },
		{ data: property('Sexo') },
		{ data: property('Edad') },
		{ data: property('Peso corporal promedio en granja') },
		{ data: property('N° de huacales') },
		{ data: property('Aves por huacal') },
		{ data: property('Aves totales') },

		

	  ],
	  minSpareRows: 1,
	  licenseKey: 'non-commercial-and-evaluation'
	});
	
	function model(opts) {
	  let _pub = {
		id: undefined,
		name: undefined,
		address: undefined
	  };
	  let _priv = {};
	
	  for (const i in opts) {
		if (opts.hasOwnProperty(i)) {
		  _priv[i] = opts[i];
		}
	  }
	
	  _pub.attr = function (attr, val) {
		if (typeof val === 'undefined') {
		  window.console && console.log('GET the', attr, 'value of', _pub);
	
		  return _priv[attr];
		}
	
		window.console && console.log('SET the', attr, 'value of', _pub);
		_priv[attr] = val;
	
		return _pub;
	  };
	
	  return _pub;
	}
	
	function property(attr) {
	  return function (row, value) {
		return row.attr(attr, value);
	  }
	}
	