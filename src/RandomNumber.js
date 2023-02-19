import { useState } from "react";
import "./App.css";

const RandomNumber = () => {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [piece, setPiece] = useState("");
  const [selectedRadioValue, setSelectedRadioValue] = useState("");
  const [results, setResults] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleMin = (e) => {
    setMin(Number(e.target.value));
  };
  const handleMax = (e) => {
    setMax(Number(e.target.value));
  };
  const handlePiece = (e) => {
    setPiece(Number(e.target.value));
  };

  const handleOptionChange = (e) => {
    setSelectedRadioValue(e.target.value);
  };

  const generateNumber = (e) => {
    e.preventDefault();

    for (let i = 0; i < piece; i++) {
      var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
      results.push(randomNumber);
      console.log("sonuc0", results);
      setMin("");
      setMax("");
      setPiece("");
    }
    console.log("sonuc1", results);
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
              className="card-input"
            ></input>
          </div>
          <div>
            <label>Upper Limit</label>
            <input
              value={max}
              type="number"
              onChange={handleMax}
              required
              className="card-input"
            ></input>
          </div>
          <div className="card-radio">
            <label>
              <input
                type="radio"
                value="option1"
                checked={selectedRadioValue === "asc"}
                onChange={handleOptionChange}
              />
              ASC
            </label>
            <label>
              <input
                type="radio"
                value="option2"
                checked={selectedRadioValue === "desc"}
                onChange={handleOptionChange}
              />
              DESC
            </label>
          </div>
          <div>
            <label>how many random numbers do you want to generate ?</label>
            <input
              value={piece}
              type="number"
              onChange={handlePiece}
              required
              className="card-input"
            ></input>
          </div>

          {showResult ? (
            <div className="card-result">
              {results.map((result, index) => (
                <h2 key={index}>{result}</h2>
              ))}
            </div>
          ) : null}
          <div className="buttons">
            <button className="btn-generate" onClick={generateNumber}>
              Generate
            </button>
            <button className="btn-delete" onClick={() => setResults([])}>
              Clean
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RandomNumber;
