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

// var queryURL = "https://api.coinbase.com/v2/prices/USD/spot"
// var apiKey = "MWAieJmDyYfwCYYC";

// var apiSecret = "eLXlitm4sbrClbuQ0orFmkmBGq7FKv29";



//     var apiKey ="MWAieJmDyYfwCYYC";
//     var appendApiKeyHeader = function( xhr ) {
//       xhr.setRequestHeader('Api-Key', apiKey)
//     };


//     $.ajax({
//         url: queryURL,
//         beforeSend: appendApiKeyHeader,
//         method: "GET"
//     }).done(function(response) {
//         $("#bitcoin").html("Bitcoin:  " + response.data["0"].amount);
//         $("#bitcoinCash").html("Bitcoin Cash:  " + response.data["1"].amount);
//         $("#ethereum").html("Ethereum:  " + response.data["2"].amount);
//         $("#liteCoin").html("LiteCoin:  " + response.data["3"].amount);
//         console.log(response);
//     });

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
