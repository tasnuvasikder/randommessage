var button = $('.button')
var place = $('.quoteOne')
var quotes = ["Stop thinking of what could go wrong and start thinking of what could go right.", "Each morning we are born again.", "Never stop believing in hope because miracles happen every day.", "When you arise in the morning, think of what a precious privilege it is to be alive, to breathe, to think, to enjoy, to love.", "You have to get up every morning and tell yourself I can do this."];

button.on("click", doSomething);

function doSomething() {
  event.preventDefault ();
  var rand = quotes[Math.floor(Math.random() * quotes.length)];
  place.text (rand);
}
