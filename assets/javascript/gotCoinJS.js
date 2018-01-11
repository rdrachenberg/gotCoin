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

  // Get the modal
var modal = $('#myModal');

// Get the button that opens the modal
var link = $("#rscLink");

// Get the <span> element that closes the modal
var span = $('.close');

// When the user clicks on the button, open the modal 
$('#rscLink').on("click", function() {
    modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}