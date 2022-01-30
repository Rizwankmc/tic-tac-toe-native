import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import {
  ButtonText,
  GridContainer,
  GridItem,
  GridItemImage,
  GridItemText,
  InnerContainer,
  Line,
  PageTitle,
  StyledButton,
  StyledContainer,
  SubTitle,
} from "../components/styles";
import { searchUser } from "../utils/authApis";
import { CredentailsContext } from "../utils/context";

const GameLobby = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("");
  const context = useContext(CredentailsContext);

  const onlineUsers = async (value) => {
    console.log("e =>", value);
    await searchUser(value, setUsers, setMsg, setMsgType, context.storedToken);
  };
  console.log("users=>", users);
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageTitle>Tic Tac Toe</PageTitle>
          <SubTitle>Challenge Online Users</SubTitle>
          <Line />
          <GridContainer>
            {users.map((user) => (
              <GridItem key={user._id}>
                <GridItemImage
                  source={{ uri: user.profilePicUrl }}
                  resize="cover"
                />
                <GridItemText>{user.username}</GridItemText>
              </GridItem>
            ))}
          </GridContainer>
          <SubTitle>Play random match</SubTitle>
          <StyledButton>
            <ButtonText>Click here</ButtonText>
          </StyledButton>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

export default GameLobby;
