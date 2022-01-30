import { Button, Modal, Text, View } from "react-native";
import close from "../assets/close.png";
import user1 from "../assets/profile/1.jpg";
import user2 from "../assets/profile/2.jpg";
import waitingImg from "../assets/questionMark.png";
import vs from "../assets/vs.png";
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
} from "./styles";

const ModalWrapper = ({ show, setShow, screen, user }) => {
  return (
    <StyledModal
      animationType="fade"
      transparent={true}
      visible={show}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setShow(false);
      }}
    >
      <StyledModalWrapper>
        <StyledCloseComponent onPress={() => setShow(false)}>
          <ModalClose source={close} />
        </StyledCloseComponent>
        {screen === "search" ? (
          <>
            <PlayerBox>
              <Player>
                <PlayerImage source={{ uri: user.profilePicUrl }} />
                <PlayerText>{user.username}</PlayerText>
              </Player>
              <StyledButtonModal>
                <ButtonText>Challenge</ButtonText>
              </StyledButtonModal>
              <StyledButtonModal>
                <ButtonText>Chat</ButtonText>
              </StyledButtonModal>
            </PlayerBox>
            <Line />
            <StyledButtonModal>
              <ButtonText>Cancel</ButtonText>
            </StyledButtonModal>
          </>
        ) : (
          <>
            <PlayerBox>
              <Player>
                <PlayerImage source={user1} />
                <PlayerText>Rizwan</PlayerText>
              </Player>
              <PlayerVs>
                <PlayerVSImage source={vs} />
              </PlayerVs>
              <Player>
                <PlayerImage source={waitingImg} />
                <PlayerText>....</PlayerText>
              </Player>
            </PlayerBox>
            <MsgBox type="waiting">Waiting for Opponent...</MsgBox>
            <StyledButtonModal>
              <ButtonText>Cancel</ButtonText>
            </StyledButtonModal>
          </>
        )}
      </StyledModalWrapper>
    </StyledModal>
  );
};

export default ModalWrapper;
