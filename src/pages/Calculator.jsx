import React, { useState, useEffect } from 'react';
import './MyCalculator.css';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(() => {
    const storedResult = localStorage.getItem('lastResult');
    return storedResult !== null ? storedResult : '';
  });

  const calculate = (op) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Please enter valid numbers");
      return;
    }

    let res = '';
    switch (op) {
      case '+':
        res = n1 + n2;
        break;
      case '-':
        res = n1 - n2;
        break;
      case '*':
        res = n1 * n2;
        break;
      case '/':
        res = n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
        break;
      default:
        res = '';
    }
    setResult(res);
  };

  useEffect(() => {
    if (result !== '') {
      localStorage.setItem('lastResult', result);
    }
  }, [result]);

  const clear = () => {
    setNum1('');
    setNum2('');
    setResult('');
    localStorage.removeItem('lastResult');
  };

  return (
    <div className="app">
      <h2>Calculator </h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <div className="buttons">
        <button onClick={() => calculate('+')}>+</button>
        <button onClick={() => calculate('-')}>-</button>
        <button onClick={() => calculate('*')}>×</button>
        <button onClick={() => calculate('/')}>÷</button>
        <button className="clear" onClick={clear}>Clear</button>
      </div>
      <h3>Result: {result}</h3>
    </div>
  );
}

export default Calculator;

