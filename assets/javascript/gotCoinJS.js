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
    console.log(loginData.yourName)
    console.log(loginData.yourEmail)
    console.log(loginData.subject)
    console.log(loginData.yourMessage)
  })


  




// npm install crypto
var crypto = require('crypto');
// npm install request
var request = require('request');

// Set these in your ENVironment, or enter them here with the actual string
var apiKey = 'b55dab0731909d6e1869202afdb0f9d1b0223aed3294fa07b24036bef531d873';
var apiSecret = '';


//get unix time in seconds
var timestamp = Math.floor(Date.now() / 1000);

// set the parameter for the request message
var req = {
    method: 'GET',
    path: '/v2/exchange-rates?currency=USD',
    body: ''
};

var message = timestamp + req.method + req.path + req.body;
console.log(message);

//create a hexedecimal encoded SHA256 signature of the message
var signature = crypto.createHmac("sha256", apiSecret).update(message).digest("hex");

//create the request options object
var options = {
    baseUrl: 'https://api.coinbase.com/',
    url: req.path,
    method: req.method,
    headers: {
        'CB-ACCESS-SIGN': signature,
        'CB-ACCESS-TIMESTAMP': timestamp,
        'CB-ACCESS-KEY': apiKey,
        'CB-VERSION': '2015-07-22'
    }
};

request(options,function(err, response){
    if (err) console.log(err);
    console.log(response.body);
});


