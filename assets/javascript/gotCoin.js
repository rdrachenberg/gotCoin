 $(document).ready( function(){
   // Initialize firbase
var config = {
    apiKey: "AIzaSyBqsLzFBGMTYPx-XfUMFsYe6O3kEW4ku6I",
    authDomain: "gotcoin-657c2.firebaseapp.com",
    databaseURL: "https://gotcoin-657c2.firebaseio.com",
    projectId: "gotcoin-657c2",
    storageBucket: "gotcoin-657c2.appspot.com",
    messagingSenderId: "399925748197"
  };
  firebase.initializeApp(config);

var dataBase = firebase.database();

$("#stockSubmit").on("click", function(event) {
   event.preventDefault();

   var queryURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&interval=1min&apikey=3ZIHGQKVNFF4IYF5&symbol=";
    console.log(queryURL);

   var searchTerm = $("#userStockSearch").val().trim();
   var todayDate = moment().format("YYYY-MM-DD");
   console.log(todayDate);
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
      });
     });
});


function cryptoTicker(){
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
        $("#btc").html("Bitcoin Exchange Price:  " + response.data["0"].amount);
        $("#bcc").html("Bitcoin Cash:  " + response.data["1"].amount);
        $("#eth").html("Ethereum:  " + response.data["2"].amount);
        $("#lc").html("LiteCoin:  " + response.data["3"].amount);
});
};
cryptoTicker();
setInterval(cryptoTicker, 10000);

// Global Vars *******************************************

// CoinBase vars and API Call
var queryURL = "https://api.coinbase.com/v2/prices/USD/spot"

var apiKey = "MWAieJmDyYfwCYYC";

var apiSecret = "eLXlitm4sbrClbuQ0orFmkmBGq7FKv29";

var timeStamp = moment().format("YYYY-MM-DD");

var clientId = "ee639a175fec76aa3ad51dcf771da379842e9dbb4bee4c50af69dce584325abe"

var gotCoin = $('#gotCoin').on('click');

var cbValidateURL = "https://www.coinbase.com/oauth/authorize?response_type=code&client_id=(" + clientId + ")&redirect_uri=https://rdrachenberg.github.io/gotCoin/&state=SECURE_RANDOM&scope=wallet:accounts:read"

var cbVersion = '2018-01-09'

var oAuthURL = "//www.coinbase.com/oauth/authorize?ee639a175fec76aa3ad51dcf771da379842e9dbb4bee4c50af69dce584325abe&redirect_uri=https%3A%2F%2Fexample.com%2Foauth%2Fcallback&state=134ef5504a94&scope=wallet:user:read,wallet:accounts:read"

var tokenRequest = "https://coinbase.com/api/v1/";

var aBearer = 'abd90df5f27a7b170cd775abf89d632b350b7c1c9d53e08b340cd9832ce52c2c'

// End Global Vars *******************************************


// header information to include before doing coinbase ajax request

var addApiKeyHeader = function( xhr ) {
      xhr.setRequestHeader('CB-ACCESS-KEY', apiKey),
      xhr.setRequestHeader('CB-ACCESS-SIGN', ('apiSecret + timeStamp + moment() + cbValidateURL'),
      xhr.setRequestHeader('CB-ACCESS-TIMESTAMP', timeStamp),
      xhr.setRequestHeader('client_id', clientId),
      xhr.setRequestHeader('CB-VERSION', cbVersion),
      xhr.setRequestHeader('Authorization', aBearer))
    };

var addApiKeyHeaders = function( xhr ) {
    xhr.setRequestHeader('CB-ACCESS-KEY', apiKey),
      xhr.setRequestHeader('CB-ACCESS-SIGN', ('apiSecret + timeStamp + moment() + cbValidateURL'),
      xhr.setRequestHeader('CB-ACCESS-TIMESTAMP', timeStamp),
      xhr.setRequestHeader('client_id', clientId),
      xhr.setRequestHeader('CB-VERSION', cbVersion),
      xhr.setRequestHeader('Authorization', aBearer))
    }; 
// end header information in coinbase ajax request     

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


// onClick funciton to send the user to link their 
// coinbase account when clicking on any .col-md-3 element
$(".col-md-3").on("click", function(event) {
  
  window.open("https://www.coinbase.com/oauth/authorize?client_id=ee639a175fec76aa3ad51dcf771da379842e9dbb4bee4c50af69dce584325abe&redirect_uri=https%3A%2F%2Frdrachenberg.github.io%2FgotCoin%2F&response_type=code&scope=wallet%3Auser%3Aread", "_blank");
});
// end class .col-md-3 onclick function


