import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native";
import logo from "../assets/icon.jpg";
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
import { loginUser } from "../utils/authApis";
import { CredentailsContext } from "../utils/context";

const Login = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("");
  const context = useContext(CredentailsContext);

  useEffect(() => {
    if (msg === "Please verify your email before trying to log in") {
      setMsg("");
      setMsgType("");
      navigation.navigate("EmailOtp");
    }
  }, [msg]);

  const handleLogin = async (value) => {
    const data = await loginUser(value, setMsg, setLoading, setMsgType);
    if (data) {
      await AsyncStorage.setItem("token", data.token);
      await AsyncStorage.setItem("user", JSON.stringify(data.user));
      context.setStoredToken(data.token);
      context.setUser(data.user);
      navigation.navigate("GameLobby");
    }
  };
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageLogo source={logo} resizeMode="cover" />
          <PageTitle>Tic Tac Toe</PageTitle>
          <SubTitle>Account Login</SubTitle>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(value) => {
              handleLogin(value);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
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
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>Sign in with Google</ButtonText>
                </StyledButton>
                <ExtraView>
                  <ExtraText>Don't have an account already?</ExtraText>
                  <TextLinkContent
                    onPress={() => navigation.navigate("Signup")}
                  >
                    Signup
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

export default Login;
