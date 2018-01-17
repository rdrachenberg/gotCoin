
// CoinBase vars and API Call
var queryURL = "https://api.coinbase.com/v2/prices/USD/spot"
console.log(queryURL);

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
        
        var bitcoinData = response.data["0"].amount;
        var bitcoinCashData = response.data["1"].amount;
        var ethereumData = response.data["2"].amount;
        var liteCoinData = response.data["3"].amount;

        //Crypto Chart
        let myCryptoChart = document.getElementById('myCryptoChart').getContext('2d');
        Chart.defaults.global.defaultFontFamily = 'PT Sans Narrow';
        Chart.defaults.global.defaultFontSize = 18;
        
        let lineChart = new Chart(myCryptoChart, {
          type: 'pie',
        data: {
          labels: ['BitCoin', 'BitcoinCash', 'Ethereum', 'LiteCoin'],
          datasets: [{
            label: "Comparisons",
            data: [
              bitcoinData,
              bitcoinCashData,
              ethereumData,
              liteCoinData 
          ],
          backgroundColor:[
          '#c8c3cc',
          '#563f46',
          '#8ca3a3',
          '#484f4f'
          ],
          borderwidth: 1,
          borderColor: '#3b3a36',
          hoverBorderWidth: 3,
          hoverBorderColor: 'white'
        }]
      },
      options: {
        title:{
        display: true,
        text: 'Crypto Currency Price Comparisons',
        fontSize: 25
      }
    }
  });

});
// End CoinBase API Call

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
  })

var dataBase = firebase.database();
$("#stockSubmit").on("click", function(event) {
    event.preventDefault();

    var queryURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&interval=1min&apikey=3ZIHGQKVNFF4IYF5&symbol=";
     console.log(queryURL);

    var searchTerm = $("#userStockSearch").val().trim();
    var todayDate = moment().format("YYYY-MM-DD");
    console.log(todayDate);

      // $.getJSON(
      //     queryURL + searchTerm,
      //       function( data ){
      //       console.log(data);
      //       var Metadata=data["Meta Data"];
      //       var timeSeries=data["Time Series (Daily)"];
      //       var lastTrade=timeSeries[timeSeries.length-1];
      //       $("#symbol").text( Metadata["Symbol"] );
      //       $("#previousClose" ).text( data.previousClose );
      //       $("#open" ).text( data.open );
      //       $("#lastTrade").text( data.lastTrade );
      //       $("#lastTradeTime").text( data.lastTradeTime );
      //       $("#change").text( data.change );
      //       $("#daysLow").text( data.daysLow );
      //       $("#daysHigh").text( data.daysHigh );
      //       $("#volume").text( data.volume);
      //       console.log(Metadata);
      //       console.log (timeSeries);
      //       console.log(lastTrade);

      // })
      $.ajax({
        url: queryURL + searchTerm
      }).done(function(data) {
        $("#symbol").text(data["Meta Data"]["2. Symbol"]);
        $("#open" ).text(data["Time Series (Daily)"][todayDate]["1. open"]);
        $("#high" ).text(data["Time Series (Daily)"][todayDate]["2. high"]);
        $("#low").text(data["Time Series (Daily)"][todayDate]["3. low"]);
        $("#close").text(data["Time Series (Daily)"][todayDate]["4. close"]);
        $("#volume").text(data["Time Series (Daily)"][todayDate]["5. volume"]);
        console.log(data);

        console.log(data["Meta Data"]["2. Symbol"]);
        console.log(data["Time Series (Daily)"][todayDate]);
        console.log(data["Time Series (Daily)"][todayDate]["3. low"]);

      })
      database.ref().push()

});
  

    
    
    
   /* database.ref().push({
      stkData: high52,
            Low52: Low52,
            Stock: stock,
            Ticker: ticker
   /* })
    setTimeout(function(){
        location.reload();
        },45000);
    });
//  var tFrequency = snapshot.val().frequency;
//}

  /*var btn = $("#stockSubmit");
  var results=$("#stockResults");
  var columns=*/
// End of Tim firebase code
//Trying Some Test Code

  
  


