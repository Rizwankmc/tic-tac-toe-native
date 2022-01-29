import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import React, { useContext, useState } from "react";
import user1 from "../assets/profile/1.jpg";
import user2 from "../assets/profile/2.jpg";
import user3 from "../assets/profile/3.jpg";
import user4 from "../assets/profile/4.jpg";
import user5 from "../assets/profile/5.jpg";
import user6 from "../assets/profile/6.jpg";
import user7 from "../assets/profile/7.jpg";
import user8 from "../assets/profile/8.jpg";
import user9 from "../assets/profile/9.jpg";
import user10 from "../assets/profile/10.jpg";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import {
  ButtonText,
  GridContainer,
  GridItem,
  GridItemImage,
  GridItemText,
  InnerContainer,
  Line,
  MsgBox,
  PageLogo,
  PageTitle,
  StyledButton,
  StyledContainer,
  StyledFormArea,
  SubTitle,
} from "../components/styles";
import TextInput from "../components/TextInput";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { ActivityIndicator, Image, Text } from "react-native";
import { searchUser } from "../utils/authApis";
import { CredentailsContext } from "../utils/context";

const GameLobby = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("");
  const context = useContext(CredentailsContext);

  const SearchUser = async (value) => {
    console.log("e =>", value);
    await searchUser(value, setUsers, setMsg, setMsgType, context.storedToken);
  };
  console.log("users=>", users);
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageTitle>Tic Tac Toe</PageTitle>
          <SubTitle>Search User to Play</SubTitle>
          <Formik initialValues={{ username: "" }}>
            {({ values }) => (
              <StyledFormArea>
                <TextInput
                  label={"Enter Username"}
                  placeholder="Search user"
                  placeholderTextColor={Colors.darkLight}
                  onChangeText={(e) => SearchUser(e)}
                  value={values.name}
                />
                <MsgBox type={msgType}>{msg}</MsgBox>
              </StyledFormArea>
            )}
          </Formik>
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
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

export default GameLobby;
