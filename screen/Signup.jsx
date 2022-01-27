import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import React, { useState } from "react";
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
import { registerUser } from "../utils/authApis";

const Signup = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleRegister = async (value) => {
    console.log("values =>", value);
    await registerUser(value, setMsg, setLoading);
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
            initialValues={{ username: "", password: "", name: "" }}
            onSubmit={(value) => {
              handleRegister(value);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <TextInput
                  label={"Full name"}
                  placeholder="Enter your name"
                  placeholderTextColor={Colors.darkLight}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                />
                <TextInput
                  label={"Email/Username"}
                  placeholder="Email or Username"
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
                <MsgBox>{msg}</MsgBox>
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>Submit</ButtonText>
                </StyledButton>
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