// create an array that holds stocks to display in the six stock box cards automatically.
var presetStockArray = ["AAPL", "DST", "SSNC", "GOOGL", "AMZN", "TSLA", "ALGN", "NRG", "FSLR", "VRTX", "MU", "WYNN", "BA", "PYPL", "RHT"];
// API url to get stock info
var alphavantageApiKey = "&apikey=3ZIHGQKVNFF4IYF5";
var userStockSearch = $("#userStockSearch").val().trim();

var alphavantageURL = "https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=AAPL, DST, SSNC, GOOGL, AMZN, TSLA, ALGN, NRG, FSLR, VRTX, MU, WYNN, BA, PYPL, RHT"  + alphavantageApiKey;  
var alphavantagesearchURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + userStockSearch + alphavantageApiKey;

  // ajax to call the API info
    $.ajax({ 
        url: alphavantageURL,
        method: "GET"
    }).done(function(response) {
        

        var apple = {
          symbol: response["Stock Quotes"]["0"]["1. symbol"],
          price: response["Stock Quotes"]["0"]["2. price"],
          volume: response["Stock Quotes"]["0"]["3. volume"],
          timestamp: response["Stock Quotes"]["0"]["4. timestamp"]
        }

        var dst = {
          symbol: response["Stock Quotes"]["1"]["1. symbol"],
          price: response["Stock Quotes"]["1"]["2. price"],
          volume: response["Stock Quotes"]["1"]["3. volume"],
          timestamp: response["Stock Quotes"]["1"]["4. timestamp"]
        }

        var ssnc = {
          symbol: response["Stock Quotes"]["2"]["1. symbol"],
          price: response["Stock Quotes"]["2"]["2. price"],
          volume: response["Stock Quotes"]["2"]["3. volume"],
          timestamp: response["Stock Quotes"]["2"]["4. timestamp"]
        } 
        
        var google = {
          symbol: response["Stock Quotes"]["3"]["1. symbol"],
          price: response["Stock Quotes"]["3"]["2. price"],
          volume: response["Stock Quotes"]["3"]["3. volume"],
          timestamp: response["Stock Quotes"]["3"]["4. timestamp"]
        }

        var amazon = {
          symbol: response["Stock Quotes"]["4"]["1. symbol"],
          price: response["Stock Quotes"]["4"]["2. price"],
          volume: response["Stock Quotes"]["4"]["3. volume"],
          timestamp: response["Stock Quotes"]["4"]["3. volume"]
        }

        var tesla = {
          symbol: response["Stock Quotes"]["5"]["1. symbol"],
          price: response["Stock Quotes"]["5"]["2. price"],
          volume: response["Stock Quotes"]["5"]["3. volume"],
          timestamp: response["Stock Quotes"]["5"]["4. timestamp"]
        }

        var align = {
          symbol: response["Stock Quotes"]["6"]["1. symbol"],
          price: response["Stock Quotes"]["6"]["2. price"],
          volume: response["Stock Quotes"]["6"]["3. volume"],
          timestamp: response["Stock Quotes"]["6"]["4. timestamp"]
        }

        var nrg = {
          symbol: response["Stock Quotes"]["7"]["1. symbol"],
          price: response["Stock Quotes"]["7"]["2. price"],
          volume: response["Stock Quotes"]["7"]["3. volume"],
          timestamp: response["Stock Quotes"]["7"]["4. timestamp"]
        }

        var firstSolar  = {
          symbol: response["Stock Quotes"]["8"]["1. symbol"],
          price: response["Stock Quotes"]["8"]["2. price"],
          volume: response["Stock Quotes"]["8"]["3. volume"],
          timestamp: response["Stock Quotes"]["8"]["4. timestamp"]
        }

        var vertex = {
          symbol: response["Stock Quotes"]["9"]["1. symbol"],
          price: response["Stock Quotes"]["9"]["2. price"],
          volume: response["Stock Quotes"]["9"]["3. volume"],
          timestamp: response["Stock Quotes"]["9"]["4. timestamp"]
        }

        var micron = {
          symbol: response["Stock Quotes"]["10"]["1. symbol"],
          price: response["Stock Quotes"]["10"]["2. price"],
          volume: response["Stock Quotes"]["10"]["3. volume"],
          timestamp: response["Stock Quotes"]["10"]["4. timestamp"]
        }

        var wynn = {
          symbol: response["Stock Quotes"]["11"]["1. symbol"],
          price: response["Stock Quotes"]["11"]["2. price"],
          volume: response["Stock Quotes"]["11"]["3. volume"],
          timestamp: response["Stock Quotes"]["11"]["4. timestamp"]
        }

        var boeing = {
          symbol: response["Stock Quotes"]["12"]["1. symbol"],
          price: response["Stock Quotes"]["12"]["2. price"],
          volume: response["Stock Quotes"]["12"]["3. volume"],
          timestamp: response["Stock Quotes"]["12"]["4. timestamp"]
        }

        var paypal = {
          symbol: response["Stock Quotes"]["13"]["1. symbol"],
          price: response["Stock Quotes"]["13"]["2. price"],
          volume: response["Stock Quotes"]["13"]["3. volume"],
          timestamp: response["Stock Quotes"]["13"]["4. timestamp"]
        }

        var redhat = {
          symbol: response["Stock Quotes"]["14"]["1. symbol"],
          price: response["Stock Quotes"]["14"]["2. price"],
          volume: response["Stock Quotes"]["14"]["3. volume"],
          timestamp: response["Stock Quotes"]["14"]["4. timestamp"]
        }
        //Chart 1
let myChart = $('#myChart');

let lineChart = new Chart(myChart, {
  type: 'bar',
  data: {
    labels: [apple.symbol, dst.symbol, ssnc.symbol, google.symbol, amazon.symbol, tesla.symbol, align.symbol, nrg.symbol, firstSolar.symbol, vertex.symbol, micron.symbol, wynn.symbol, boeing.symbol, paypal.symbol, redhat.symbol],
    datasets: [{
      label: "Price Comparisons",
      data:[
        apple.price,
        dst.price,
        ssnc.price,
        google.price,
        amazon.price,
        tesla.price,
        align.price,
        nrg.price,
        firstSolar.price,
        vertex.price,
        micron.price,
        wynn.price,
        boeing.price,
        paypal.price,
        redhat.price
      ],
       backgroundColor:[
          '#563f46',
          '#9fa9a3',
          '#484f4f',
          '#454140',
          '#b2c2bf',
          '#c0ded9',
          '#3b3a30',
          '#e4d1d1',
          '#b9b0b0',
          '#7a3b2e',
          '#77a8a8',
          '#618685',
          '#80ced6',
          '#c2d4dd'
          ]
    }]
  },
  options: {}
});
});  
//bitcoin widget
(function(b,i,t,C,O,I,N) {
    window.addEventListener('load',function() {
      if(b.getElementById(C))return;
      I=b.createElement(i),N=b.getElementsByTagName(i)[0];
      I.src=t;I.id=C;N.parentNode.insertBefore(I, N);
    },false)
  })(document,'script','https://widgets.bitcoin.com/widget.js','btcwdgt');

