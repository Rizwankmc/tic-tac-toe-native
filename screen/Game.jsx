import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import ball from "../assets/ball.jpg";
import cylinder from "../assets/cylinder.jpg";
import {
  BallImage,
  Box1,
  Box2,
  Box3,
  Box4,
  Box5,
  Box6,
  Box7,
  Box8,
  Box9,
  Gamebg,
  GameBorder,
  Gamecontainer,
  GamePlayer,
  GamePlayerBox,
  Gamerow1,
  Playericon,
  WelcomeText,
} from "../components/styles";
import Cylinder from "../components/Ball";

const Game = () => {
  return (
    <Gamecontainer>
      <StatusBar style="auto" />
      <WelcomeText> Tic Tac Toe</WelcomeText>
      <GamePlayerBox>
        <GamePlayer>
          <Text>Player 2</Text>
          <Playericon>
            <Text>
              <FontAwesomeIcon icon={faStar} />
            </Text>
          </Playericon>
        </GamePlayer>
        <GamePlayer>
          <Text>Player 2</Text>
          <Playericon>
            <Text>
              <FontAwesomeIcon icon={faCircle} />
            </Text>
          </Playericon>
        </GamePlayer>
      </GamePlayerBox>
      <Gamebg>
        <GameBorder>
          <Box1>
            <Gamerow1>
              <Cylinder />
            </Gamerow1>
          </Box1>
          <Box2>
            <Gamerow1></Gamerow1>
          </Box2>
          <Box3>
            <Gamerow1></Gamerow1>
          </Box3>
        </GameBorder>
        <GameBorder>
          <Box4>
            <Gamerow1></Gamerow1>
          </Box4>
          <Box5>
            <Gamerow1></Gamerow1>
          </Box5>
          <Box6>
            <Gamerow1></Gamerow1>
          </Box6>
        </GameBorder>
        <GameBorder>
          <Box7>
            <Gamerow1></Gamerow1>
          </Box7>
          <Box8>
            <Gamerow1></Gamerow1>
          </Box8>
          <Box9>
            <Gamerow1></Gamerow1>
          </Box9>
        </GameBorder>
      </Gamebg>
    </Gamecontainer>
  );
};

export default Game;
