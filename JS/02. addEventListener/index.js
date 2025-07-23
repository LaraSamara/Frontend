const btn = document.getElementById('btn');
const quote = document.getElementById('quote');
const name = document.getElementById('name');
const usedIndex = [];

function getQuote() {
    const quotes = [
        {
            quote: "“Be yourself; everyone else is already taken.”",
            name: "― Oscar Wilde"
        },
        {
            quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
            name: "― Marilyn Monroe"
        },
        {
            quote: "“So many books, so little time.”",
            name: "― Frank Zappa"
        },
        {
            quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
            name: "― Albert Einstein"
        },
        {
            quote: "A room without books is like a body without a soul.",
            name: "― Marcus Tullius Cicero"
        },
        {
            quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
            name: "― Bernard M. Baruch"
        },
    ];
    var index;
    if (usedIndex.length === quotes.length) {
        usedIndex.length = 0;
    }
    do {
        index = Math.floor(Math.random() * quotes.length);
    } while (usedIndex.includes(index));
    usedIndex.push(index);
    return quotes[index];
}

btn.addEventListener('click', function () {
    const quoteData = getQuote();
    quote.textContent = quoteData.quote;
    name.textContent = quoteData.name;
});