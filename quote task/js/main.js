var quote = [
    {
        'quotes' : "Be the change that you wish to see in the world.",
        'person' :  "Mahatma Gandhi"
    },
    {
        'quotes' : "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        'person' :  " Marilyn Monroe   "
    },
    {
        'quotes' : "You only live once, but if you do it right, once is enough.",
        'person' :  "Mae West"
    },
    {
        'quotes' : "Be yourself; everyone else is already taken.",
        'person' :  "Oscar Wilde"
    },
    {
        'quotes' : "Always forgive your enemies; nothing annoys them so much.",
        'person' :  " Oscar Wilde"
    },
    {
        'quotes' : "Live as if you were to die tomorrow. Learn as if you were to live forever",
        'person' :  " Mahatma Gandhi"
    }

];

function getQuote() {
    var quotesNo = Math.floor(Math.random() * quote.length);

    document.getElementById("quote").innerHTML= quote[quotesNo].quotes;
    document.getElementById("person").innerHTML= quote[quotesNo].person;
}