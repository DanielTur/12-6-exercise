// scripts.js

$(function() {
	var url = 'https://restcountries.eu/rest/v1/name/';
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
	};

	function showCountriesList(resp) {
		countriesList.empty();
		resp.forEach(function(item) {
			$('<li>').text('Country Name : '+ item.name).appendTo(countriesList);
			$('<li>').text('Capital City : '+ item.capital).appendTo(countriesList);
			$('<li>').text('Population : ' + item.population).appendTo(countriesList);
			$('<li>').text('Currency : ' + item.currencies).appendTo(countriesList);
			$('<li>').text('Country Code : ' + item.alpha2Code).appendTo(countriesList);
			$('<img src="http://www.countryflags.io/' + item.alpha2Code + '/flat/64.png">').appendTo('#flag');
		});
	};
});