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
		//   window.console && console.log('GET the', attr, 'value of', _pub);
	
		  return _priv[attr];
		}
	
		// window.console && console.log('SET the', attr, 'value of', _pub);
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
	