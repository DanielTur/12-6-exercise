// scripts.js

$(function() {
	var url = 'https://restcountries.eu/rest/v2/name/';
		countriesList = $('#countries');

	$('#search').click(searchCountries);

	function searchCountries() {
		var countryName = $('#country-name').val();
		if(!countryName.length)countryName = 'Poland';
		$.ajax({
			url: url + countryName,
			method: 'GET',
			success: showCountriesList
		});
	}

	// function showCountriesList(resp) {
	// 	countriesList.empty();
	// 	resp.forEach(function(item) {
	// 		$('<img>').attr('src', item.flag).appendTo(countriesList);
	// 		$('<li>').text('Country Name : '+ item.name).appendTo(countriesList);
	// 		$('<li>').text('Capital City : '+ item.capital).appendTo(countriesList);
	// 		$('<li>').text('Population : ' + item.population).appendTo(countriesList);
	// 		$('<li>').text('Currency : ' + item.currencies).appendTo(countriesList);
	// 		$('<li>').text('Country Code : ' + item.alpha2Code).appendTo(countriesList);
			
	// 	});
	// }


	// Optimized method using push to array and then append to countriesList
	function showCountriesList(resp) {
		var country,
			countries = [];

		resp.forEach(function(item) {			
			country = $('<li>');
			$('<img>').attr('src', item.flag).appendTo(country);
			$('<p>').text('Country Name : ' + item.name).appendTo(country);
			$('<p>').text('Capital City : ' + item.capital).appendTo(country);
			$('<p>').text('Population : ' + item.population).appendTo(country);
			$('<p>').text('Currency : ' + item.currencies).appendTo(country);
			$('<p>').text('Country Code : ' + item.alpha2Code).appendTo(country);						

			countries.push(country);
		});
		
		countriesList.empty().append(countries);
	}
});