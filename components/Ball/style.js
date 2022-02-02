import styled from "styled-components";
import { View } from "react-native";

export const Tank = styled.View`
  position: relative;
  margin: 5px;
`;
export const Middle = styled.View`
  width: 40px;
  height: 40px;
  background-color: #444;
  position: absolute;
`;
export const Top = styled.View`
  width: 40px;
  height: 20px;
  background-color: #666;
  border-radius: 60px;
  position: absolute;
  top: -20px;
`;

export const Bottom = styled.View`
  width: 40px;
  height: 20px;
  background-color: #444;
  border-radius: 60px;
  position: absolute;
  top: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.75);
`;
