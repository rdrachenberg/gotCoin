/*// // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyC_iqQW_F3errT4mRYM2IN0KDZAhx3U-hg",
//     authDomain: "gotcoin-db44a.firebaseapp.com",
//     databaseURL: "https://gotcoin-db44a.firebaseio.com",
//     projectId: "gotcoin-db44a",
//     storageBucket: "",
//     messagingSenderId: "492118808139"
//   };
//   firebase.initializeApp(config);

// CoinBase vars and API Call
var queryURL = "https://api.coinbase.com/v2/prices/USD/spot"

var apiKey = "MWAieJmDyYfwCYYC";

var apiSecret = "eLXlitm4sbrClbuQ0orFmkmBGq7FKv29";

var addApiKeyHeader = function( xhr ) {
      xhr.setRequestHeader('Api-Key', apiKey)
    };
    // CoinBase AJAX request
    $.ajax({
        url: queryURL,
        beforeSend: addApiKeyHeader,
        method: "GET"
    }).done(function(response) {
         $("#bitcoin").html("Bitcoin Exchange Price:  " + response.data["0"].amount);
        $("#bitcoinCash").html("Bitcoin Cash:  " + response.data["1"].amount);
        $("#ethereum").html("Ethereum:  " + response.data["2"].amount);
        $("#liteCoin").html("LiteCoin:  " + response.data["3"].amount);
        console.log(response);
        
    });
// End CoinBase API Call

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

//Chart 1
let myChart = $('#myChart');

let lineChart = new Chart(myChart, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'March', 'April'],
    dataset: [{
      label: 'Amount',
      data:[
        200,
        150,
        410.05,
        209 
      ]
    }]
  },
  options: {}
});

// chart 2
let myChart2 = $('#myChart2');

let lineChart2 = new Chart(myChart2, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'March', 'April'],
    dataset: [{
      label: 'Amount',
      data:[
        200,
        150,
        410.05,
        209 
      ]
    }]
  },
  options: {}
});

// chart 3
let myChart3 = $('#myChart3');

let lineChart3 = new Chart(myChart3, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'March', 'April'],
    dataset: [{
      label: 'Amount',
      data:[
        200,
        150,
        410.05,
        209 
      ]
    }]
  },
  options: {}
});

// chart 4
let myChart4 = $('#myChart4');

let lineChart4 = new Chart(myChart4, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'March', 'April'],
    dataset: [{
      label: 'Amount',
      data:[
        200,
        150,
        410.05,
        209 
      ]
    }]
  },
  options: {}
});

// chart 5
let myChart5 = $('#myChart5');

let lineChart5 = new Chart(myChart5, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'March', 'April'],
    dataset: [{
      label: 'Amount',
      data:[
        200,
        150,
        410.05,
        209 
      ]
    }]
  },
  options: {}
});

// chart 6
let myChart6 = $('#myChart6');

let lineChart6 = new Chart(myChart6, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'March', 'April'],
    dataset: [{
      label: 'Amount',
      data:[
        200,
        150,
        410.05,
        209 
      ]
    }]
  },
  options: {}
});

//bitcoin widget
(function(b,i,t,C,O,I,N) {
    window.addEventListener('load',function() {
      if(b.getElementById(C))return;
      I=b.createElement(i),N=b.getElementsByTagName(i)[0];
      I.src=t;I.id=C;N.parentNode.insertBefore(I, N);
    },false)
  })(document,'script','https://widgets.bitcoin.com/widget.js','btcwdgt');

//Code linked to firebase
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
  })

$("#goButton").on('click', function(){

    // API url to get stock info
    var alphavantageApiKey = "&apikey=3ZIHGQKVNFF4IYF5";
    var userStockSearch = $("#userInput").val().trim();
    var alphavantageURL = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + "aapl" + "&interval=1min" + alphavantageApiKey;

    $.ajax({
      url: alphavantageURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
      console.log(alphavantageApiKey);
      console.log(userStockSearch)
      console.log(alphavantageApiKey)
    });
});

*/