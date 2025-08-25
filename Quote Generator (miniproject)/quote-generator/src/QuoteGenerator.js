import { useState } from "react";

export default function QuoteGenerator(){
    const quotes = [
                "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
                "The best way to predict the future is to create it. - Peter Drucker",
                "Let us pick up our books and our pens, they are the most powerful weapons. - Malala Yousafzai",
                "The only way to do great work is to love what you do. - Steve Jobs",
                "It always seems impossible until it’s done. - Nelson Mandela",
                "I am not afraid... I was born to do this. - Joan of Arc",
                "Believe you can and you’re halfway there. - Theodore Roosevelt"
                ];

    const [currentQuote, setCurrentQuote] = useState('');
    const [currentColor, setCurrentColor] = useState('bisque')
    

    function generateQuote(e){
        var newRandomColor = Math.floor(Math.random()*16777215).toString(16)
        let index = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[index]);
        setCurrentColor(newRandomColor)
        //e.target.style.backgroundColor = '#'+'282c34';
        //e.target.innerText = quotes[index];
    }

    return (
        <div id="qgen" style={{backgroundColor: '#'+currentColor,
        transitionDuration: 'initial', transition: '300ms'}}>
        <h2>Random Quote Generator</h2>
        <p> {currentQuote}</p>
        <button onClick={generateQuote}>Generate random quote</button>
        </div>
    );
}


