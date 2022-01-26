import { View } from "react-native";
import { StyledInputLabel, StyledTextInput } from "./styles";

const TextInput = ({ label, ...props }) => {
  return (
    <View>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
    </View>
  );
};

export default TextInput;
