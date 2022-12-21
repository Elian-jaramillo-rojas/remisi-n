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

	const data = [
		[  'Galpon','Lote','Sexo','Edad','Peso corporal promedio en granja', 'N° de huacales','Aves por huacal', 'Aves totales'],
		[ '','','','','','','',''],
	  
	  ];
	  
	  const container = document.querySelector('#handsontable');
	  const hot = new Handsontable(container, {
		data: data,
		rowHeaders: true,
		colHeaders: true,
		height: 'auto',
		licenseKey: 'non-commercial-and-evaluation'
	  });