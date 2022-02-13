import { useContext, useEffect, useState } from "react";
import { Button, Modal, Text, View } from "react-native";
import close from "../assets/close.png";
import user1 from "../assets/profile/1.jpg";
import user2 from "../assets/profile/2.jpg";
import waitingImg from "../assets/questionMark.png";
import vs from "../assets/vs.png";
import { CredentailsContext } from "../utils/context";
import {
  StyledModalWrapper,
  StyledModal,
  ButtonText,
  StyledCloseComponent,
  PlayerImage,
  ModalClose,
  PlayerBox,
  Player,
  PlayerText,
  PlayerVSImage,
  PlayerVs,
  StyledButtonModal,
  MsgBox,
  Line,
  StyledButton,
  NewChallangeBox,
  NewChallanagePlayer,
  RejectButton,
  AcceptButtonModal,
  RejectButtonModal,
  ChallangeButton,
  AcceptButton,
} from "./styles";

const ModalWrapper = ({
  show,
  setShow,
  screen,
  user,
  modalData,
  navigation,
  setModalData,
  setModelType,
}) => {
  const { socket, user: userData } = useContext(CredentailsContext);
  const [msg, setMsg] = useState("waiting for Opponent...");
  const [leftTime, setLeftTime] = useState(null);
  const handleAccept = () => {
    socket.emit("challengeAccept", {
      ...modalData,
    });
    setShow(false);
  };

  const handleReject = () => {
    socket.emit("challengeReject", {
      ...modalData,
    });
    setShow(false);
    setModalData({});
    setModelType("");
  };

  const handleClose = () => {
    setShow(false);
    setMsg("waiting for Opponent ...");
    setPlayerTwo();
    setLeftTime(null);
    setModalData({});
    setModelType("");
  };

  useEffect(() => {
    socket.on("challengeRejected", () => {
      setMsg("Opponent Rejected your challenge");
    });
    socket.on("challengeAccepted", () => {
      setMsg("Challenge Accepted");
    });

    socket.on("gameTimer", (data) => {
      setLeftTime(data.leftTime);
      if (data.leftTime === 0) {
        setModalData({});
        setModelType("");
        setShow(false);
        navigation.navigate("Game");
      }
    });

    return () => {
      socket.off("challengeRejected");
      socket.off("gameTimer");
      socket.off("challengeAccepted");
    };
  }, []);

  const getChild = () => {
    switch (screen) {
      case "search": {
        return (
          <>
            <>
              <NewChallangeBox>
                <NewChallanagePlayer>
                  <PlayerImage source={{ uri: user?.profilePicUrl }} />
                  <PlayerText>{user?.username}</PlayerText>
                </NewChallanagePlayer>
              </NewChallangeBox>
              <MsgBox>Want to challenge or chat</MsgBox>
              <ChallangeButton>
                <AcceptButtonModal onPress={handleAccept}>
                  <AcceptButton>Chat</AcceptButton>
                </AcceptButtonModal>
                <RejectButtonModal onPress={handleReject}>
                  <RejectButton>Chat</RejectButton>
                </RejectButtonModal>
              </ChallangeButton>
            </>
          </>
        );
      }
      case "newChallenge": {
        return (
          <>
            <NewChallangeBox>
              <NewChallanagePlayer>
                <PlayerImage
                  source={{ uri: modalData?.challengeBy?.profilePicUrl }}
                />
              </NewChallanagePlayer>
            </NewChallangeBox>
            <MsgBox>
              {modalData?.challengeBy?.username} has challenged you !!
            </MsgBox>
            <ChallangeButton>
              <AcceptButtonModal onPress={handleAccept}>
                <AcceptButton>Accept</AcceptButton>
              </AcceptButtonModal>
              <RejectButtonModal onPress={handleReject}>
                <RejectButton>Reject</RejectButton>
              </RejectButtonModal>
            </ChallangeButton>
          </>
        );
      }
      case "challenge": {
        return (
          <>
            <PlayerBox>
              <Player>
                <PlayerImage
                  source={{
                    uri: modalData.challengeBy
                      ? modalData.challengeBy.profilePicUrl
                      : userData.profilePicUrl,
                  }}
                />
                <PlayerText>
                  {modalData.challengeBy
                    ? modalData.challengeBy.username
                    : userData?.username}
                </PlayerText>
              </Player>
              <PlayerVs>
                <PlayerVSImage source={vs} />
              </PlayerVs>
              <Player>
                <PlayerImage
                  source={
                    modalData.challengeTo
                      ? {
                          uri: modalData.challengeTo.profilePicUrl,
                        }
                      : waitingImg
                  }
                />
                <PlayerText>
                  {modalData.challengeTo
                    ? modalData.challengeTo.username
                    : "...."}
                </PlayerText>
              </Player>
            </PlayerBox>
            <MsgBox>{leftTime ? leftTime : ""}</MsgBox>
            <MsgBox type="waiting">{msg}</MsgBox>
            <StyledButtonModal>
              <ButtonText>Cancel</ButtonText>
            </StyledButtonModal>
          </>
        );
      }
      case "challengeAccepted": {
        return (
          <View>
            <Text>{modalData.playerName} accepted your challenge !!!</Text>
            <View>
              <StyledButton onPress={handleClose}>
                <ButtonText>Cancel</ButtonText>
              </StyledButton>
            </View>
          </View>
        );
      }

      case "challengeRejected": {
        return (
          <View>
            <Text>{modalData.playerName} rejected your challenge !!!</Text>
            <View>
              <StyledButton onPress={handleClose}>
                <ButtonText>Cancel</ButtonText>
              </StyledButton>
            </View>
          </View>
        );
      }
      default:
        return;
    }
  };
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={show}
      hasBackdrop={true}
      backdropOpacity={0.8}
      backdropColor={"rgba(255, 0, 0, 0.8)"}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setShow(false);
      }}
    >
      <StyledModalWrapper>
        <StyledCloseComponent onPress={() => setShow(false)}>
          <ModalClose source={close} />
        </StyledCloseComponent>

        {getChild()}
      </StyledModalWrapper>
    </Modal>
  );
};

export default ModalWrapper;
