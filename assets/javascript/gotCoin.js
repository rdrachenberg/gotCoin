// Initialize Firebase
  var config = {
    apiKey: "AIzaSyC_iqQW_F3errT4mRYM2IN0KDZAhx3U-hg",
    authDomain: "gotcoin-db44a.firebaseapp.com",
    databaseURL: "https://gotcoin-db44a.firebaseio.com",
    projectId: "gotcoin-db44a",
    storageBucket: "",
    messagingSenderId: "492118808139"
  };
  firebase.initializeApp(config);

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
         $("#bitcoin").html("Bitcoin:  " + response.data["0"].amount);
        $("#bitcoinCash").html("Bitcoin Cash:  " + response.data["1"].amount);
        $("#ethereum").html("Ethereum:  " + response.data["2"].amount);
        $("#liteCoin").html("LiteCoin:  " + response.data["3"].amount);
        console.log(response);
        
    });
// End CoinBase API Call

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