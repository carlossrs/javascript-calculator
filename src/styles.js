import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #cacaca;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 410px;
  height: 400px;
  background-color: black;
  border-radius: 10px;
  padding: 10px 5px;
`;

export const Title = styled.h2`
  color: aliceblue;
  font-size: 1.6rem;
  margin: 1rem auto;

  &::before {
    content: "CALCULATOR";
  }
`;

export const NumPad = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 3px;
  grid-auto-flow: row;
  grid-template-areas:
    "seven eight nine delete clear"
    "four five six multiply divide"
    "one two three add subtract"
    "zero zero decimal equals equals";
  width: 400px;
  height: 300px;
`;
