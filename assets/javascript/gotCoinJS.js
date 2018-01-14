// // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyC_iqQW_F3errT4mRYM2IN0KDZAhx3U-hg",
//     authDomain: "gotcoin-db44a.firebaseapp.com",
//     databaseURL: "https://gotcoin-db44a.firebaseio.com",
//     projectId: "gotcoin-db44a",
//     storageBucket: "",
//     messagingSenderId: "492118808139"
//   };
//   firebase.initializeApp(config);


// // npm install crypto
// var crypto = require('crypto');
// // npm install request
// var request = require('request');

// // Set these in your ENVironment, or enter them here with the actual string
// var apiKey = 'b55dab0731909d6e1869202afdb0f9d1b0223aed3294fa07b24036bef531d873';
// var apiSecret = '';


// //get unix time in seconds
// var timestamp = Math.floor(Date.now() / 1000);

// // set the parameter for the request message
// var req = {
//     method: 'GET',
//     path: '/v2/exchange-rates?currency=USD',
//     body: ''
// };

// var message = timestamp + req.method + req.path + req.body;
// console.log(message);

// //create a hexedecimal encoded SHA256 signature of the message
// var signature = crypto.createHmac("sha256", apiSecret).update(message).digest("hex");

// //create the request options object
// var options = {
//     baseUrl: 'https://api.coinbase.com/',
//     url: req.path,
//     method: req.method,
//     headers: {
//         'CB-ACCESS-SIGN': signature,
//         'CB-ACCESS-TIMESTAMP': timestamp,
//         'CB-ACCESS-KEY': apiKey,
//         'CB-VERSION': '2015-07-22'
//     }
// };

// request(options,function(err, response){
//     if (err) console.log(err);
//     console.log(response.body);
// });










// JORDAN
// create an array that holds stocks to display in the six stock box cards automatically.
var presetStockArray = ["AAPL", "DST", "SSNC", "GOOGL", "AMZN", "TSLA"];

// API url to get stock info
var alphavantageApiKey = "&apikey=3ZIHGQKVNFF4IYF5";
var userStockSearch = $(".form-control").val().trim();

// for loop to put array into preset stock array
for (i = 0; i < presetStockArray.length; i++){        
    var alphavantageURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + presetStockArray[i] + alphavantageApiKey;  
}


    function stockLoadDisplay(response){

        console.log("This is response:", response);
        
        // THIS CODE IS STILL BEING FGURED OUT
        // gettin user input
        var results = response;
       
       // console.log("this is results  ", results);

       // console.log('this is META  ', response['Meta Data']);


       //  var testTime = response['Time Series (Daily)'];

       //  console.log('this is TEST TIME  ', testTime);

        
       //  // FOR BRAD!!!
       //  console.log('this is RECENT TST TO GET FIRST OBJECT', response[Object.keys(response)[1]]);

        var priceData = response[Object.keys(response)[1]];
        console.log('this is PRICE DATA', priceData);

        var currentPriceData = priceData[0];

        console.log('this is TEST PRICEDATA', currentPriceData);


        // getting the current date to show daily stock information
        var currentTime = moment().format();
        var dateFormat = moment(currentTime).format("YYYY-MM-DD"); 
        console.log("CURRENT TIME: " + moment(currentTime).format("YYYY-MM-DD"));

         // going inside the API and getting the information to display in the cardboxes 
        var timeSeriesDaily = results["Time Series (Daily)"];
        // to get the correct date From dailt API
        var date = timeSeriesDaily[dateFormat];


        // get the SYMBOL information to display in the cardbox as the boxcard header
        var metaData = results["Meta Data"];
        var stockSymbol = metaData["2. Symbol"];
        console.log(stockSymbol);

        // storing the date into stockInformation variable so I can dsiplay the stockInformation to the HTML cards 
        var stockInformation = date;
        console.log(timeSeriesDaily);


        // for loop to add stockArray to box cards
         // after search then remove #5 of array and add #0 place of array with user Stock search val.  ONLY IF USER INPUT IS VALID
        // for (i = 0; i < presetStockArray.length; i++){
                
        //     // displaying stock Info dynamivally to the
        //     var newTitle = $('<h4>');
        //     newTitle.attr('id', presetStockArray[i]);

        //      $('#AAPL0').append("AAPL");
        //      $('.stockTitle').html(newTitle);
             

        //     //  // displaying the stock text info
        //     // $('.stockTitle').attr('id', 'stockName' + i);
        //     // $('#stockName' + i).html(stockSymbol);
        //      };
    };



// ajax to call the API info
    $.ajax({ 
        url: alphavantageURL,
        method: "GET",
        context: document.body,
        success: function(response){
          stockLoadDisplay(response)  
        }

    });











