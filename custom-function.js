$(document).ready(function(){
	
	$(".fa-ellipsis-v").click(function(){

		$("#wrapper #sidebar").toggleClass("menu-height");
	});
});
function preloader(){

	$(window).on("load", function(){

		$("#preloader").css({
			"visibility":"hidden",
			"opacity":"0",
			"transition":"0.5s"
		});
	});
}


function showContent(contentId) {
	// Скрываем все контенты
	var contents = document.getElementsByClassName('contents');
	for (var i = 0; i < contents.length; i++) {
		 contents[i].classList.remove('active');
	}
	
	// Отображаем выбранный контент
	document.getElementById(contentId).classList.add('active');
}

const fetchData = async () => {
	try {
		 const cityName = document.getElementById('cityInput').value;
		 const result = await fetch(`https://data-api.oxilor.com/rest/regions?key=cSOgdVauAZCGQH7YDVfNEIDzxYM8Bg&countryCode=${cityName}`);
		 const data = await result.json();

		 const tableBody = document.querySelector('#cityData tbody');
		 tableBody.innerHTML = '';

		 for (const edge of data.edges) {
			  if(edge.node.type == 'city'){
					const cityName = edge.node.name;
					const divisionCode = edge.node.division1Code;
					const population = edge.node.population;
					const timeZ = edge.node.timezone;

					const row = document.createElement('tr');

					const cityNameCell = document.createElement('td');
					cityNameCell.textContent = cityName;

					const populationCell = document.createElement('td');
					populationCell.textContent = population;

					const divisionCodeCell = document.createElement('td');
					divisionCodeCell.textContent = divisionCode;

					const timeZoone = document.createElement('td');
					timeZoone.textContent = timeZ;

					row.appendChild(cityNameCell);
					row.appendChild(populationCell);
					row.appendChild(divisionCodeCell);
					row.appendChild(timeZoone);

					tableBody.appendChild(row);
			  }
		 }
	} catch (err) {
		 console.log(err);
	}
};
