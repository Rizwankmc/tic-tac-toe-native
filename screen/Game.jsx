import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircle, faSignOutAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import ball from "../assets/ball.jpg";
import cylinder from "../assets/cylinder.jpg";
import user1 from "../assets/profile/1.jpg";
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
  GamePlayerText,
  Player,
  PlayerImage,
  PlayerText,
  PlayerGameSection,
  GameExitSection,
  GameExitButton,
  GameExitText,
  PlayerTextGame
} from "../components/styles";
import UserOne from "../components/Ball/UserOne";
import UserTwo from "../components/Ball/UserTwo";

const Game = () => {
  return (
    <Gamecontainer>
      <StatusBar style="auto" />
      {/* <WelcomeText> Tic Tac Toe</WelcomeText> */}
      <GameExitSection>
        <GameExitButton>
          {/* <GameExitText>Exit</GameExitText> */}
          <Text>
                <FontAwesomeIcon icon={faSignOutAlt} color='white' />
              </Text>
        </GameExitButton>
      </GameExitSection>
      <GamePlayerBox>
        <GamePlayer>
          <PlayerGameSection>
            <Playericon>
              <Text>
                <FontAwesomeIcon icon={faStar} color='white' />
              </Text>
            </Playericon>
            <PlayerTextGame>Rizwan</PlayerTextGame>
          </PlayerGameSection>
        </GamePlayer>
        <GamePlayer>
          <PlayerGameSection>
            <Playericon>
              <FontAwesomeIcon icon={faCircle} color='white' />
            </Playericon>
            <PlayerTextGame>Ayushi</PlayerTextGame>
          </PlayerGameSection>
        </GamePlayer>
      </GamePlayerBox>
      <Gamebg>
        <GameBorder>
          <Box1>
            <Gamerow1>
              <UserOne />
            </Gamerow1>
          </Box1>
          <Box2>
            <Gamerow1>
              <UserTwo />
            </Gamerow1>
          </Box2>
          <Box3>
            <Gamerow1>
              <UserOne />
            </Gamerow1>
          </Box3>
        </GameBorder>
        <GameBorder>
          <Box4>
            <Gamerow1>
              <UserOne />
            </Gamerow1>
          </Box4>
          <Box5>
            <Gamerow1>
              <UserOne />
            </Gamerow1>
          </Box5>
          <Box6>
            <Gamerow1>
              <UserOne />
            </Gamerow1>
          </Box6>
        </GameBorder>
        <GameBorder>
          <Box7>
            <Gamerow1>
              <UserOne />
            </Gamerow1>
          </Box7>
          <Box8>
            <Gamerow1>
              <UserOne />
            </Gamerow1>
          </Box8>
          <Box9>
            <Gamerow1>
              <UserTwo />
            </Gamerow1>
          </Box9>
        </GameBorder>
      </Gamebg>
    </Gamecontainer>
  );
};

export default Game;
