const quotes = [
    {
        quote: "One of the ways that I believe people express their appreciation to the rest of humanity is to make something wonderful and put it out there.",
        author: "Steve Jobs",
    },
    {
        quote: "You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect.",
        author: "Steve Jobs",
    },
    {
        quote: "The lightness of being a beginner again, less sure about everything...freed me to enter one of the most creative periods of my life.",
        author: "Steve Jobs",
    },
    {
        quote: "They push the human race forward. And while some see them as the crazy ones, we see genius.",
        author: "Steve Jobs",
    },
    {
        quote: "There's really very little distinction between an artist and a scientist or engineer of the highest caliber. They are people that pursue different paths but headed to the same goal.",
        author: "Steve Jobs",
    },
    {
        quote: "Things get more refined as you make a lot of mistakes and do them. So I've had a chance to make a lot of mistakes.",
        author: "Steve Jobs",
    },
    {
        quote: "We're constantly taking, and the ability to put something back into that pool of human experience is extremely neat.",
        author: "Steve Jobs",
    },
    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        author: "Benjamin Franklin",
    },
    {
        quote: "Never let the fear of striking out keep you from playing the game.",
        author: "Babe Ruth",
    },
    {
        quote: "In the end, it's not the years in your life that count. It's the life in your years.",
        author: "Abraham Lincoln"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = todaysQuote.author;