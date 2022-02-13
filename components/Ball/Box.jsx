import { Bottom, Middle, Tank, Top } from "./style";
import { View, Text } from "react-native";
import { BoxItem, BoxItemText } from "../styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Box = ({ icon }) => {
  return (
    <BoxItem>
      <BoxItemText>
        <FontAwesomeIcon icon={icon} color="white" />
      </BoxItemText>
    </BoxItem>
  );
};

export default Box;
