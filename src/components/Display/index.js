import React from "react";
import { DisplayContainer } from "./styles";

export default function Display({ value }) {
  return <DisplayContainer value={value}>{value}</DisplayContainer>;
}