// animate the Cryptocurrency text***************************
$("#crypto").hover(function(){

  $(this).stop().animate({ fontSize : '64px'}); 
},

function() {

  $(this).stop().animate({ fontSize : '35px'})
});
// end animation of Cryptocurrency text**********************

 

$('#buttonsend').on("click", function(event){

  event.preventDefault();

    var database = firebase.database();
    var yourName = $('#form3').val().trim();
    var yourEmail = $('#form2').val().trim();
    var subject = $('#form32').val().trim();
    var yourMessage = $('#form8').val().trim();
    
    var loginData={
      yourName: yourName,
      yourEmail: yourEmail,
      subject: subject,
      yourMessage: yourMessage
      //firebase.database.ref().set(loginData);
    }
     database.ref().push(loginData);
  }); // End of Tim firebase code

//$("#buttonsend").click(function(){
  //  $("#myLoginModal").hide();
//});
//$("#buttonsend").click(function(){
  //$("#myLoginModal").attr("data-dismiss", "modal");
//});
 /*//$("form").submit(function() {
    // submit form
    $.post($("form").attr('action'), $("form").serializeArray());
    // alert
    alert("The request has been submitted.");
    // close window
    window.close();
    // return
    return false;
  });
//});*/

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

// method function to clear HTML to display new chart
function clearHtml() {
     $("#searchChart").remove();
};

// method function to replace previous chart
function newChartAppend() {
    var newCanvas = $('<canvas>');
    newCanvas.attr('id', 'searchChart');
    $('.newChartAppend').append(newCanvas);
};

