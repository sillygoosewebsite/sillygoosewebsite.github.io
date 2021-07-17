$(document).ready(function() {

  //Array with selected quotes and films
  var quoteArray = [{
    film: "Kiss Me",
    quote: "placeholder"
  }, {
    film: "My Summer of Love",
    quote: "placeholder"
  }, {
    film: "Summer Time",
    quote: "placeholder"
  }, {
    film: "Rafiki",
    quote: "placeholder"
  }, {
    film: "Imagine Me and You",
    quote: "placeholder"
  }, {
    film: "Consequences",
    quote: "placeholder"
  }, {
    film: "I Can't Think Straight",
    quote: "placeholder"
  }, {
    film: "D.E.B.S",
    quote: "placeholder"
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