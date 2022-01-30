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
} from "./styles";

const ModalWrapper = ({ show, setShow }) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={show}
      hasBackdrop={true}
      backdropOpacity={0.8}
      backdropColor={"rgba(255, 0, 0, 0.8)"}
      onRequestClose={() => {
        setShow(!modalVisible);
      }}
    >
      <StyledModalWrapper>
        <StyledCloseComponent onPress={() => setShow(false)}>
          <ModalClose source={close} />
        </StyledCloseComponent>
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
      </StyledModalWrapper>
    </Modal>
  );
};

export default ModalWrapper;
