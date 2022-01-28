import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import React, { useState } from "react";
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

const GameLobby = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("");
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageTitle>Tic Tac Toe</PageTitle>
          <SubTitle>Search User to Play</SubTitle>
          <Formik
            initialValues={{ username: "" }}
            onSubmit={(value) => {
              findUser(value);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <TextInput
                  label={"Enter Username"}
                  placeholder="Search user"
                  placeholderTextColor={Colors.darkLight}
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  value={values.name}
                />
                <MsgBox type={msgType}>{msg}</MsgBox>
                {loading ? (
                  <StyledButton disabled={true}>
                    <ActivityIndicator size="large" color={Colors.primary} />
                  </StyledButton>
                ) : (
                  <StyledButton onPress={handleSubmit}>
                    <ButtonText>Search</ButtonText>
                  </StyledButton>
                )}
              </StyledFormArea>
            )}
          </Formik>
          <Line />
          {/*<GridContainer>
            <GridItem>
              <Image source={user1} resize="cover" />
              <Text>Aman</Text>
            </GridItem>
            <GridItem>
              <Image source={user1} resize="cover" />
              <Text>Aman</Text>
            </GridItem>
            <GridItem>
              <Image source={user1} resize="cover" />
              <Text>Aman</Text>
            </GridItem>
            <GridItem>
              <Image source={user1} resize="cover" />
              <Text>Aman</Text>
            </GridItem>
            <GridItem>
              <Image source={user1} resize="cover" />
              <Text>Aman</Text>
            </GridItem>
            <GridItem>
              <Image source={user1} resize="cover" />
              <Text>Aman</Text>
            </GridItem>
            <GridItem>
              <Image source={user1} resize="cover" />
              <Text>Aman</Text>
            </GridItem>
            <GridItem>
              <Image source={user1} resize="cover" />
              <Text>Aman</Text>
            </GridItem>
            <GridItem>
              <Image source={user1} resize="cover" />
              <Text>Aman</Text>
            </GridItem>
            <GridItem>
              <Image source={user1} resize="cover" />
              <Text>Aman</Text>
            </GridItem>
            <GridItem>
              <Image source={user1} resize="cover" />
              <Text>Aman</Text>
            </GridItem>
            <GridItem>
              <Image source={user1} resize="cover" />
              <Text>Aman</Text>
            </GridItem>
          </GridContainer>*/}
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

export default GameLobby;