// // Onclick function to display chart Data of search stock
$('#stockSubmit').on("click", function(event){

  // url var to call from AJX
  var alphavantageApiKey = "&apikey=3ZIHGQKVNFF4IYF5";
  var userStockSearch = $("#userStockSearch").val().trim();
  var alphavantagesearchURL = "https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=" + userStockSearch + alphavantageApiKey;

  console.log("THIS IS USERSTOCKSEARCH", userStockSearch);

  $.ajax({ 
    url: alphavantagesearchURL,
    method: "GET"
  }).done(function(response){

    console.log(response);
    
    if (response == response["Error Message"]){
      console.log("MODAL")
    } else{}
      var symbol = response["Meta Data"]["2. Symbol"];
    console.log("THIS IS SYMBOL RESPONSE", symbol);
    // Title when user first loads
    $('#stockSymbol').text(symbol + " 2017 Monthly Stock Information (High)");

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
          open: response["Monthly Adjusted Time Series"]["2017-01-31"]["1. open"],  
          high: response["Monthly Adjusted Time Series"]["2017-01-31"]["2. high"],  
          low: response["Monthly Adjusted Time Series"]["2017-01-31"]["3. low"],  
          close: response["Monthly Adjusted Time Series"]["2017-01-31"]["4. close"],  
          adjustedClose: response["Monthly Adjusted Time Series"]["2017-01-31"]["5. adjusted close"], 
          volume: response["Monthly Adjusted Time Series"]["2017-01-31"]["6. volume"],   
          dividend: response["Monthly Adjusted Time Series"]["2017-01-31"]["7. dividend amount"]
      },

      mar2017:{
          open: response["Monthly Adjusted Time Series"]["2017-01-31"]["1. open"],  
          high: response["Monthly Adjusted Time Series"]["2017-01-31"]["2. high"],  
          low: response["Monthly Adjusted Time Series"]["2017-01-31"]["3. low"],  
          close: response["Monthly Adjusted Time Series"]["2017-01-31"]["4. close"],  
          adjustedClose: response["Monthly Adjusted Time Series"]["2017-01-31"]["5. adjusted close"], 
          volume: response["Monthly Adjusted Time Series"]["2017-01-31"]["6. volume"],   
          dividend: response["Monthly Adjusted Time Series"]["2017-01-31"]["7. dividend amount"]
      },

      apr2017:{
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
          open: response["Monthly Adjusted Time Series"]["2017-09-29"]["1. open"],  
          high: response["Monthly Adjusted Time Series"]["2017-09-29"]["2. high"],  
          low: response["Monthly Adjusted Time Series"]["2017-09-29"]["3. low"],  
          close: response["Monthly Adjusted Time Series"]["2017-09-29"]["4. close"],  
          adjustedClose: response["Monthly Adjusted Time Series"]["2017-09-29"]["5. adjusted close"], 
          volume: response["Monthly Adjusted Time Series"]["2017-09-29"]["6. volume"],   
          dividend: response["Monthly Adjusted Time Series"]["2017-09-29"]["7. dividend amount"]
      },

      oct2017:{
          open: response["Monthly Adjusted Time Series"]["2017-10-31"]["1. open"],  
          high: response["Monthly Adjusted Time Series"]["2017-10-31"]["2. high"],  
          low: response["Monthly Adjusted Time Series"]["2017-10-31"]["3. low"],  
          close: response["Monthly Adjusted Time Series"]["2017-10-31"]["4. close"],  
          adjustedClose: response["Monthly Adjusted Time Series"]["2017-10-31"]["5. adjusted close"], 
          volume: response["Monthly Adjusted Time Series"]["2017-10-31"]["6. volume"],   
          dividend: response["Monthly Adjusted Time Series"]["2017-10-31"]["7. dividend amount"]
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
          open: response["Monthly Adjusted Time Series"]["2017-12-29"]["1. open"],  
          high: response["Monthly Adjusted Time Series"]["2017-12-29"]["2. high"],  
          low: response["Monthly Adjusted Time Series"]["2017-12-29"]["3. low"],  
          close: response["Monthly Adjusted Time Series"]["2017-12-29"]["4. close"],  
          adjustedClose: response["Monthly Adjusted Time Series"]["2017-12-29"]["5. adjusted close"], 
          volume: response["Monthly Adjusted Time Series"]["2017-12-29"]["6. volume"],   
          dividend: response["Monthly Adjusted Time Series"]["2017-12-29"]["7. dividend amount"]
      },
 
    }
// END OF MONTH OBJECT VAR
  
  console.log(month.jan2017.open);
  console.log(month.feb2017.open);
  console.log(month.mar2017.open);
  console.log(month.apr2017.open);
  console.log(month.may2017.open);
  console.log(month.june2017.open);
  console.log(month.july2017.open);
  console.log(month.aug2017.open);
  console.log(month.sept2017.open);
  console.log(month.oct2017.open);
  console.log(month.nov2017.open);
  console.log(month.dec2017.open);

  // graph to display on HTML
  let myChart = $('#searchChart');
  let lineChart = new Chart(myChart, {
    type: 'line',
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      datasets: [{
        label: "Price Snapshot",

        data:[
          month.jan2017.high,
          month.feb2017.high,
          month.mar2017.high,
          month.apr2017.high,
          month.may2017.high,
          month.june2017.high,
          month.july2017.high,
          month.aug2017.high,
          month.sept2017.high,
          month.oct2017.high,
          month.nov2017.high,
          month.dec2017.high 
        ],

        backgroundColor:[
          '#4FDA55',
            ]
      }],
    }
  });
// END OF GRAPH
  
  // displaying the graph on click
  $('#inputStockSearch').css("display", "block");



// Onclick function to display chart Data of search stock


  // START OF STOCK LOW ONCLICK
  $('#stockLow').on('click', function(){

    // clear function
    clearHtml();

    // appending new chart
    newChartAppend();
    
    // change the chart title
    $('#stockSymbol').text(symbol + " 2017 Monthly Stock Information (Low)");



    let myChart = $('#searchChart');
    let lineChart = new Chart(myChart, {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
          label: "Price Snapshot",

          data:[
            month.jan2017.low,
            month.feb2017.low,
            month.mar2017.low,
            month.apr2017.low,
            month.may2017.low,
            month.june2017.low,
            month.july2017.low,
            month.aug2017.low,
            month.sept2017.low,
            month.oct2017.low,
            month.nov2017.low,
            month.dec2017.low 
          ],

          backgroundColor:[
            '#FF7F73',
            ]
        }]
      }
    });
    });
  // END OF STOCKLOW ON CLICK FUNCTION

  // START OF STOCK OPEN ONCLICK FUNCTION
  $('#stockOpen').on('click', function(){

    // clear function
    clearHtml();

    // appending new chart
    newChartAppend();

    // change the chart title
    $('#stockSymbol').text(symbol + " 2017 Monthly Stock Information (Open)");

    let myChart = $('#searchChart');
    let lineChart = new Chart(myChart, {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
          label: "Price Snapshot",

          data:[
            month.jan2017.open,
            month.feb2017.open,
            month.mar2017.open,
            month.apr2017.open,
            month.may2017.open,
            month.june2017.open,
            month.july2017.open,
            month.aug2017.open,
            month.sept2017.open,
            month.oct2017.open,
            month.nov2017.open,
            month.dec2017.open 
          ],

          backgroundColor:[
            '#4FADDA',
            ]
        }]
      }
    });
    });
    // END OF STOCK OPEN ONCLCIK FUNCTION

    // START OF STOCKCLOSE ONCLCIK FUNCTION
    $('#stockClose').on('click', function(){

    // clear function
    clearHtml();

    // appending new chart
    newChartAppend();

    // change the chart title
    $('#stockSymbol').text(symbol + " 2017 Monthly Stock Information (Close)");

    let myChart = $('#searchChart');
    let lineChart = new Chart(myChart, {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
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
            month.dec2017.close 
          ],

          backgroundColor:[
            '#FF7F73',
            ]
        }]
      }
    });
    });
    // END OF STOCKCLOSE ONCLICK FUNCTION

    // START OF STOCKVOLUME ONCLCIK FUNCTION
    $('#stockVolume').on('click', function(){

      // clear function
      clearHtml();

      // appending new chart
      newChartAppend();

    // change the chart title
    $('#stockSymbol').text(symbol + " 2017 Monthly Stock Information (Volume)");

    let myChart = $('#searchChart');
    let lineChart = new Chart(myChart, {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
          label: "Price Snapshot",

          data:[
            month.jan2017.volume,
            month.feb2017.volume,
            month.mar2017.volume,
            month.apr2017.volume,
            month.may2017.volume,
            month.june2017.volume,
            month.july2017.volume,
            month.aug2017.volume,
            month.sept2017.volume,
            month.oct2017.volume,
            month.nov2017.volume,
            month.dec2017.volume 
          ],

          backgroundColor:[
            '#4FDA55',
            ]
        }]
      }
    });
    });
    // END OF STOCKVOLUME ONCLICK FUNCTION

    // START OF STOCKHIGH ONCLCIK FUNCTION
    $('#stockHigh').on('click', function(){

      // clear function
      clearHtml();

      // appending new chart
      newChartAppend();

    // change the chart title
    $('#stockSymbol').text(symbol + " 2017 Monthly Stock Information (High)");

    let myChart = $('#searchChart');
    let lineChart = new Chart(myChart, {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
          label: "Price Snapshot",

          data:[
            month.jan2017.high,
            month.feb2017.high,
            month.mar2017.high,
            month.apr2017.high,
            month.may2017.high,
            month.june2017.high,
            month.july2017.high,
            month.aug2017.high,
            month.sept2017.high,
            month.oct2017.high,
            month.nov2017.high,
            month.dec2017.high 
          ],

          backgroundColor:[
            '#4FDA55',
            ]
        }]
      }
    });
    });
    // END OF STOCKHIGH ONCLICK FUNCTION

    // START OF STOCKADJUSTEDCLOSE ONCLCIK FUNCTION
    $('#stockAdjustClose').on('click', function(){

      // clear function
      clearHtml();

      // appending new chart
      newChartAppend();

    // change the chart title
    $('#stockSymbol').text(symbol + " 2017 Monthly Stock Information (Adjust Close)");

    let myChart = $('#searchChart');
    let lineChart = new Chart(myChart, {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
          label: "Price Snapshot",

          data:[
            month.jan2017.adjustedClose,
            month.feb2017.adjustedClose,
            month.mar2017.adjustedClose,
            month.apr2017.adjustedClose,
            month.may2017.adjustedClose,
            month.june2017.adjustedClose,
            month.july2017.adjustedClose,
            month.aug2017.adjustedClose,
            month.sept2017.adjustedClose,
            month.oct2017.adjustedClose,
            month.nov2017.adjustedClose,
            month.dec2017.adjustedClose 
          ],

          backgroundColor:[
            '#FFB84A',
            ]
        }]
      }
    });
    });
    // END OF STOCKADJUSTEDCLOSE ONCLICK FUNCTION
    
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
      console.log(response);
    });
    var searchedStocks = $('<div>');
  });



  //bitcoin widget

(function(b,i,t,C,O,I,N) {
    window.addEventListener('load',function() {
      if(b.getElementById(C))return;
      I=b.createElement(i),N=b.getElementsByTagName(i)[0];
      I.src=t;I.id=C;N.parentNode.insertBefore(I, N);
    },false)
  })(document,'script','https://widgets.bitcoin.com/widget.js','btcwdgt');

