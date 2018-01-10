





$(".stockSearch").on('click', function(){

	// API url to get stock info
	var alphavantageApiKey = "&apikey=3ZIHGQKVNFF4IYF5";
	var userStockSearch = $(".form-control").val().trim();
	var alphavantageURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="+userStockSearch+alphavantageApiKey;

	$.ajax({
        url: alphavantageURL,
        method: "GET"
      })

	
	.done(function(response) {

		console.log(response);

		var results = response;

		var metaData = results["Time Series (Daily)"];
		var date = metaData["2018-01-09"];

		
'Figure out how to convert current date to the date format LIKE above^^
		var currentDate = moment().format(); 
		


		var volume = date["5. volume"];

		console.log(volume);

	
	});
	
});