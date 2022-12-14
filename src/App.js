import React from "react";
import Display from "./components/Display";
import Button from "./components/Button";
import * as math from "mathjs";
import { Container, Content, NumPad, Title } from "./styles";

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
    { text: "DEL", id: "delete" },
    { text: "AC", id: "clear" },
  ];
  const [input, setInput] = React.useState(0);

  const handleClick = (pad) => {
    switch (pad) {
      case "DEL":
        if (input === 0) return;
        let splited = input.split("");
        let result = "";
        result = splited.splice(0, splited.length - 1).join("");
        if (result.length === 0) return setInput(0);
        setInput(result);
        break;
      case "AC":
        setInput(0);
        break;
      case ".":
        let separated = input.toString().split(/[\*\-\+\/]+/);
        if (separated[separated.length - 1].includes(".")) return;
        setInput(input + "" + pad);
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
          splitedSum.push(pad);
          resultSum = splitedSum.join("");
          return setInput(resultSum);
        }
        setInput(input + pad);
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
          splitedMul.push(pad);
          resultMul = splitedMul.join("");
          return setInput(resultMul);
        }
        setInput(input + pad);
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
          splitedDiv.push(pad);
          resultDiv = splitedDiv.join("");
          return setInput(resultDiv);
        }
        setInput(input + pad);
        break;
      case "-":
        setInput(input + "" + pad);
        break;
      case "=":
        setInput(math.round(math.evaluate(input), 4).toString());
        break;
      default:
        if (input === 0) {
          setInput(pad);
        } else setInput(input + "" + pad);
    }
  };
  return (
    <Container>
      <Content>
        <Title />
        <Display value={input} />
        <NumPad>
          {numPad.map((button) => (
            <Button
              key={button.id}
              text={button.text}
              id={button.id}
              onClick={() => handleClick(button.text)}
            />
          ))}
        </NumPad>
      </Content>
    </Container>
  );
}

export default App;
