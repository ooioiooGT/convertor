import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "Convertor"
    
  })
  
  const [inputValue, setInputValue] = useState('');
  const [inputformat, setInputformat] = useState('');
  const [outputFormat, setOutputFormat] = useState('binary');
  const [conversionResult, setConversionResult] = useState('');
  

  const convert = () => {
    
    const input = inputValue.trim();
    let ivalue;
    const bin = /^[01]+$/;
    const dec = /^\d+$/;
    const hex = /^[0-9A-Fa-f]+$/;

    
    if (inputformat === 'hexadecimal') {
      // Check if the input is a valid hexadecimal number
      if (!hex.test(input)) {
        alert("Please enter a valid hexadecimal number");
        return;
      }
      ivalue = parseInt(input, 16);
    } else if (inputformat === 'decimal') {
      // Check if the input is a valid decimal number
      if (!dec.test(input)) {
        alert("Please enter a valid decimal number");
        return;
      }
      ivalue = parseInt(input, 10);
    } else if (inputformat === 'binary') {
      // Check if the input is a valid binary number
      if (!bin.test(input)) {
        alert("Please enter a valid binary number");
        return;
      }
      ivalue = parseInt(input, 2);
    }

    if (outputFormat === 'hexadecimal') {
      setConversionResult(ivalue.toString(16).toUpperCase());
    } 
    else if (outputFormat === 'decimal') {
      setConversionResult(ivalue.toString(10));
    } 
    else {
      setConversionResult(ivalue.toString(2));
    }
  };

  return (
    <div className="App">
      <h1>Converter</h1>
      <p>Enter a number:</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter binary number"
      />
      <select
        value={inputformat}
        onChange={(e) => setInputformat(e.target.value)}>
          <option value="binary">Binary</option>
          <option value="hexadecimal">Hexadecimal</option>
          <option value="decimal">Decimal</option>
        </select>
      <p>Output format:</p>
      <select
        value={outputFormat}
        onChange={(e) => setOutputFormat(e.target.value)}
      >
        <option value="binary">Binary</option>
        <option value="hexadecimal">Hexadecimal</option>
        <option value="decimal">Decimal</option>
      </select>
      <button onClick={convert}>Convert</button>
      <p>Conversion result:</p>
      <div>{conversionResult}</div>
    </div>
  );
}

export default App;
