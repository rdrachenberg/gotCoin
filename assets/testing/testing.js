// // // Initialize Firebase
// //   var config = {
// //     apiKey: "AIzaSyC_iqQW_F3errT4mRYM2IN0KDZAhx3U-hg",
// //     authDomain: "gotcoin-db44a.firebaseapp.com",
// //     databaseURL: "https://gotcoin-db44a.firebaseio.com",
// //     projectId: "gotcoin-db44a",
// //     storageBucket: "",
// //     messagingSenderId: "492118808139"
// //   };
// //   firebase.initializeApp(config);

// // var queryURL = "https://api.coinbase.com/v2/prices/USD/spot"

// // var apiKey = "MWAieJmDyYfwCYYC";

// // var apiSecret = "eLXlitm4sbrClbuQ0orFmkmBGq7FKv29";



// //     var apiKey ="MWAieJmDyYfwCYYC";
// //     var appendApiKeyHeader = function( xhr ) {
// //       xhr.setRequestHeader('Api-Key', apiKey)
// //     };

// //     $.ajax({

// //         url: queryURL,
// //         beforeSend: appendApiKeyHeader,
// //         method: "GET"
// //     }).done(function(response) {
// //         $("#bitcoin").html("Bitcoin:  " + response.data["0"].amount);
// //         $("#bitcoinCash").html("Bitcoin Cash:  " + response.data["1"].amount);
// //         $("#ethereum").html("Ethereum:  " + response.data["2"].amount);
// //         $("#liteCoin").html("LiteCoin:  " + response.data["3"].amount);
// //         console.log(response);
// //     });

// // var database = firebase.database();

// // $('#buttonsend').on("click", function(event){
// //   event.preventDefault(event)

// //     var yourName = $('#form3').val().trim();
// //     var yourEmail = $('#form2').val().trim();
// //     var subject = $('#form32').val().trim();
// //     var yourMessage = $('#form8').val().trim();
// =======
// // // npm install crypto
// // var crypto = require('crypto');
// // // npm install request
// // var request = require('request');

// // // Set these in your ENVironment, or enter them here with the actual string
// // var apiKey = 'b55dab0731909d6e1869202afdb0f9d1b0223aed3294fa07b24036bef531d873';
// // var apiSecret = '';


// // //get unix time in seconds
// // var timestamp = Math.floor(Date.now() / 1000);

// // // set the parameter for the request message
// // var req = {
// //     method: 'GET',
// //     path: '/v2/exchange-rates?currency=USD',
// //     body: ''
// // };

// // var message = timestamp + req.method + req.path + req.body;
// // console.log(message);

// // //create a hexedecimal encoded SHA256 signature of the message
// // var signature = crypto.createHmac("sha256", apiSecret).update(message).digest("hex");

// // //create the request options object
// // var options = {
// //     baseUrl: 'https://api.coinbase.com/',
// //     url: req.path,
// //     method: req.method,
// //     headers: {
// //         'CB-ACCESS-SIGN': signature,
// //         'CB-ACCESS-TIMESTAMP': timestamp,
// //         'CB-ACCESS-KEY': apiKey,
// //         'CB-VERSION': '2015-07-22'
// //     }
// // };

// // request(options,function(err, response){
// //     if (err) console.log(err);
// //     console.log(response.body);
// // });

// // Initialize Firebase
//  var config = {
//     apiKey: "AIzaSyBqsLzFBGMTYPx-XfUMFsYe6O3kEW4ku6I",
//     authDomain: "gotcoin-657c2.firebaseapp.com",
//     databaseURL: "https://gotcoin-657c2.firebaseio.com",
//     projectId: "gotcoin-657c2",
//     storageBucket: "gotcoin-657c2.appspot.com",
//     messagingSenderId: "399925748197"
//   };
//   firebase.initializeApp(config);

// var queryURL = "https://api.coinbase.com/v2/prices/USD/spot";
// var apiKey = "MWAieJmDyYfwCYYC";

// var apiSecret = "eLXlitm4sbrClbuQ0orFmkmBGq7FKv29";



//     var apiKey ="MWAieJmDyYfwCYYC";
//     var appendApiKeyHeader = function( xhr ) {
//       xhr.setRequestHeader('Api-Key', apiKey)
//     };


