import React from "react";
import "./App.css";
import * as math from "mathjs";

function App() {
  const numPad = [
    { text: 0, id: "zero" },
    { text: 1, id: "one" },
    { text: 2, id: "two" },
    { text: 3, id: "three" },
    { text: 4, id: "four" },
    { text: 5, id: "five" },
    { text: 6, id: "six" },
    { text: 7, id: "seven" },
    { text: 8, id: "eight" },
    { text: 9, id: "nine" },
    { text: ".", id: "decimal" },
    { text: "=", id: "equals" },
    { text: "+", id: "add" },
    { text: "-", id: "subtract" },
    { text: "*", id: "multiply" },
    { text: "/", id: "divide" },
    { text: "AC", id: "clear" },
  ];

  const [input, setInput] = React.useState(0);

  function handleClick(par) {
    switch (par) {
      case "AC":
        setInput(0);
        break;
      case ".":
        let separated = input.toString().split(/[\*\-\+\/]+/);
        if (separated[separated.length - 1].includes(".")) return;
        setInput(input + "" + par);
        break;
      case "+":
        let splitedSum = "";
        let resultSum = "";
        if (
          input[input.length - 1] === "/" ||
          input[input.length - 1] === "*" ||
          input[input.length - 1] === "-" ||
          input[input.length - 1] === "+"
        ) {
          splitedSum = input.split("");
          for (let i = splitedSum.length - 1; i > 0; i--) {
            if (
              splitedSum[i] === "/" ||
              splitedSum[i] === "*" ||
              splitedSum[i] === "-" ||
              splitedSum[i] === "+"
            ) {
              splitedSum.pop();
              i = splitedSum.length;
            } else i = 0;
          }
          splitedSum.push(par);
          resultSum = splitedSum.join("");
          return setInput(resultSum);
        }
        setInput(input + par);
        break;
      case "*":
        let splitedMul = "";
        let resultMul = "";
        if (
          input[input.length - 1] === "/" ||
          input[input.length - 1] === "*" ||
          input[input.length - 1] === "-" ||
          input[input.length - 1] === "+"
        ) {
          splitedMul = input.split("");
          for (let i = splitedMul.length - 1; i > 0; i--) {
            if (
              splitedMul[i] === "/" ||
              splitedMul[i] === "*" ||
              splitedMul[i] === "-" ||
              splitedMul[i] === "+"
            ) {
              splitedMul.pop();
              i = splitedMul.length;
            } else i = 0;
          }
          splitedMul.push(par);
          resultMul = splitedMul.join("");
          return setInput(resultMul);
        }
        setInput(input + par);
        break;
      case "/":
        let splitedDiv = "";
        let resultDiv = "";
        if (
          input[input.length - 1] === "/" ||
          input[input.length - 1] === "*" ||
          input[input.length - 1] === "-" ||
          input[input.length - 1] === "+"
        ) {
          splitedDiv = input.split("");
          for (let i = splitedDiv.length - 1; i > 0; i--) {
            if (
              splitedDiv[i] === "/" ||
              splitedDiv[i] === "*" ||
              splitedDiv[i] === "-" ||
              splitedDiv[i] === "+"
            ) {
              splitedDiv.pop();
              i = splitedDiv.length;
            } else i = 0;
          }
          splitedDiv.push(par);
          resultDiv = splitedDiv.join("");
          return setInput(resultDiv);
        }
        setInput(input + par);
        break;
      case "-":
        setInput(input + "" + par);
        break;
      case "=":
        setInput(math.round(math.evaluate(input), 4));
        break;
      default:
        if (input === 0) {
          setInput(par);
        } else setInput(input + "" + par);
    }
  }

  return (
    <div className="App">
      <div className="calculator">
        <h2 className="title">CALCULATOR</h2>
        <div id="screen">
          <span id="display" className="input" input={input}>
            {input}
          </span>
        </div>
        <div id="num-pad">
          {numPad.map((button) => (
            <button
              className="button"
              id={button.id}
              key={button.id}
              onClick={() => {
                handleClick(button.text);
              }}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