// *******************STOCK SEARCH SECTION**********************
//**************************************************************
$('#stockSubmit').on("click", function(){
var alphavantageApiKey = "&apikey=3ZIHGQKVNFF4IYF5";
var userStockSearch = $("#userStockSearch").val().trim();
var alphavantagesearchURL = "https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=" + userStockSearch + alphavantageApiKey;
  
  $.ajax({ 
    url: alphavantagesearchURL,
      method: "GET"
  }).done(function(response){
    var label = response["Meta Data"]["1.Information"];
    var symbol = response["Meta Data"]["2.Symbol"];
    var month = {
      jan2017:{
        open: response["Monthly Adjusted Time Series"]["2017-01-31"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-01-31"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-01-31"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-01-31"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-01-31"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-01-31"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-01-31"]["7. dividend amount"]
      },
      feb2017:{
        open: response["Monthly Adjusted Time Series"]["2017-02-28"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-02-28"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-02-28"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-02-28"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-02-28"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-02-28"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-02-28"]["7. dividend amount"]
      },
      march2017:{
        open: response["Monthly Adjusted Time Series"]["2017-03-31"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-03-31"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-03-31"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-03-31"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-03-31"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-03-31"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-03-31"]["7. dividend amount"]
      },
      april2017:{
        open: response["Monthly Adjusted Time Series"]["2017-04-28"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-04-28"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-04-28"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-04-28"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-04-28"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-04-28"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-04-28"]["7. dividend amount"]
      },
      may2017:{
        open: response["Monthly Adjusted Time Series"]["2017-05-31"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-05-31"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-05-31"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-05-31"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-05-31"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-05-31"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-05-31"]["7. dividend amount"]
      },
      june2017:{
        open: response["Monthly Adjusted Time Series"]["2017-06-30"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-06-30"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-06-30"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-06-30"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-06-30"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-06-30"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-06-30"]["7. dividend amount"]
      },
      july2017:{
        open: response["Monthly Adjusted Time Series"]["2017-07-31"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-07-31"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-07-31"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-07-31"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-07-31"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-07-31"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-07-31"]["7. dividend amount"]
      },
      august2017:{
        open: response["Monthly Adjusted Time Series"]["2017-08-31"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-08-31"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-08-31"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-08-31"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-08-31"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-08-31"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-08-31"]["7. dividend amount"]
      },
      september2017:{
        open: response["Monthly Adjusted Time Series"]["2017-09-29"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-09-29"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-09-29"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-09-29"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-09-29"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-09-29"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-09-29"]["7. dividend amount"]
      },
      october2017:{
        open: response["Monthly Adjusted Time Series"]["2017-10-31"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-10-31"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-10-31"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-10-31"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-10-31"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-10-31"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-10-31"]["7. dividend amount"]
      },
      november2017:{
        open: response["Monthly Adjusted Time Series"]["2017-11-30"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-11-30"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-11-30"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-11-30"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-11-30"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-11-30"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-11-30"]["7. dividend amount"]
      },
      december2017:{
        open: response["Monthly Adjusted Time Series"]["2017-12-29"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-12-29"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-12-29"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-12-29"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-12-29"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-12-29"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-12-29"]["7. dividend amount"]
      },
      january2018:{
        open: response["Monthly Adjusted Time Series"]["2018-01-12"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2018-01-12"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2018-01-12"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2018-01-12"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2018-01-12"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2018-01-12"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2018-01-12"]["7. dividend amount"]
      }
    }
  let myChart = $('#searchChart');
  let lineChart = new Chart(myChart, {
    type: 'line',
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "August", "Sept", "October", "November", "December"],
      datasets: [{
        label: symbol + " Opening Price",
        data:[
          month.jan2017.open,
          month.feb2017.open,
          month.march2017.open,
          month.april2017.open,
          month.may2017.open,
          month.june2017.open,
          month.july2017.open,
          month.august2017.open,
          month.september2017.open,
          month.october2017.open,
          month.november2017.open,
          month.december2017.open,
        ]
      }]
    },
    options: {}
  });
});
// display onclick display charts
  $('#inputStockSearch').css("display", "block");
});

