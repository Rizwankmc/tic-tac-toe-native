import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import ModalWrapper from "../components/Modal";
import {
  ButtonText,
  GridContainer,
  GridItem,
  GridItemImage,
  GridItemText,
  InnerContainer,
  Line,
  MsgBox,
  PageTitle,
  StyledButton,
  StyledContainer,
  SubTitle,
} from "../components/styles";
import { onlineUser } from "../utils/authApis";
import { CredentailsContext } from "../utils/context";

const GameLobby = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("");
  const [show, setShow] = useState(false);
  const context = useContext(CredentailsContext);

  const onlineUsers = async () => {
    await onlineUser(setUsers, setMsg, setMsgType, context.storedToken);
  };

  useEffect(() => {
    onlineUsers();
  }, []);
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
          <MsgBox type={msgType}>{msg}</MsgBox>
          <SubTitle>Play random match</SubTitle>
          <StyledButton>
            <ButtonText onPress={() => setShow(true)}>Click here</ButtonText>
          </StyledButton>
          <ModalWrapper show={show} setShow={setShow} />
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

export default GameLobby;
