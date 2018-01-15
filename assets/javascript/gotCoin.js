
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
  }) // End of Tim firebase code

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
        console.log(response);
        console.log(response["Stock Quotes"]["0"]);
        console.log(response["Stock Quotes"]["1"]);
        console.log(response["Stock Quotes"]["2"]);
        console.log(response["Stock Quotes"]["3"]);
        console.log(response["Stock Quotes"]["4"]);
        console.log(response["Stock Quotes"]["5"]);
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
      label: "Price Snapshot",
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

$('#stockSubmit').on("click", function(){
var alphavantageApiKey = "&apikey=3ZIHGQKVNFF4IYF5";
var userStockSearch = $("#userStockSearch").val().trim();
var alphavantagesearchURL = "https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=" + userStockSearch + alphavantageApiKey;
    console.log(userStockSearch);
     $.ajax({ 
        url: alphavantagesearchURL,
        method: "GET"
    }).done(function(response){

      // if API call request equals UNDEFINED Alert(), else run code below


      console.log(response);
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
         mar2017:{
           open: response["Monthly Adjusted Time Series"]["2017-03-31"]["1. open"],  
          high: response["Monthly Adjusted Time Series"]["2017-03-31"]["2. high"],  
          low: response["Monthly Adjusted Time Series"]["2017-03-31"]["3. low"],  
          close: response["Monthly Adjusted Time Series"]["2017-03-31"]["4. close"],  
          adjustedClose: response["Monthly Adjusted Time Series"]["2017-03-31"]["5. adjusted close"], 
          volume: response["Monthly Adjusted Time Series"]["2017-03-31"]["6. volume"],   
          dividend: response["Monthly Adjusted Time Series"]["2017-03-31"]["7. dividend amount"]
        },
        apr2017:{
           open: response["Monthly Adjusted Time Series"]["2017-04-20"]["1. open"],  
          high: response["Monthly Adjusted Time Series"]["2017-04-20"]["2. high"],  
          low: response["Monthly Adjusted Time Series"]["2017-04-20"]["3. low"],  
          close: response["Monthly Adjusted Time Series"]["2017-04-20"]["4. close"],  
          adjustedClose: response["Monthly Adjusted Time Series"]["2017-04-20"]["5. adjusted close"], 
          volume: response["Monthly Adjusted Time Series"]["2017-04-20"]["6. volume"],   
          dividend: response["Monthly Adjusted Time Series"]["2017-04-20"]["7. dividend amount"]
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
        aug2017:{
           open: response["Monthly Adjusted Time Series"]["2017-08-31"]["1. open"],  
          high: response["Monthly Adjusted Time Series"]["2017-08-31"]["2. high"],  
          low: response["Monthly Adjusted Time Series"]["2017-08-31"]["3. low"],  
          close: response["Monthly Adjusted Time Series"]["2017-08-31"]["4. close"],  
          adjustedClose: response["Monthly Adjusted Time Series"]["2017-08-31"]["5. adjusted close"], 
          volume: response["Monthly Adjusted Time Series"]["2017-08-31"]["6. volume"],   
          dividend: response["Monthly Adjusted Time Series"]["2017-08-31"]["7. dividend amount"]
        },
        sept2017:{
           open: response["Monthly Adjusted Time Series"]["2017-09-28"]["1. open"],  
          high: response["Monthly Adjusted Time Series"]["2017-09-28"]["2. high"],  
          low: response["Monthly Adjusted Time Series"]["2017-09-28"]["3. low"],  
          close: response["Monthly Adjusted Time Series"]["2017-09-28"]["4. close"],  
          adjustedClose: response["Monthly Adjusted Time Series"]["2017-09-28"]["5. adjusted close"], 
          volume: response["Monthly Adjusted Time Series"]["2017-09-28"]["6. volume"],   
          dividend: response["Monthly Adjusted Time Series"]["2017-09-28"]["7. dividend amount"]
        },
        oct2017:{
           open: response["Monthly Adjusted Time Series"]["2017-10-30"]["1. open"],  
          high: response["Monthly Adjusted Time Series"]["2017-10-30"]["2. high"],  
          low: response["Monthly Adjusted Time Series"]["2017-10-30"]["3. low"],  
          close: response["Monthly Adjusted Time Series"]["2017-10-30"]["4. close"],  
          adjustedClose: response["Monthly Adjusted Time Series"]["2017-10-30"]["5. adjusted close"], 
          volume: response["Monthly Adjusted Time Series"]["2017-10-30"]["6. volume"],   
          dividend: response["Monthly Adjusted Time Series"]["2017-10-30"]["7. dividend amount"]
        },
        nov2017:{
           open: response["Monthly Adjusted Time Series"]["2017-11-30"]["1. open"],  
          high: response["Monthly Adjusted Time Series"]["2017-11-30"]["2. high"],  
          low: response["Monthly Adjusted Time Series"]["2017-11-30"]["3. low"],  
          close: response["Monthly Adjusted Time Series"]["2017-11-30"]["4. close"],  
          adjustedClose: response["Monthly Adjusted Time Series"]["2017-11-30"]["5. adjusted close"], 
          volume: response["Monthly Adjusted Time Series"]["2017-11-30"]["6. volume"],   
          dividend: response["Monthly Adjusted Time Series"]["2017-11-30"]["7. dividend amount"]
        },
        dec2017:{
           open: response["Monthly Adjusted Time Series"]["2017-12-31"]["1. open"],  
          high: response["Monthly Adjusted Time Series"]["2017-12-31"]["2. high"],  
          low: response["Monthly Adjusted Time Series"]["2017-12-31"]["3. low"],  
          close: response["Monthly Adjusted Time Series"]["2017-12-31"]["4. close"],  
          adjustedClose: response["Monthly Adjusted Time Series"]["2017-12-31"]["5. adjusted close"], 
          volume: response["Monthly Adjusted Time Series"]["2017-12-31"]["6. volume"],   
          dividend: response["Monthly Adjusted Time Series"]["2017-12-31"]["7. dividend amount"]
        },

      }
      console.log(month.feb2017.volume);
      console.log(label);

      let myChart = $('#searchChart');
      let lineChart = new Chart(myChart, {
    type: 'bar',
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "August", "Sept", "October", "November", "December"],
      datasets: [{
        label: "Price Snapshot",
        data:[
          month.jan2017.close,
          month.feb2017.close,
          month.mar2017.close,
          month.apr2017.close,
          month.may2017.close,
          month.june2017.close,
          month.july2017.close,
          month.aug2017.close,
          month.sept2017.close,
          month.oct2017.close,
          month.nov2017.close,
          month.dec2017.close,
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

    // display charts above to the HTML
    



    // display onclick display charts
    $('#inputStockSearch').css("display", "block");
  });
//bitcoin widget
(function(b,i,t,C,O,I,N) {
    window.addEventListener('load',function() {
      if(b.getElementById(C))return;
      I=b.createElement(i),N=b.getElementsByTagName(i)[0];
      I.src=t;I.id=C;N.parentNode.insertBefore(I, N);
    },false)
  })(document,'script','https://widgets.bitcoin.com/widget.js','btcwdgt');
  $('#stockSubmit').on("click", function(){
var alphavantageApiKey = "&apikey=3ZIHGQKVNFF4IYF5";
var userStockSearch = $("#userStockSearch").val().trim();
var alphavantagesearchURL = "https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=" + userStockSearch + alphavantageApiKey;
    console.log(userStockSearch);
     $.ajax({ 
        url: alphavantagesearchURL,
        method: "GET"
    }).done(function(response){
      console.log(response);
    });
    var searchedStocks = $('<div>');
  });