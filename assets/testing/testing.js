
// Initialize Firebase
 var config = {
    apiKey: "AIzaSyBqsLzFBGMTYPx-XfUMFsYe6O3kEW4ku6I",
    authDomain: "gotcoin-657c2.firebaseapp.com",
    databaseURL: "https://gotcoin-657c2.firebaseio.com",
    projectId: "gotcoin-657c2",
    storageBucket: "gotcoin-657c2.appspot.com",
    messagingSenderId: "399925748197"
  };
  firebase.initializeApp(config);

var queryURL = "https://api.coinbase.com/v2/prices/USD/spot"
var apiKey = "MWAieJmDyYfwCYYC";

var apiSecret = "eLXlitm4sbrClbuQ0orFmkmBGq7FKv29";



    var apiKey ="MWAieJmDyYfwCYYC";
    var appendApiKeyHeader = function( xhr ) {
      xhr.setRequestHeader('Api-Key', apiKey)
    };


    $.ajax({
        url: queryURL,
        beforeSend: appendApiKeyHeader,
        method: "GET"
    }).done(function(response) {
        $("#bitcoin").html("Bitcoin:  " + response.data["0"].amount);
        $("#bitcoinCash").html("Bitcoin Cash:  " + response.data["1"].amount);
        $("#ethereum").html("Ethereum:  " + response.data["2"].amount);
        $("#liteCoin").html("LiteCoin:  " + response.data["3"].amount);
        console.log(response);
    });


var database = firebase.database();

$('#buttonsend').on("click", function(event){
  event.preventDefault(event)

    var yourName = $('#form3').val().trim();
    var yourEmail = $('#form2').val().trim();
    var subject = $('#form32').val().trim();
    var yourMessage = $('#form8').val().trim();
    
    var loginData={
      yourName: yourName,
      yourEmail: yourEmail,
      subject: subject,
      yourMessage: yourMessage
    }
    database.ref().push(loginData)
    console.log(loginData.yourName)
    console.log(loginData.yourEmail)
    console.log(loginData.subject)
    console.log(loginData.yourMessage)
  }) // End of Tim firebase code


// JORDAN
// create an array that holds stocks to display in the six stock box cards automatically.
var presetStockArray = ["AAPL", "DST", "SSNC", "GOOGL", "AMZN", "TSLA"];


// if user searches then remove the #5 in the array and add user input into #0 in the array



//$(".stockSearch").on('click', function(){

    // API url to get stock info
    var alphavantageApiKey = "&apikey=3ZIHGQKVNFF4IYF5";
    var userStockSearch = $(".form-control").val().trim();
    for (var i = 0; i < presetStockArray.length; i++){
    var alphavantageURL = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + presetStockArray[i] + "&interval=1min" + alphavantageApiKey;

    }

    $.ajax({
        url: alphavantageURL,
        method: "GET"
      })

    
    .done(function(response) {

        console.log(response);
        // gettin user input
        var results = response;

        console.log(results.Symbol);

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
    
//});

// labels are days 

let myChart = $('#myChart').getContext('2d');

let lineChart = new Chart(myChart, {
  type: 'line',
  data: {
    labels: [],
    dataset: []
  },
  options: {}
});



