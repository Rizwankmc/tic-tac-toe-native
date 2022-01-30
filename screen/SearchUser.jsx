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
import ModalWrapper from "../components/Modal";

const SearchUser = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("");
  const [show, setShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const context = useContext(CredentailsContext);

  const handleSearch = async (value) => {
    await searchUser(value, setUsers, setMsg, setMsgType, context.storedToken);
  };

  const handleUserSelect = async (user) => {
    setSelectedUser(user);
    setShow(true);
  };
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
            {users
              ? users.map((user) => (
                  <GridItem
                    key={user._id}
                    onPress={() => handleUserSelect(user)}
                  >
                    <GridItemImage
                      source={{ uri: user.profilePicUrl }}
                      resize="cover"
                    />
                    <GridItemText>{user.username}</GridItemText>
                  </GridItem>
                ))
              : ""}
          </GridContainer>
          <ModalWrapper
            show={show}
            setShow={setShow}
            screen="search"
            user={selectedUser}
          />
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

export default SearchUser;
