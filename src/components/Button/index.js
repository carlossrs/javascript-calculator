import React from "react";
import { ButtonContainer } from "./styles";

export default function Button(props) {
  return (
    <ButtonContainer id={props.id} key={props.id} onClick={props.onClick}>
      {props.text}
    </ButtonContainer>
  );
}
