//JavaScript Page


/*Simple Movie quoter app with tweet quote function for Free Code Camp* Using Bootstrap and Jquery*/

$(document).ready(function() {

  //Array with selected quotes and films
  var quoteArray = [{
    quote: "Frankly, my dear, I don't give a damn.",
    film: "Gone With the Wind"
  }, {
    quote: "I'm going to make him an offer he can't refuse.",
    film: "The Godfather"
  }, {
    quote: "May the Force be with you.",
    film: "Star Wars"
  }, {
    quote: "You talking to me?",
    film: "Taxi Driver"
  }, {
    quote: "You're gonna need a bigger boat.",
    film: "Jaws"
  }, {
    quote: "There's no place like home",
    film: "The Wizard of Oz"
  }, {
    quote: "Show me the money!",
    film: "Jerry Maguire"
  }, {
    quote: "I'm walking here! I'm walking here!",
    film: "Midnight Cowboy"
  }, {
    quote: "Houston, we have a problem.",
    film: "Apollo 13"
  }, {
    quote: "Well, nobody's perfect.",
    film: "Some Like It Hot"
  }, {
    quote: "Say “hello” to my little friend!",
    film: "Scarface"
  }, {
    quote: "Bond. James Bond.",
    film: "Dr. No"
  }, {
    quote: "You can't handle the truth!",
    film: "	A Few Good Men"
  }, {
    quote: "I'll have what she's having.",
    film: "When Harry Met Sally"
  }, {
    quote: "I see dead people.",
    film: "The Sixth Sense"
  }, {
    quote: "Keep your friends close, but your enemies closer.",
    film: "The Godfather II"
  }, {
    quote: "Here's Johnny!",
    film: "The Shining"
  }, {
    quote: "Hasta la vista, baby.",
    film: "Terminator 2: Judgment Day"
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