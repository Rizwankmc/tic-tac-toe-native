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
  const [modelType, setModelType] = useState("");
  const [modalData, setModalData] = useState({});
  const [selectedUser, setSelectedUser] = useState({});
  const context = useContext(CredentailsContext);

  const onlineUsers = async () => {
    await onlineUser(setUsers, setMsg, setMsgType, context.storedToken);
  };

  const handleChallengeUser = async (user) => {
    context.socket.emit("challenge", {
      challengeTo: user,
      challengeBy: context.user,
    });
    setModelType("challenge");
    setShow(true);
    console.log("challenge emit");
  };

  useEffect(() => {
    onlineUsers();
  }, [navigation]);

  useEffect(() => {
    context.socket.on("newUser", () => {
      console.log("new User");
      onlineUsers();
    });

    context.socket.on("newChallenge", (data) => {
      setModelType("newChallenge");
      setModalData(data);
      setShow(true);
      console.log("new cha");
    });

    context.socket.on("challengeAccepted", (data) => {
      setModelType("challenge");
      setModalData(data);
      setShow(true);
    });
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
              <GridItem
                key={user._id}
                onPress={() => handleChallengeUser(user)}
              >
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
          <ModalWrapper
            show={show}
            setShow={setShow}
            screen={modelType}
            modalData={modalData}
            user={context.user}
            navigation={navigation}
          />
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

export default GameLobby;