//    $.ajax({
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
// >>>>>>> master:assets/javascript/gotCoinJS.js

// var database = firebase.database();

// $('#buttonsend').on("click", function(event){
//   event.preventDefault(event)

//     var yourName = $('#form3').val().trim();
//     var yourEmail = $('#form2').val().trim();
//     var subject = $('#form32').val().trim();
//     var yourMessage = $('#form8').val().trim();
// >>>>>>> ryan
    
/*//<<<<<<< HEAD
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
  })*/
//Code for Go function under search for stock under review check changes under test changes 

//$('#goButton').on("click", function(event){
  //event.preventDefault(event)
  //capture user query
  //var searchQuery = $('#userInput').val().trim();
  //build of search query



// //     var loginData={
// //       yourName: yourName,
// //       yourEmail: yourEmail,
// //       subject: subject,
// //       yourMessage: yourMessage
// //     }
// //     database.ref().push(loginData)
// //     console.log(loginData.yourName)
// //     console.log(loginData.yourEmail)
// //     console.log(loginData.subject)
// //     console.log(loginData.yourMessage)
// //   })
// // //Code for Go function under search for stock
// // $('#goButton').on("click", function(event){
// //   event.preventDefault(event)
// //   var queryURL ="https://api.coinbase.com/v2/prices/USD/spot";
// //   var searchQuery = $('#userInput').val().trim();
  


  //running of user input query
  //var runQuery=
  //user input is replaced within currency_pair for example
  //var queryURL ="https://api.coinbase.com/v2/prices/:currency_pair/buy";
  //returning search results

