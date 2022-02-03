import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    getQuotes();
  }, []);

  function getQuotes() {
    fetch(`https://type.fit/api/quotes`)
      .then((respons) => respons.json())
      .then((data) => {
        let randomNumber = Math.floor(Math.random() * data.length);
        let randomQuote = data[randomNumber].text;
        setAdvice(randomQuote);
      });
  }
  console.log(advice);

  return (
    <div>
      {getQuotes === undefined ? <h1>Hello</h1> : <h1>{advice}</h1>}
      <button onClick={getQuotes}>Next Quote</button>
    </div>
  );
}

export default App;
