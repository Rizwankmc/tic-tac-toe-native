import { Button, Modal, Text, View } from "react-native";
import { StyledModalWrapper, StyledModal } from "./styles";

const ModalWrapper = ({ show, setShow }) => {
  return (
    <StyledModal animationType="slide"
    transparent={false}
    visible={show}
    onRequestClose={() => {
      Alert.alert("Modal has been closed.");
      setShow(!modalVisible);
    }}>
     
      <StyledModalWrapper>
        <Button title="Hide modal" onPress={() => setShow(false)} />
        <Text>Hello!</Text>
      </StyledModalWrapper>
    </StyledModal>
  );
};

export default ModalWrapper;
