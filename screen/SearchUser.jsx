import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import React, { useContext, useState } from "react";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import {
  GridContainer,
  GridItem,
  GridItemImage,
  GridItemText,
  InnerContainer,
  Line,
  MsgBox,
  PageTitle,
  StyledContainer,
  StyledFormArea,
  SubTitle,
} from "../components/styles";
import TextInput from "../components/TextInput";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { searchUser } from "../utils/authApis";
import { CredentailsContext } from "../utils/context";

const SearchUser = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("");
  const context = useContext(CredentailsContext);

  const handleSearch = async (value) => {
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
                  onChangeText={(e) => handleSearch(e)}
                  value={values.name}
                />
                <MsgBox type={msgType}>{msg}</MsgBox>
              </StyledFormArea>
            )}
          </Formik>
          <Line />
          <GridContainer>
            {users.map((user) => (
              <GridItem key={user._id} onPress={() => console.log("ss")}>
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

export default SearchUser;