//************************Change to Close info**************************
//**********************************************************************
$('#searchChart').on("click", function(){
  var alphavantageApiKey = "&apikey=3ZIHGQKVNFF4IYF5";
  var userStockSearch = $("#userStockSearch").val().trim();
  var alphavantagesearchURL = "https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=" + userStockSearch + alphavantageApiKey;

  $.ajax({ 
    url: alphavantagesearchURL,
      method: "GET"
  }).done(function(response){
    var label = response["Meta Data"]["1. Information"];
    var symbol = response["Meta Data"]["2. Symbol"];
    var month = {
      jan2017:{
        open: response["Monthly Adjusted Time Series"]["2017-01-31"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-01-31"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-01-31"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-01-31"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-01-31"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-01-31"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-01-31"]["7. dividend amount"]
      },
      feb2017:{
        open: response["Monthly Adjusted Time Series"]["2017-02-28"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-02-28"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-02-28"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-02-28"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-02-28"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-02-28"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-02-28"]["7. dividend amount"]
      },
      march2017:{
        open: response["Monthly Adjusted Time Series"]["2017-03-31"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-03-31"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-03-31"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-03-31"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-03-31"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-03-31"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-03-31"]["7. dividend amount"]
      },
      april2017:{
        open: response["Monthly Adjusted Time Series"]["2017-04-28"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-04-28"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-04-28"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-04-28"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-04-28"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-04-28"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-04-28"]["7. dividend amount"]
      },
      may2017:{
        open: response["Monthly Adjusted Time Series"]["2017-05-31"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-05-31"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-05-31"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-05-31"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-05-31"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-05-31"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-05-31"]["7. dividend amount"]
      },
      june2017:{
        open: response["Monthly Adjusted Time Series"]["2017-06-30"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-06-30"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-06-30"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-06-30"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-06-30"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-06-30"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-06-30"]["7. dividend amount"]
      },
      july2017:{
        open: response["Monthly Adjusted Time Series"]["2017-07-31"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-07-31"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-07-31"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-07-31"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-07-31"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-07-31"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-07-31"]["7. dividend amount"]
      },
      august2017:{
        open: response["Monthly Adjusted Time Series"]["2017-08-31"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-08-31"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-08-31"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-08-31"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-08-31"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-08-31"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-08-31"]["7. dividend amount"]
      },
      september2017:{
        open: response["Monthly Adjusted Time Series"]["2017-09-29"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-09-29"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-09-29"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-09-29"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-09-29"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-09-29"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-09-29"]["7. dividend amount"]
      },
      october2017:{
        open: response["Monthly Adjusted Time Series"]["2017-10-31"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-10-31"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-10-31"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-10-31"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-10-31"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-10-31"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-10-31"]["7. dividend amount"]
      },
      november2017:{
        open: response["Monthly Adjusted Time Series"]["2017-11-30"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-11-30"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-11-30"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-11-30"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-11-30"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-11-30"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-11-30"]["7. dividend amount"]
      },
      december2017:{
        open: response["Monthly Adjusted Time Series"]["2017-12-29"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-12-29"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-12-29"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-12-29"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-12-29"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-12-29"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-12-29"]["7. dividend amount"]
      },
      january2018:{
        open: response["Monthly Adjusted Time Series"]["2018-01-12"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2018-01-12"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2018-01-12"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2018-01-12"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2018-01-12"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2018-01-12"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2018-01-12"]["7. dividend amount"]
      }
    }
  let myChart = $('#searchChart');
  let lineChart = new Chart(myChart, {
    type: 'line',
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "August", "Sept", "October", "November", "December"],
      datasets: [{
        label: symbol + " Closing Price",
        data:[
          month.jan2017.close,
          month.feb2017.close,
          month.march2017.close,
          month.april2017.close,
          month.may2017.close,
          month.june2017.close,
          month.july2017.close,
          month.august2017.close,
          month.september2017.close,
          month.october2017.close,
          month.november2017.close,
          month.december2017.close,
        ],
        backgroundColor:[
            '#563f46',
            '#9fa9a3',
            '#484f4f',
            '#454140',
            '#b2c2bf',
            '#c0ded9',
            '#3b3a30',
            '#e4d1d1',
            '#b9b0b0',
            '#7a3b2e',
            '#77a8a8',
            '#618685',
            ]
      }]
    },
    options: {}
  });

  });
});

