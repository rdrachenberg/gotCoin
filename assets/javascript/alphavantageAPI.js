
// create an array that holds stocks to display in the six stock box cards automatically.
var presetStockArray = ["AAPL", "DST", "SSNC", "GOOGL", "AMZN", "TSLA"];


// if user searches then remove the #5 in the array and add user input into #0 in the array



$(".stockSearch").on('click', function(){

	// API url to get stock info
	var alphavantageApiKey = "&apikey=3ZIHGQKVNFF4IYF5";
	var userStockSearch = $(".form-control").val().trim();
	var alphavantageURL = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + userStockSearch + "&interval=1min" + alphavantageApiKey;

	$.ajax({
        url: alphavantageURL,
        method: "GET"
      })

	
	.done(function(response) {

		console.log(response);
		// gettin user input
		var results = response;

		// getting the current date to show daily stock information
		var currentTime = moment().format();
		var dateFormat = moment(currentTime).format("YYYY-MM-DD HH:MM:00"); 
		console.log("CURRENT TIME: " + moment(currentTime).format("YYYY-MM-DD HH:MM:00"));

		// going inside the API and getting the information to display in the cardboxes 
		var timeSeriesDaily = results["Time Series (1min)"];
		var date = timeSeriesDaily[dateFormat];

		console.log(timeSeriesDaily);
		console.log(date);

		// get the SYMBOL information to display in the cardbox as the boxcard header
		var metaData = results["Meta Data"];
		var stockSymbol = metaData["2. Symbol"];
		console.log(stockSymbol);

    	// storing the date into stockInformation variable so I can dsiplay the stockInformation to the HTML cards 
		var stockInformation = date;
		console.log(stockInformation);

		
		// for loop to add stockArray to box cards
		// after search then remove #5 of array and add #0 place of array with user Stock search val.  ONLY IF USER INPUT IS VALID
		for (i = 0; i < presetStockArray.length; i++){
			
			// displaying stock Info dynamivally to the 
			var newDiv = $('<div>');
			newDiv.addClass('stockInfo' + i);
			$('.stockInfo' + i).text('<h2>' + stockSymbol + '</h2');

			$('.stockCards').append(newDiv);
		}


		// $('.card-body').text(newDiv);
	
	});
	
});

