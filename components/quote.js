'use client';
import { useState, useEffect } from "react";

const quotes = [
    '"The best confidence builder is experience."',
    '“The curse of modernity is that we are increasingly populated by a class of people who are better at explaining than understanding, or better at explaining than doing. — Nassim Nicholas Taleb”',
    '“Those who talk should do and only those who do should talk.” — Nassim Nicholas Taleb',
    '“Any fool can criticize, complain, and condemn—and most fools do. But it takes character and self-control to be understanding and forgiving.” — Dale Carnegie',
    '“When dealing with people, remember you are not dealing with creatures of logic, but with creatures bristling with prejudice and motivated by pride and vanity.” — Dale Carnegie',
    '“You can make more friends in two months by becoming interested in other people than you can in two years by trying to get other people interested in you.” — Dale Carnegie',
    '“It isn\'t what you have or who you are or where you are or what you are doing that makes you happy or unhappy. It is what you think about it.” — Dale Carnegie'
];

export default function Quote() {
    const [quote, setQuote] = useState(null);

    useEffect(() => {
        const randomNumber = generateNumber();
        const randomQuote = quotes[randomNumber];
        setQuote(randomQuote);
    }, []);

    return (
        <div>
            <h2 className="quote">{quote}</h2>
        </div>
    )
}

function generateNumber() {
    return Math.floor(Math.random() * quotes.length);
}
