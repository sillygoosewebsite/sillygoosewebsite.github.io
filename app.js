$(document).ready(function() {

  //Array with selected quotes and films
  var quoteArray = [{
    quote: "Kiss Me",
    film: "placeholder"
  }, {
    quote: "My Summer of Love",
    film: "placeholder"
  }, {
    quote: "Summer Time",
    film: "placeholder"
  }, {
    quote: "Rafiki",
    film: "placeholder"
  }, {
    quote: "Imagine Me and You",
    film: "placeholder"
  }, {
    quote: "Consequences",
    film: "placeholder"
  }, {
    quote: "I Can't Think Straight",
    film: "placeholder"
  }, {
    quote: "D.E.B.S",
    film: "placeholder"
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