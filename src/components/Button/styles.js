import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: rgb(55, 55, 55);
  color: aliceblue;
  font-size: 2rem;
  border: none;
  border-radius: 5px;

  &#zero {
    grid-area: zero;
  }

  &#one {
    grid-area: one;
  }

  &#two {
    grid-area: two;
  }

  &#three {
    grid-area: three;
  }

  &#four {
    grid-area: four;
  }

  &#five {
    grid-area: five;
  }

  &#six {
    grid-area: six;
  }

  &#seven {
    grid-area: seven;
  }

  &#eight {
    grid-area: eight;
  }

  &#nine {
    grid-area: nine;
  }

  &#add {
    grid-area: add;
  }

  &#subtract {
    grid-area: subtract;
  }

  &#multiply {
    grid-area: multiply;
  }

  &#divide {
    grid-area: divide;
  }

  &#delete {
    grid-area: delete;
    background-color: firebrick;

    &:hover {
      filter: brightness(2);
    }
  }

  &#clear {
    grid-area: clear;
    background-color: firebrick;

    &:hover {
      filter: brightness(2);
    }
  }

  &#decimal {
    grid-area: decimal;
  }

  &#equals {
    grid-area: equals;
    background-color: darkgreen;
  }

  &:hover {
    cursor: pointer;
    transform: scale(0.95);
    filter: brightness(1.5);
  }
`;
