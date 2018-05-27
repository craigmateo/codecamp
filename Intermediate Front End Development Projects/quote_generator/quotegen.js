var colors = ["#B19CD9","#FF6961","#03C03C","#DEA5A4","#1b85b8","#559e83","9669FE","23819C","	#98777B","#800020"];

function colorChange() {
 
  document.body.style.background=
  document.getElementById("quote-text").style.color =
  document.getElementById("author").style.color =  
    document.getElementById("getQuote").style.background =
    document.getElementById("tweet").style.background =
 colors[Math.floor((Math.random()*colors.length)+1)];
}


$(function() {
 
  var author = $('#author');
  var text = $('#quote-text');
  getQuote(author, text);

  $('#getQuote').click(function(event) {
    event.preventDefault();
    getQuote(author, text);
    $('#tweetOut').removeClass("disabled");
    $('#tweetOut').html("Tweet Out!");
  })
});


function getQuote(author, text) {

  var forismaticURL = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"

  $.getJSON(forismaticURL, function(data) {

    text.html(data.quoteText);
    if (data.quoteAuthor) {
      author.html(data.quoteAuthor);
      author.attr("href", data.quoteLink);
    } else {
      author.removeAttr("href");
      author.html("<strong>Anonymous</strong>");
    }
    tweetThis = data.quoteText + " By - " + data.quoteAuthor;
    
    
    document.getElementById("tweet").onclick = function() {
    window.open(
    'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + data.quoteText + " By - " + data.quoteAuthor
        );
        return false;
      };
    
    
  });
  
}


