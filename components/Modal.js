import { Button, Modal, Text, View } from "react-native";

const ModalWrapper = ({ show, setShow }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={show}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setShow(!modalVisible);
      }}
    >
      <View style={{ flex: 1 }}>
        <Text>Hello!</Text>
        <Button title="Hide modal" onPress={() => setShow(false)} />
      </View>
    </Modal>
  );
};

export default ModalWrapper;
