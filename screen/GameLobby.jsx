// import { StatusBar } from "expo-status-bar";
// import React, { useContext, useEffect, useState } from "react";
// import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
// import ModalWrapper from "../components/Modal";
// import {
//   ButtonText,
//   GridContainer,
//   GridItem,
//   GridItemImage,
//   GridItemText,
//   InnerContainer,
//   Line,
//   MsgBox,
//   PageTitle,
//   StyledButton,
//   StyledContainer,
//   SubTitle,
// } from "../components/styles";
// import { onlineUser } from "../utils/authApis";
// import { CredentailsContext } from "../utils/context";

// const GameLobby = ({ navigation }) => {
//   const [users, setUsers] = useState([]);
//   const [msg, setMsg] = useState("");
//   const [msgType, setMsgType] = useState("");
//   const [show, setShow] = useState(false);
//   const context = useContext(CredentailsContext);

//   const onlineUsers = async () => {
//     await onlineUser(setUsers, setMsg, setMsgType, context.storedToken);
//   };

//   useEffect(() => {
//     onlineUsers();
//   }, []);
//   return (
//     <KeyboardAvoidingWrapper>
//       <StyledContainer>
//         <StatusBar style="dark" />
//         <InnerContainer>
//           <PageTitle>Tic Tac Toe</PageTitle>
//           <SubTitle>Challenge Online Users</SubTitle>
//           <Line />
//           <GridContainer>
//             {users.map((user) => (
//               <GridItem key={user._id}>
//                 <GridItemImage
//                   source={{ uri: user.profilePicUrl }}
//                   resize="cover"
//                 />
//                 <GridItemText>{user.username}</GridItemText>
//               </GridItem>
//             ))}
//           </GridContainer>
//           <MsgBox type={msgType}>{msg}</MsgBox>
//           <SubTitle>Play random match</SubTitle>
//           <StyledButton>
//             <ButtonText onPress={() => setShow(true)}>Click here</ButtonText>
//           </StyledButton>
//           <ModalWrapper show={show} setShow={setShow} />
//         </InnerContainer>
//       </StyledContainer>
//     </KeyboardAvoidingWrapper>
//   );
// };

// export default GameLobby;

import React from 'react'
import { StatusBar } from "expo-status-bar";
import {Text} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircle, faStar } from "@fortawesome/free-solid-svg-icons";
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
} from "../components/styles";

const GameLobby = () => {
  return (
    <Gamecontainer>
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
            <Gamerow1>1</Gamerow1>
          </Box1>
          <Box2>
          <Gamerow1>2</Gamerow1>
          </Box2>
          <Box3>
          <Gamerow1>3</Gamerow1>
          </Box3>
        </GameBorder>
        <GameBorder>
        <Box4>
          <Gamerow1>4</Gamerow1>
          </Box4>
          <Box5>
          <Gamerow1>5</Gamerow1>
          </Box5>
          <Box6>
          <Gamerow1>6</Gamerow1>
          </Box6>
        </GameBorder>
        <GameBorder>
        <Box7>
          <Gamerow1>7</Gamerow1>
          </Box7>
          <Box8>
          <Gamerow1>8</Gamerow1>
          </Box8>
          <Box9>
          <Gamerow1>9</Gamerow1>
          </Box9>
        </GameBorder>
      </Gamebg>
      <StatusBar style="auto" />
    </Gamecontainer>
  );
}

export default GameLobby;

