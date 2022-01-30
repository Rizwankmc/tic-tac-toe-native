import { Button, Modal, Text, View } from "react-native";
import close from "../assets/close.png";
import user1 from "../assets/profile/1.jpg";
import user2 from "../assets/profile/2.jpg";
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
} from "./styles";

const ModalWrapper = ({ show, setShow }) => {
  return (
    <StyledModal
      animationType="fade"
      transparent={true}
      visible={show}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
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
            <PlayerImage source={user2} />
            <PlayerText>Farhaj</PlayerText>
          </Player>
        </PlayerBox>
        <StyledButtonModal>
          <ButtonText>Continue to Game</ButtonText>
        </StyledButtonModal>
      </StyledModalWrapper>
    </StyledModal>
  );
};

export default ModalWrapper;
