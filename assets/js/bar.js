new Chart(document.getElementById("barchart"), {
	type: 'bar',
	data: {
		labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho','Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
		datasets: [{
			data: [10,20,30,40,50,60,70,80],
			label: 'Objetivos',
			backgroundColor: "#4755AB",
			borderWidth: 1,
		}, {
			data: [30,10,70,15,30,20,70,80],
			label: 'Análises',
			backgroundColor: "#E7EDF6",
			borderWidth: 1,
		}]
	},
	options: {
		responsive: true,
		legend: {
			position: 'top',
		},
	}
});
