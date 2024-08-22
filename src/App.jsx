import React, { useState, useRef } from 'react';
import './styles/app.css';
import './styles/cs.css';
import './styles/notes.css';
import Dropdown from './Dropdown';
import Cheatsheet from './Cheatsheet';
import Notes from './Notes';
import { evaluate } from 'mathjs';

// Define the mathematical types for the dropdown menu
const mathTypes = [
  'Arithmetic', 'Algebra', 'Geometry', 'Trigonometry', 'Calculus',
  'Linear Algebra', 'Statistics', 'Probability', 'Discrete Mathematics',
  'Number Theory', 'Differential Equations', 'Mathematical Logic', 'Set Theory'
];

function App() {
  // State variables
  const [display, setDisplay] = useState(''); // Display value for calculator
  const [selectedMathType, setSelectedMathType] = useState(mathTypes[0]); // Selected math type for the cheatsheet
  const [isRadian, setIsRadian] = useState(false); // Toggle for radian/degree mode
  const [lastAnswer, setLastAnswer] = useState(null); // Last answer for the Ans button
  const [inverseMode, setInverseMode] = useState(false); // Toggle for inverse trigonometric functions
  const displayRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState(0);

  // Clear the calculator display and reset state variables
  const handleClear = () => {
    setDisplay('');
  };

  // Append a character to the current display value at the cursor position
  const handleButtonPress = (char) => {
    if (display === '0') {
      setDisplay('');
    }
    if (char === 'Ans') {
      if (lastAnswer !== null) {
        const updatedDisplay = display.slice(0, cursorPosition) + lastAnswer + display.slice(cursorPosition);
        setDisplay(updatedDisplay);
        setCursorPosition(cursorPosition + lastAnswer.toString().length);
      }
    } else {
      const updatedDisplay = display.slice(0, cursorPosition) + char + display.slice(cursorPosition);
      setDisplay(updatedDisplay);
      setCursorPosition(cursorPosition + char.length);
    }
  };

  // Perform the calculation based on the expression entered
  const handleEqualsPress = () => {
    try {
      let expression = display;

      // Replace degrees to radians for trigonometric functions if needed
      if (!isRadian) {
        expression = expression.replace(/sin\(([^)]+)\)/g, (match, p1) => `sin(${p1} * ${Math.PI} / 180)`);
        expression = expression.replace(/cos\(([^)]+)\)/g, (match, p1) => `cos(${p1} * ${Math.PI} / 180)`);
        expression = expression.replace(/tan\(([^)]+)\)/g, (match, p1) => `tan(${p1} * ${Math.PI} / 180)`);
        expression = expression.replace(/asin\(([^)]+)\)/g, (match, p1) => `asin(${p1}) * 180 / ${Math.PI}`);
        expression = expression.replace(/acos\(([^)]+)\)/g, (match, p1) => `acos(${p1}) * 180 / ${Math.PI}`);
        expression = expression.replace(/atan\(([^)]+)\)/g, (match, p1) => `atan(${p1}) * 180 / ${Math.PI}`);
      }

      console.log(`Evaluating expression: ${expression}`);
      const result = evaluate(expression);
      setDisplay(result.toString());
      setLastAnswer(result);
    } catch (error) {
      console.error(error);
      setDisplay('Error');
    }
  };

  // Handle focus on the display input
  const handleFocus = (event) => {
    setCursorPosition(event.target.selectionStart);
  };

  // Handle change in the display input
  const handleChange = (event) => {
    const input = event.target.value;
    const validCharacters = /^[0-9+\-*/().e]*$/;

    if (validCharacters.test(input)) {
      setDisplay(input);
      setCursorPosition(event.target.selectionStart);
    }
  };

  // Handle special functions like π, √, x², and EXP
  const handleSpecialFunction = (func) => {
    let result;
    try {
      switch (func) {
        case 'π':
          handleButtonPress(Math.PI.toString());
          return;
        case '√':
          result = Math.sqrt(evaluate(display));
          break;
        case 'x²':
          result = Math.pow(evaluate(display), 2);
          break;
        case 'x³':
          result = Math.pow(evaluate(display), 3);
          break;
        case 'EXP':
          handleButtonPress('e');
          return;
        case 'log':
          handleButtonPress('log10(');
          return;
        case '10x':
          if (inverseMode) {
            handleButtonPress('log10(');
          } else {
            handleButtonPress('10^');
          }
          return;
        case 'xy':
          handleButtonPress('^');
          return;
        case 'ex':
          handleButtonPress('exp(');
          return;
        case 'yx':
          handleButtonPress('root(');
          return;
        case '3√x':
          result = Math.cbrt(evaluate(display));
          break;
        default:
          return;
      }
      setDisplay(result.toString());
      setCursorPosition(result.toString().length);
    } catch (error) {
      setDisplay('Error');
    }
  };

  // Handle trigonometric functions, including inverse mode
  const handleTrigFunction = (func) => {
    handleButtonPress(`${func}(`);
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white p-4">
      {/* Title of the calculator */}
        <div className="title">
          <h1>Math +</h1>
        </div>
      <div className="flex flex-row justify-start items-start h-full">
        {/* Calculator display and buttons */}
        <div className="calculator-container">
          <input
            ref={displayRef}
            type="text"
            className="display bg-black text-green-500 text-2xl p-5 mb-4 rounded text-right"
            value={display}
            onChange={handleChange}
            onFocus={handleFocus}
            placeholder="0"
          />
          <div className="buttons">
            <div className="grid grid-cols-6 gap-1">
              {/* Radian/Degree toggle switch */}
              <div className="col-span-2 flex flex-col mt-1 items-center">
                <span className="text-xs">Deg - Rad</span>
                <label className="switch">
                  <input type="checkbox" checked={isRadian} onChange={() => {
                    setIsRadian(!isRadian);
                    console.log(`Mode switched to: ${!isRadian ? 'Radians' : 'Degrees'}`);
                  }} />
                  <span className="slider round"></span>
                </label>
              </div>
              <button className="col-span-1 bg-gray-900 hover:bg-gray-600 p-2 text-xs rounded h-12 top-row-button" onClick={() => handleTrigFunction(inverseMode ? 'asin' : 'sin')}>
                {inverseMode ? 'sin⁻¹' : 'sin'}
              </button>
              <button className="col-span-1 bg-gray-900 hover:bg-gray-600 p-2 text-xs rounded h-12 top-row-button" onClick={() => handleTrigFunction(inverseMode ? 'acos' : 'cos')}>
                {inverseMode ? 'cos⁻¹' : 'cos'}
              </button>
              <button className="col-span-1 bg-gray-900 hover:bg-gray-600 p-2 text-xs rounded h-12 top-row-button" onClick={() => handleTrigFunction(inverseMode ? 'atan' : 'tan')}>
                {inverseMode ? 'tan⁻¹' : 'tan'}
              </button>
              <button className="col-span-1 bg-gray-900 hover:bg-gray-600 p-2 text-xs rounded h-12" onClick={() => {
                setInverseMode(!inverseMode);
              }}>Inv</button>
            </div>

            <div className="grid grid-cols-6 gap-1 mt-1">
              <button className="col-span-1 bg-gray-900 hover:bg-gray-600 p-2 text-1xs rounded h-12 top-row-button" onClick={() => handleSpecialFunction('e')}>e</button>
              <button className="col-span-1 bg-gray-900 hover:bg-gray-600 p-2 text-1xs rounded h-12 top-row-button" onClick={() => handleSpecialFunction('xy')}>x<sup>y</sup></button>
              <button className="col-span-1 bg-gray-900 hover:bg-gray-600 p-2 text-1xs rounded h-12" onClick={() => handleSpecialFunction('ex')}>e<sup>x</sup></button>
              <button className="col-span-1 bg-gray-900 hover:bg-gray-600 p-2 text-xs rounded h-12" onClick={() => handleSpecialFunction('3√x')}>∛x</button>
              <button className="col-span-1 bg-gray-900 hover:bg-gray-600 p-2 text-1xs rounded h-12" onClick={() => handleSpecialFunction('x³')}>x<sup>3</sup></button>
              <button className="col-span-1 bg-gray-900 hover:bg-gray-600 p-2 text-xs rounded h-12 top-row-button" onClick={() => handleSpecialFunction('10x')}>{inverseMode ? 'log' : <><sup>10</sup>x</>}</button>
            </div>

            <div className="grid grid-cols-6 gap-1 mt-1">
              <button className="col-span-1 bg-gray-900 hover:bg-gray-600 p-2 text-1xs rounded h-12" onClick={() => handleSpecialFunction('π')}>π</button>
              <button className="col-span-1 bg-gray-900 hover:bg-gray-600 p-2 text-1xs rounded h-12 top-row-button" onClick={() => handleButtonPress('(')}>(</button>
              <button className="col-span-1 bg-gray-900 hover:bg-gray-600 p-2 text-1xs rounded h-12 top-row-button" onClick={() => handleButtonPress(')')}>)</button>
              <button className="col-span-1 bg-gray-900 hover:bg-gray-600 p-2 text-1xs rounded h-12" onClick={() => handleSpecialFunction('√')}>√</button>
              <button className="col-span-1 bg-gray-900 hover:bg-gray-600 p-2 text-1xs rounded h-12" onClick={() => handleSpecialFunction('x²')}>x²</button>
              <button className="col-span-1 bg-gray-900 hover:bg-gray-600 p-2 text-xs rounded h-12" onClick={() => handleButtonPress('Ans')}>Ans</button>
            </div>

            <div className="grid grid-cols-5 gap-1 mt-1">
              <button className="col-span-1 bg-gray-700 hover:bg-gray-600 p-2 text-4xs rounded h-12" onClick={() => handleButtonPress('7')}>7</button>
              <button className="col-span-1 bg-gray-700 hover:bg-gray-600 p-2 text-4xs rounded h-12" onClick={() => handleButtonPress('8')}>8</button>
              <button className="col-span-1 bg-gray-700 hover:bg-gray-600 p-2 text-4xs rounded h-12" onClick={() => handleButtonPress('9')}>9</button>
              <button className="col-span-1 bg-gray-700 hover:bg-gray-600 p-2 text-4xs rounded h-12" onClick={() => handleButtonPress('/')}>÷</button>
              <button className="col-span-1 bg-blue-800 hover:bg-gray-600 p-2 text-4xs rounded h-12" onClick={handleClear}>AC</button>
            </div>

            <div className="grid grid-cols-5 gap-1 mt-1">
              <button className="col-span-1 bg-gray-700 hover:bg-gray-600 p-2 text-4xs rounded h-12" onClick={() => handleButtonPress('4')}>4</button>
              <button className="col-span-1 bg-gray-700 hover:bg-gray-600 p-2 text-4xs rounded h-12" onClick={() => handleButtonPress('5')}>5</button>
              <button className="col-span-1 bg-gray-700 hover:bg-gray-600 p-2 text-4xs rounded h-12" onClick={() => handleButtonPress('6')}>6</button>
              <button className="col-span-1 bg-gray-700 hover:bg-gray-600 p-2 text-4xs rounded h-12" onClick={() => handleButtonPress('*')}>×</button>
              <button className="col-span-1 bg-gray-700 hover:bg-gray-600 p-2 text-xs rounded h-12" onClick={() => handleButtonPress('%')}>%</button>
            </div>

            <div className="grid grid-cols-5 gap-1 mt-1">
              <button className="col-span-1 bg-gray-700 hover:bg-gray-600 p-2 text-4xs rounded h-12" onClick={() => handleButtonPress('1')}>1</button>
              <button className="col-span-1 bg-gray-700 hover:bg-gray-600 p-2 text-4xs rounded h-12" onClick={() => handleButtonPress('2')}>2</button>
              <button className="col-span-1 bg-gray-700 hover:bg-gray-600 p-2 text-4xs rounded h-12" onClick={() => handleButtonPress('3')}>3</button>
              <button className="col-span-1 bg-gray-700 hover:bg-gray-600 p-2 text-4xs rounded h-12" onClick={() => handleButtonPress('+')}>+</button>
              <button className="col-span-1 row-span-2 equals-btn bg-gray-700 hover:bg-gray-600 p-2 text-4xs rounded h-24" onClick={handleEqualsPress}>=</button>
            </div>
          </div>
          <div className="calculator-bottom-row">
            <button className="bg-gray-700 hover:bg-gray-600 p-2 text-4xs rounded h-12" onClick={() => handleButtonPress('0')}>0</button>
            <button className="bg-gray-700 hover:bg-gray-600 p-2 text-4xs rounded h-12" onClick={() => handleButtonPress('.')}>.</button>
            <button className="bg-gray-700 hover:bg-gray-600 p-2 text-xs rounded h-12" onClick={() => handleSpecialFunction('EXP')}>EXP</button>
            <button className="bg-gray-700 hover:bg-gray-600 p-2 text-4xs rounded h-12" onClick={() => handleButtonPress('-')}>-</button>
          </div>
        </div>
        {/* Dropdown menu for selecting math type and displaying cheatsheet */}
        <div className="flex-col items-center mx-4 mt-20 dropdown-container">
          <div className="flex mb-2 items-center">
            <Dropdown options={mathTypes} onSelect={setSelectedMathType} />
            <span className="text-white ml-2 cheatsheet-text">CheatSheet</span>
          </div>
        <div>
          <Cheatsheet selectedMathType={selectedMathType} />
        </div>
      </div>
        {/* Notes component */}
        <div className="notes-container">
          <Notes />
        </div>
      </div>
    </div>
  );
}

export default App;