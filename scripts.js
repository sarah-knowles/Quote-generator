var quotes = [
  { 'quote': 'It is better to have a permanent income than to be fascinating.',
   'author': 'Oscar Wilde'},
  { 'quote': 'Like its politicians and its wars, society has the teenagers it deserves.',
   'author': 'J. B. Priestly'},
  {'quote': 'Laughter and tears are both responses to frustration and exhaustion. I myself prefer to laugh, since there is less cleaning up to do afterward.',
   'author' : 'Kurt Vonnegut'},
  {'quote': 'There is always a well-known solution to every human problem--neat, plausible, and wrong.',
   'author': ' H. L. Menken'},
  {'quote': 'If there are no stupid questions, then what kind of questions do stupid people ask? Do they get smart just in time to ask questions?', 
   'author': 'Scott Adams'}
]


function getQuote() {
  var randomNum = Math.floor(Math.random() * quotes.length);
  
document.getElementById('text').innerHTML = quotes[randomNum].quote;
document.getElementById('author').innerHTML = quotes[randomNum].author;
}

getQuote();

function tweetQuote(text) {
  
}
