import React, { useState } from "react";
import "./App.css";

const RandomNumber = () => {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [piece, setPiece] = useState(2);
  const [showResult, setShowResult] = useState(false);
  const [results, setResults] = useState([]);

  const handleMin = (e) => {
    setMin(Number(e.target.value));
  };
  const handleMax = (e) => {
    setMax(Number(e.target.value));
  };
  const handlePiece = (e) => {
    setPiece(Number(e.target.value));
  };

  const generateNumber = (e) => {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    setResults(randomNumber);
    setShowResult(true);
  };

  return (
    <div className="card-container">
      <div className="card">
        <h1>Random Numbers Generator</h1>
        <form>
          <div>
            <label>Lower Limit</label>
            <input
              value={min}
              type="number"
              onChange={handleMin}
              required
            ></input>
          </div>
          <div>
            <label>Upper Limit</label>
            <input
              value={max}
              type="number"
              onChange={handleMax}
              required
            ></input>
          </div>
          {/* <div>
            <label>how many random numbers do you want to generate ?</label>
            <input
              value={piece}
              type="number"
              onChange={handlePiece}
              required
            ></input>
          </div> */}
          {
            <>
              {showResult ? (
                <div className="card-result">
                  <h1>result: {results}</h1>
                </div>
              ) : null}
            </>
          }
          <div>
            <button onClick={generateNumber}>Generate</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RandomNumber;