//Test Changes 
  $("#goButton").on('click', function(){

    // API url to get stock info
    var alphavantageApiKey = "&apikey=3ZIHGQKVNFF4IYF5";
    var userStockSearch = $("#userInput").val().trim();
    var alphavantageURL = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + userStockSearch + "&interval=1min" + alphavantageApiKey;

//<<<<<<< HEAD
    $.ajax({
      url: alphavantageURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
    });
//=======
// //     $.ajax({
// //       url: queryURL,
// //       method: 'GET'
// //     }).done(function(response) {
// //       console.log(response);
/// //     });
//>>>>>>> 40b5b4d93f939fbb0d7dbc030dd8b593eab6b49a

// // // npm install crypto
// // var crypto = require('crypto');
// // // npm install request
// // var request = require('request');

// // // Set these in your ENVironment, or enter them here with the actual string
// // var apiKey = 'b55dab0731909d6e1869202afdb0f9d1b0223aed3294fa07b24036bef531d873';
// // var apiSecret = '';


// // //get unix time in seconds
// // var timestamp = Math.floor(Date.now() / 1000);

// // // set the parameter for the request message
// // var req = {
// //     method: 'GET',
// //     path: '/v2/exchange-rates?currency=USD',
// //     body: ''
// // };

// // var message = timestamp + req.method + req.path + req.body;
// // console.log(message);

// // //create a hexedecimal encoded SHA256 signature of the message
// // var signature = crypto.createHmac("sha256", apiSecret).update(message).digest("hex");

// // //create the request options object
// // var options = {
// //     baseUrl: 'https://api.coinbase.com/',
// //     url: req.path,
// //     method: req.method,
// //     headers: {
// //         'CB-ACCESS-SIGN': signature,
// //         'CB-ACCESS-TIMESTAMP': timestamp,
// //         'CB-ACCESS-KEY': apiKey,
// //         'CB-VERSION': '2015-07-22'

// //     }
// //     database.ref().push(loginData)
// //     console.log(loginData.yourName)
// //     console.log(loginData.yourEmail)
// //     console.log(loginData.subject)
// //     console.log(loginData.yourMessage)
// //   }) // End of Tim firebase code


// // // JORDAN
// // // create an array that holds stocks to display in the six stock box cards automatically.
// // var presetStockArray = ["AAPL", "DST", "SSNC", "GOOGL", "AMZN", "TSLA"];


// // // if user searches then remove the #5 in the array and add user input into #0 in the array

// // //$(".stockSearch").on('click', function(){

// //     // API url to get stock info
// //     var alphavantageApiKey = "&apikey=3ZIHGQKVNFF4IYF5";
// //     var userStockSearch = $(".form-control").val().trim();
// //     for (var i = 0; i < presetStockArray.length; i++){
// //     var alphavantageURL = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + presetStockArray[i] + "&interval=1min" + alphavantageApiKey;

// //     }

// //     $.ajax({
// //         url: alphavantageURL,
// //         method: "GET"
// //       })

    
// //     .done(function(response) {

// //         console.log(response);
// //         // gettin user input
// //         var results = response;

// //         console.log(results.Symbol);

// //         // getting the current date to show daily stock information
// //         var currentTime = moment().format();
// //         var dateFormat = moment(currentTime).format("YYYY-MM-DD HH:MM:00"); 
// //         console.log("CURRENT TIME: " + moment(currentTime).format("YYYY-MM-DD HH:MM:00"));

// //         // going inside the API and getting the information to display in the cardboxes 
// //         var timeSeriesDaily = results["Time Series (1min)"];
// //         var date = timeSeriesDaily[dateFormat];

// //         console.log(timeSeriesDaily);
        
// //         console.log(date);

// //         // get the SYMBOL information to display in the cardbox as the boxcard header
// //         var metaData = results["Meta Data"];
// //         var stockSymbol = metaData["2. Symbol"];
// //         console.log(stockSymbol);

// //         // storing the date into stockInformation variable so I can dsiplay the stockInformation to the HTML cards 
// //         var stockInformation = date;
// //         console.log(stockInformation);

   
// //         // for loop to add stockArray to box cards
// //         // after search then remove #5 of array and add #0 place of array with user Stock search val.  ONLY IF USER INPUT IS VALID
// //         for (i = 0; i < presetStockArray.length; i++){
            
// //             // displaying stock Info dynamivally to the 
// //             var newDiv = $('<div>');
// //             newDiv.addClass('stockInfo' + i);
// //             $('.stockInfo' + i).text('<h2>' + stockSymbol + '</h2');

// //             $('.stockCards').append(newDiv);
// //         }


// //         // $('.card-body').text(newDiv);
    
// //     });
    
// // //});

// // // labels are days 

// // let myChart = $('#myChart').getContext('2d');

// // let lineChart = new Chart(myChart, {
// //   type: 'line',
// //   data: {
// //     labels: [],
// //     dataset: []
// //   },
// //   options: {}
// // });

// // // JORDAN
// // // create an array that holds stocks to display in the six stock box cards automatically.
// // var presetStockArray = ["AAPL", "DST", "SSNC", "GOOGL", "AMZN", "TSLA"];


// // // if user searches then remove the #5 in the array and add user input into #0 in the array



// // $(".stockSearch").on('click', function(){

// //     // API url to get stock info
// //     var alphavantageApiKey = "&apikey=3ZIHGQKVNFF4IYF5";
// //     var userStockSearch = $(".form-control").val().trim();
// //     var alphavantageURL = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + userStockSearch + "&interval=1min" + alphavantageApiKey;

// //     $.ajax({
// //         url: alphavantageURL,
// //         method: "GET"
// //       })

    
// //     .done(function(response) {

// //         console.log(response);
// //         // gettin user input
// //         var results = response;

// //         // getting the current date to show daily stock information
// //         var currentTime = moment().format();
// //         var dateFormat = moment(currentTime).format("YYYY-MM-DD HH:MM:00"); 
// //         console.log("CURRENT TIME: " + moment(currentTime).format("YYYY-MM-DD HH:MM:00"));

// //         // going inside the API and getting the information to display in the cardboxes 
// //         var timeSeriesDaily = results["Time Series (1min)"];
// //         var date = timeSeriesDaily[dateFormat];

// //         console.log(timeSeriesDaily);
// //         console.log(date);

// //         // get the SYMBOL information to display in the cardbox as the boxcard header
// //         var metaData = results["Meta Data"];
// //         var stockSymbol = metaData["2. Symbol"];
// //         console.log(stockSymbol);

// //         // storing the date into stockInformation variable so I can dsiplay the stockInformation to the HTML cards 
// //         var stockInformation = date;
// //         console.log(stockInformation);

        
// //         // for loop to add stockArray to box cards
// //         // after search then remove #5 of array and add #0 place of array with user Stock search val.  ONLY IF USER INPUT IS VALID
// //         for (i = 0; i < presetStockArray.length; i++){
            
// //             // displaying stock Info dynamivally to the 
// //             var newDiv = $('<div>');
// //             newDiv.addClass('stockInfo' + i);
// //             $('.stockInfo' + i).text('<h2>' + stockSymbol + '</h2');

// //             $('.stockCards').append(newDiv);
// //         }


// //         // $('.card-body').text(newDiv);
    
// //     });
    

// // });

// // });
//TEST Stuff
//HEY RIGHT HERE 
/* $(document).ready(function(){
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBId31oc_gQKoToZOKpvkfuKj_6fkLBacI",
        authDomain: "trainscheduler-1.firebaseapp.com",
        databaseURL: "https://trainscheduler-1.firebaseio.com",
        projectId: "trainscheduler-1",
        storageBucket: "trainscheduler-1.appspot.com",
        messagingSenderId: "827220560124"
     };
    
     // initialized firebase app
    firebase.initializeApp(config);
    
    // create a var of btn to represent my button with an id of submit  
    var btn = $("#submit");
    
    // creates a variable of database and sets it equal to our firebase database
    var database = firebase.database();
    // this is our on click listener function to gather the inputed information 
    // and push it to our firebase database
    $(btn).on("click", function(event) {
    
        // stops default behavior 
        event.preventDefault();
        // creates directories and inputs the values of the selected
         // jQuery elements into those directories
        name = $("#inlineFormInput").val().trim();
        destination = $("#destination").val().trim();
        arrivalTime = $("#arrivalTime").val().trim();
        frequency = $("#frequency").val().trim();
        nextArrival = $("#arrivalTime").val().trim();
        
        // creates directories  and then pushes the value of the second variable
         // information to our variable of database, which is our firebase database.  
        database.ref().push({
            trainName: name,
            destination: destination,
            arrivalTime: arrivalTime,
            frequency: frequency,
            nextArrival: nextArrival
            
        });
        // sets timeout to reset the page and then therefore updateing the data
        setTimeout(function(){
        location.reload();
        },45000);
    });
    // creates an event listener to monitor when a chiled element 
    // is added and then execute a function. 
    database.ref().on('child_added', function(snapshot){
    
    // pulls the value of frequency from firebase and creates a variable of tFrequency
    var tFrequency = snapshot.val().frequency;
    
    // first train arrival 
    var firstTrainArrival = snapshot.val().arrivalTime;
    
    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTrainArrivalConverted = moment(firstTrainArrival, "hh:mm").subtract(1, "years");
    
    // creates a variable of the current time named currentTime
    var currentTime = moment();
    
    // mesures the difference between the subtracted year and now
    var diffTime = moment().diff(moment(firstTrainArrivalConverted), "minutes");
    // Time apart (remainder)
    var tRemainder = diffTime % tFrequency;
    // create a variable  and equals it to the frequuency minus how much time 
    // until the next frequency interval which will be equal to the  Minutes Until
    // the trai arrives
    var tMinTillTrain = tFrequency - tRemainder;
    
    // creates a vaiable equal to now plus the minutes left until the
     // Next Train arrives which will return the time of arrival
    var arrivingTrain = moment().add(tMinTillTrain, "minutes");
    
    // additional vaiable to clean up the variable and will display same information
    var nextArrival = moment(arrivingTrain).format("hh:mm");
    
    // creating a variable and row, then writing data to html table
    var addRow = $("<tr>");
    addRow.append("<td>" + (snapshot.val().trainName) + "</td>");
    addRow.append("<td>" + (snapshot.val().destination) + "</td>");
    addRow.append("<td>" + (snapshot.val().frequency) + "</td>");
    addRow.append("<td>" + (snapshot.val().arrivalTime) + "</td>");
    addRow.append('<td id="nextArrival">' + (nextArrival) + "</td>");
    addRow.append('<td id="nextMin">' + (tMinTillTrain) + "</td>");
    
    // select the class of table and append all information to a new table row which is created in the add row variable
    $(".table").append(addRow);
    });
    // sets timeout to reset the page and then therefore updateing the data
    setTimeout(function(){
       location.reload();
   },100000);
    
});*/