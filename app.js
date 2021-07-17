$(document).ready(function() {

  //Array with selected quotes and films
  var quoteArray = [{
    quote: "Kiss Me",
    film: "Kiss Me"
  }, {
    quote: "My Summer of Love",
    film: "My Summer of Love"
  }, {
    quote: "Summer Time",
    film: "Summer Time"
  }, {
    quote: "Rafiki",
    film: "Rafiki"
  }, {
    quote: "Imagine Me and You",
    film: "Imagine Me and You"
  }, {
    quote: "Consequences",
    film: "Consequences"
  }, {
    quote: "I Can't Think Straight",
    film: "I Can't Think Straight"
  }, {
    quote: "D.E.B.S",
    film: "D.E.B.S"
  }];

  //declare variables 
  var randomMovieQuote = "";
  var randomFilmName = "";

  //tweet current quote and film
  function tweet() {
    window.open("https://twitter.com/intent/tweet?text= " + randomMovieQuote + " - " + randomFilmName);
  }

  /*function to obtain a random quote and display in html*/
  function randomQuote() {
    random = Math.floor(Math.random() * quoteArray.length);
    randomMovieQuote = quoteArray[random].quote;
    randomFilmName = quoteArray[random].film;
    $("#message").html(randomMovieQuote);
    $("#title").html(randomFilmName);
  }

  //Event listeners
  $("#getMessage").on("click", randomQuote);
  $("#tweet").on("click", tweet);

  randomQuote();
});