$('#searchChart').on("click", function(){
  var alphavantageApiKey = "&apikey=3ZIHGQKVNFF4IYF5";
  var userStockSearch = $("#userStockSearch").val().trim();
  var alphavantagesearchURL = "https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=" + userStockSearch + alphavantageApiKey;

$.ajax({ 
    url: alphavantagesearchURL,
      method: "GET"
  }).done(function(response){
    var label = response["Meta Data"]["1. Information"];
    var symbol = response["Meta Data"]["2. Symbol"];
    var month = {
      jan2017:{
        open: response["Monthly Adjusted Time Series"]["2017-01-31"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-01-31"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-01-31"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-01-31"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-01-31"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-01-31"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-01-31"]["7. dividend amount"]
      },
      feb2017:{
        open: response["Monthly Adjusted Time Series"]["2017-02-28"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-02-28"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-02-28"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-02-28"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-02-28"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-02-28"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-02-28"]["7. dividend amount"]
      },
      march2017:{
        open: response["Monthly Adjusted Time Series"]["2017-03-31"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-03-31"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-03-31"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-03-31"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-03-31"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-03-31"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-03-31"]["7. dividend amount"]
      },
      april2017:{
        open: response["Monthly Adjusted Time Series"]["2017-04-28"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-04-28"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-04-28"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-04-28"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-04-28"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-04-28"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-04-28"]["7. dividend amount"]
      },
      may2017:{
        open: response["Monthly Adjusted Time Series"]["2017-05-31"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-05-31"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-05-31"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-05-31"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-05-31"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-05-31"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-05-31"]["7. dividend amount"]
      },
      june2017:{
        open: response["Monthly Adjusted Time Series"]["2017-06-30"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-06-30"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-06-30"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-06-30"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-06-30"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-06-30"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-06-30"]["7. dividend amount"]
      },
      july2017:{
        open: response["Monthly Adjusted Time Series"]["2017-07-31"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-07-31"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-07-31"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-07-31"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-07-31"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-07-31"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-07-31"]["7. dividend amount"]
      },
      august2017:{
        open: response["Monthly Adjusted Time Series"]["2017-08-31"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-08-31"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-08-31"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-08-31"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-08-31"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-08-31"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-08-31"]["7. dividend amount"]
      },
      september2017:{
        open: response["Monthly Adjusted Time Series"]["2017-09-29"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-09-29"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-09-29"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-09-29"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-09-29"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-09-29"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-09-29"]["7. dividend amount"]
      },
      october2017:{
        open: response["Monthly Adjusted Time Series"]["2017-10-31"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-10-31"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-10-31"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-10-31"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-10-31"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-10-31"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-10-31"]["7. dividend amount"]
      },
      november2017:{
        open: response["Monthly Adjusted Time Series"]["2017-11-30"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-11-30"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-11-30"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-11-30"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-11-30"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-11-30"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-11-30"]["7. dividend amount"]
      },
      december2017:{
        open: response["Monthly Adjusted Time Series"]["2017-12-29"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2017-12-29"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2017-12-29"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2017-12-29"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2017-12-29"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2017-12-29"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2017-12-29"]["7. dividend amount"]
      },
      january2018:{
        open: response["Monthly Adjusted Time Series"]["2018-01-12"]["1. open"],  
        high: response["Monthly Adjusted Time Series"]["2018-01-12"]["2. high"],  
        low: response["Monthly Adjusted Time Series"]["2018-01-12"]["3. low"],  
        close: response["Monthly Adjusted Time Series"]["2018-01-12"]["4. close"],  
        adjustedClose: response["Monthly Adjusted Time Series"]["2018-01-12"]["5. adjusted close"], 
        volume: response["Monthly Adjusted Time Series"]["2018-01-12"]["6. volume"],   
        dividend: response["Monthly Adjusted Time Series"]["2018-01-12"]["7. dividend amount"]
      }
    }
  let myChart = $('#searchChart');
  let lineChart = new Chart(myChart, {
    type: 'line',
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "August", "Sept", "October", "November", "December"],
      datasets: [{
        label: symbol + " Volume",
        data:[
          month.jan2017.volume,
          month.feb2017.volume,
          month.march2017.volume,
          month.april2017.volume,
          month.may2017.volume,
          month.june2017.volume,
          month.july2017.volume,
          month.august2017.volume,
          month.september2017.volume,
          month.october2017.volume,
          month.november2017.volume,
          month.december2017.volume,
        ],
        backgroundColor:[
            '#563f46',
            '#9fa9a3',
            '#484f4f',
            '#454140',
            '#b2c2bf',
            '#c0ded9',
            '#3b3a30',
            '#e4d1d1',
            '#b9b0b0',
            '#7a3b2e',
            '#77a8a8',
            '#618685',
            ]
      }]
    },
    options: {}
  });

  });
});

    //});

    //   var searchedStocks = $('<div>');
    //   var stockOpen = $('<button>');
    //   var stockHigh = $('<button>');
    //   var stockLow = $('<button>');
    //   var stockClose = $('<button>');
    //   var stockAdjustedClose = $('<button>');
    //   var stockVolume = $('<button>');
    //   var stockDividend = $('<button>');
    // });
