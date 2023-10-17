import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [outputFormat, setOutputFormat] = useState('hexadecimal');
  const [conversionResult, setConversionResult] = useState('');

  const convert = () => {
    const input = inputValue.trim();
    let decimalValue;

    if (/^[01]+$/.test(input)) {
      // Binary input
      decimalValue = parseInt(input, 2);
    } else if (/^[0-9A-Fa-f]+$/.test(input)) {
      // Hexadecimal input
      decimalValue = parseInt(input, 16);
    } else if (/^\d+$/.test(input)) {
      // Decimal input
      decimalValue = parseInt(input, 10);
    } else {
      alert("Please enter a valid number in binary, hexadecimal, or decimal format.");
      return;
    }

    if (outputFormat === 'hexadecimal') {
      const hexValue = decimalValue.toString(16).toUpperCase();
      setConversionResult(hexValue);
    } else {
      setConversionResult(decimalValue);
    }
  };

  return (
    <div className="App">
      <h1>Number Converter</h1>
      <p>Enter a number:</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a number in binary, hexadecimal, or decimal format"
      />
      <p>Output format:</p>
      <select
        value={outputFormat}
        onChange={(e) => setOutputFormat(e.target.value)}
      >
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
