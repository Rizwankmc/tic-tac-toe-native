import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import logo from "../assets/tictactoe.jpg";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import {
  ButtonText,
  Colors,
  ExtraText,
  ExtraView,
  InnerContainer,
  Line,
  MsgBox,
  PageLogo,
  PageTitle,
  StyledButton,
  StyledContainer,
  StyledFormArea,
  SubTitle,
  TextLinkContent,
} from "../components/styles";
import TextInput from "../components/TextInput";
import { registerUser, usernameAvailabilityCheck } from "../utils/authApis";

const Signup = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("");
  const [availableMsg, setAvailableMsg] = useState("");
  const [availableType, setAvailableType] = useState("");

  useEffect(() => {
    if (msgType === "SUCCESS") {
      console.log("ddd");
      navigation.navigate("EmailOtp");
    }
  }, [msgType]);

  const handleRegister = async (value) => {
    console.log("values =>", value);
    await registerUser(value, setMsg, setLoading, setMsgType);
  };

  const checkUsername = async (e) => {
    console.log("Username =>", e.nativeEvent.text);
    await usernameAvailabilityCheck(
      e.nativeEvent.text,
      setAvailableMsg,
      setAvailableType
    );
  };

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageLogo source={logo} resizeMode="cover" />
          <PageTitle>Tic Tac Toe</PageTitle>
          <SubTitle>Account Sign up</SubTitle>
          <Formik
            initialValues={{ email: "", password: "", username: "" }}
            onSubmit={(value) => {
              handleRegister(value);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <TextInput
                  label={"Username"}
                  placeholder="Enter your name"
                  placeholderTextColor={Colors.darkLight}
                  onChangeText={handleChange("username")}
                  onBlur={(value) => checkUsername(value)}
                  value={values.name}
                />
                <MsgBox type={availableType}>{availableMsg}</MsgBox>
                <TextInput
                  label={"Email"}
                  placeholder="Email here"
                  placeholderTextColor={Colors.darkLight}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                />
                <TextInput
                  label={"Password"}
                  placeholder="* * * * * * * * * * "
                  placeholderTextColor={Colors.darkLight}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry={true}
                />
                <MsgBox type={msgType}>{msg}</MsgBox>
                {loading ? (
                  <StyledButton disabled={true}>
                    <ActivityIndicator size="large" color={Colors.primary} />
                  </StyledButton>
                ) : (
                  <StyledButton onPress={handleSubmit}>
                    <ButtonText>Submit</ButtonText>
                  </StyledButton>
                )}
                <Line />
                <ExtraView>
                  <ExtraText>Already have an account?</ExtraText>
                  <TextLinkContent onPress={() => navigation.navigate("Login")}>
                    Login
                  </TextLinkContent>
                </ExtraView>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

export default Signup;
