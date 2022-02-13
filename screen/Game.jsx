import React, { useContext, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCircle,
  faSignOutAlt,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import {
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
  PlayerTextGame,
} from "../components/styles";
import Box from "../components/Ball/Box";
import { CredentailsContext } from "../utils/context";

const Game = ({ navigation }) => {
  const { socket, user } = useContext(CredentailsContext);
  const [roomData, setRoomData] = useState({});
  const [showWelcome, setShowWelcome] = useState(true);
  const [leftTime, setLeftTime] = useState();
  const [isTie, setIsTie] = useState(false);
  const [winner, setWinner] = useState();
  const [matrix, setMatrix] = useState([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);

  useEffect(() => {
    // socket to listen for game start
    socket.on("gameStart", (data) => {
      setRoomData(data);
      setMatrix(data.matrix);
    });

    // socket to log updated matrix
    socket.on("updateMatrix", (data) => {
      setMatrix(data.matrix);
      setRoomData(data);
      if (data.winner) {
        console.log("winner", data.winner);
        setWinner(data.Winner);
      }
      if (data.isTie) {
        console.log("tie");
        setIsTie(true);
      }
    });

    // socket to listen player turn and player act on his turn
    socket.on("playerTurn", (data) => {});

    // socket to get mesasge that opponent is taking action
    socket.on("waiting", () => {
      console.log("Opponent is taking action");
    });

    // socket to listen  wrong choice
    socket.on("notValid", (data) => {
      console.log("Not a valid position!");
    });

    // socket to listen game winner and terminate connection
    socket.on("winner", (data) => {
      console.log("Winner is Player", data.winnner);
    });

    // socket to listen finish trigger when one of the player press r for resign
    socket.on("finish", (data) => {
      console.log(
        `Player ${data.resignBy} resigned \n Player ${data.winner} is winner`
      );
    });

    // socket to log game result as tie
    socket.on("gametie", () => {
      console.log(`Game is tied`);
    });

    // socket to log disconnection form server
    socket.on("disconnect", () => {
      console.log("Disconnected from Server");
    });

    socket.on("welcome", (data) => {
      setRoomData(data);
      console.log("welcome");
    });

    socket.on("preTimer", (data) => {
      setLeftTime(data.leftTime);
      console.log("data left time =>", data.leftTime);
      if (data.leftTime === 0);
      setShowWelcome(false);
    });

    return () => {
      socket.off("welcome");
      socket.off("challengeRejected");
      socket.off("preTimer");
      socket.off("challengeAccepted");
      socket.off("disconnect");
      socket.off("gametie");
      socket.off("finish");
      socket.off("updateMatrix");
      socket.off("gameStart");
    };
  }, []);

  const handlePlayerAction = (choice) => {
    socket.emit("playerActed", {
      choice,
      userId: user._id,
      roomId: roomData._id,
    });
  };
  return (
    <Gamecontainer>
      <StatusBar style="auto" />
      {/* <WelcomeText> Tic Tac Toe</WelcomeText> */}
      <GameExitSection>
        <GameExitButton onPress={() => navigation.navigate("GameLobby")}>
          {/* <GameExitText>Exit</GameExitText> */}
          <Text>
            <FontAwesomeIcon icon={faSignOutAlt} color="white" />
          </Text>
        </GameExitButton>
      </GameExitSection>
      {showWelcome ? (
        <>
          <WelcomeText> Starts in {leftTime}</WelcomeText>
        </>
      ) : (
        <GamePlayerBox>
          <GamePlayer>
            <PlayerGameSection>
              <Playericon>
                <Text>
                  <FontAwesomeIcon icon={faStar} color="white" />
                </Text>
              </Playericon>
              <PlayerTextGame>{roomData?.players[0]?.username}</PlayerTextGame>
            </PlayerGameSection>
          </GamePlayer>
          <GamePlayer>
            <PlayerGameSection>
              <Playericon>
                <FontAwesomeIcon icon={faCircle} color="white" />
              </Playericon>
              <PlayerTextGame>{roomData?.players[1]?.username}</PlayerTextGame>
            </PlayerGameSection>
          </GamePlayer>
        </GamePlayerBox>
      )}

      <Gamebg>
        <GameBorder>
          <Box1>
            <Gamerow1
              onPress={() => handlePlayerAction(1)}
              disabled={roomData?.currentPlayer !== user._id}
            >
              {matrix[0][0] !== 1 ? (
                <Box icon={matrix[0][0] === "0" ? faCircle : faStar} />
              ) : (
                <Text />
              )}
            </Gamerow1>
          </Box1>
          <Box2>
            <Gamerow1
              onPress={() => handlePlayerAction(2)}
              disabled={roomData?.currentPlayer !== user._id}
            >
              {matrix[0][1] !== 2 ? (
                <Box icon={matrix[0][1] === "0" ? faCircle : faStar} />
              ) : (
                <Text />
              )}
            </Gamerow1>
          </Box2>
          <Box3>
            <Gamerow1
              onPress={() => handlePlayerAction(3)}
              disabled={roomData?.currentPlayer !== user._id}
            >
              {matrix[0][2] !== 3 ? (
                <Box icon={matrix[0][2] === "0" ? faCircle : faStar} />
              ) : (
                <Text />
              )}
            </Gamerow1>
          </Box3>
        </GameBorder>
        <GameBorder>
          <Box4>
            <Gamerow1
              onPress={() => handlePlayerAction(4)}
              disabled={roomData?.currentPlayer !== user._id}
            >
              {matrix[1][0] !== 4 ? (
                <Box icon={matrix[1][0] === "0" ? faCircle : faStar} />
              ) : (
                <Text />
              )}
            </Gamerow1>
          </Box4>
          <Box5>
            <Gamerow1
              onPress={() => handlePlayerAction(5)}
              disabled={roomData?.currentPlayer !== user._id}
            >
              {matrix[1][1] !== 5 ? (
                <Box icon={matrix[1][1] === "0" ? faCircle : faStar} />
              ) : (
                <Text />
              )}
            </Gamerow1>
          </Box5>
          <Box6>
            <Gamerow1
              onPress={() => handlePlayerAction(6)}
              disabled={roomData?.currentPlayer !== user._id}
            >
              {matrix[1][2] !== 6 ? (
                <Box icon={matrix[1][2] === "0" ? faCircle : faStar} />
              ) : (
                <Text />
              )}
            </Gamerow1>
          </Box6>
        </GameBorder>
        <GameBorder>
          <Box7>
            <Gamerow1
              onPress={() => handlePlayerAction(7)}
              disabled={roomData?.currentPlayer !== user._id}
            >
              {matrix[2][0] !== 7 ? (
                <Box icon={matrix[2][0] === "0" ? faCircle : faStar} />
              ) : (
                <Text />
              )}
            </Gamerow1>
          </Box7>
          <Box8>
            <Gamerow1
              onPress={() => handlePlayerAction(8)}
              disabled={roomData?.currentPlayer !== user._id}
            >
              {matrix[2][1] !== 8 ? (
                <Box icon={matrix[2][1] === "0" ? faCircle : faStar} />
              ) : (
                <Text />
              )}
            </Gamerow1>
          </Box8>
          <Box9>
            <Gamerow1
              onPress={() => handlePlayerAction(9)}
              disabled={roomData?.currentPlayer !== user._id}
            >
              {matrix[2][2] !== 9 ? (
                <Box icon={matrix[2][2] === "0" ? faCircle : faStar} />
              ) : (
                <Text />
              )}
            </Gamerow1>
          </Box9>
        </GameBorder>
      </Gamebg>
    </Gamecontainer>
  );
};

export default Game;
