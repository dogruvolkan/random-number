import React, { useState } from "react";
import "./App.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdOutlineContentCopy } from "react-icons/md";

const RandomNumber = () => {
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const [piece, setPiece] = useState();
  const [selectedSort, setSelectedSort] = useState("");
  const [selectedRepeat, setSelectedRepeat] = useState("");
  const [results, setResults] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleMin = (e) => {
    setMin(+e.target.value);
  };
  const handleMax = (e) => {
    setMax(+e.target.value);
  };
  const handlePiece = (e) => {
    setPiece(+e.target.value);
  };

  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
  };

  const handleRepeatChange = (e) => {
    setSelectedRepeat(e.target.value);
  };

  const generateNumber = (e) => {
    e.preventDefault();

    for (let i = 0; i < piece; i++) {
      var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
      // if (selectedRepeat === "norepeat") {
      //   results.push(randomNumber);
      //   results = [...new Set(results)];
      // } else {
      //   results.push(randomNumber);
      // }
      results.push(randomNumber);
    }

    if (selectedSort === "asc") {
      results.sort(function (a, b) {
        return a - b;
      });
    } else if (selectedSort === "desc") {
      results.sort(function (a, b) {
        return b - a;
      });
    }

    setShowResult(true);
  };

  return (
    <div className="card-container">
      <div className="card">
        <h1>Random Numbers Generator</h1>
        <form>
          <div className="card-inputs">
            <label>Lower Limit</label>
            <input
              value={min}
              type="number"
              onChange={handleMin}
              required
              className="card-input"
              placeholder="1"
            ></input>
          </div>
          <div className="card-inputs">
            <label>Upper Limit</label>
            <input
              value={max}
              type="number"
              onChange={handleMax}
              required
              className="card-input"
              placeholder="100"
            ></input>
          </div>
          <div className="card-inputs">
            <label>How many random numbers do you want to generate ?</label>
            <input
              value={piece}
              type="number"
              onChange={handlePiece}
              required
              className="card-input"
              placeholder="5"
            ></input>
          </div>
          <div className="card-radio">
            <fieldset>
              <legend>Allow number repetition </legend>
              <label>
                <input
                  type="radio"
                  value="repeat"
                  checked={selectedRepeat === "repeat"}
                  onChange={handleRepeatChange}
                />
                <span>Allow Repeat</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="norepeat"
                  checked={selectedRepeat === "norepeat"}
                  onChange={handleRepeatChange}
                />
                <span>Don't Allow Repeat</span>
              </label>
            </fieldset>
          </div>
          <div className="card-radio">
            <fieldset>
              <legend>Sorting numbers </legend>
              <label>
                <input
                  type="radio"
                  value="asc"
                  checked={selectedSort === "asc"}
                  onChange={handleSortChange}
                />
                <span>ASC</span>
              </label>

              <label>
                <input
                  type="radio"
                  value="desc"
                  checked={selectedSort === "desc"}
                  onChange={handleSortChange}
                />
                <span>DESC</span>
              </label>

              <label>
                <input
                  type="radio"
                  value="no"
                  checked={selectedSort === "no"}
                  onChange={handleSortChange}
                />
                <span>NO</span>
              </label>
            </fieldset>
          </div>

          <div className="result-sum">
            {showResult ? (
              <div>
                <p>
                  {piece} numbers between {min} and {max} sorting {selectedSort}
                </p>
              </div>
            ) : null}
          </div>
          {showResult ? (
            <div className="card-result">
              {results.map((result, index) => (
                <h2 key={index}>{result}</h2>
              ))}
              <div className="result-copy">
                <CopyToClipboard text={results} onCopy={() => setCopied(true)}>
                  <span className="result-copy">
                    <MdOutlineContentCopy />
                  </span>
                </CopyToClipboard>
                {copied ? <p style={{ color: "green" }}>copied</p> : null}
              </div>
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
