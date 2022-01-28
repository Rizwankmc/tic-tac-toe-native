import { StatusBar } from "expo-status-bar";
import logo from "../assets/tictactoe.jpg";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import {
  ButtonText,
  Colors,
  InnerContainer,
  MsgBox,
  PageLogo,
  PageTitle,
  StyledButton,
  StyledContainer,
  StyledFormArea,
  SubTitle,
} from "../components/styles";
import TextInput from "../components/TextInput";
import { ActivityIndicator } from "react-native";
import { verifyOtp } from "../utils/authApis";

const EmailOtp = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("");

  const handleOtp = async (value) => {
    await verifyOtp(value, setLoading, setMsg, setMsgType);
  };

  useEffect(() => {
    if (msgType === "SUCCESS") {
      navigation.navigate("GameLobby");
    }
  }, [msgType]);
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageLogo source={logo} resizeMode="cover" />
          <PageTitle>Tic Tac Toe</PageTitle>
          <SubTitle>Email Verify</SubTitle>
          <Formik
            initialValues={{ otp: "" }}
            onSubmit={(value) => {
              handleOtp(value);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <TextInput
                  label={"Enter Otp"}
                  placeholder="Enter OTP here"
                  placeholderTextColor={Colors.darkLight}
                  onChangeText={handleChange("otp")}
                  onBlur={handleBlur("otp")}
                  value={values.name}
                />
                <MsgBox type={msgType}>{msg}</MsgBox>
                {loading ? (
                  <StyledButton disabled={true}>
                    <ActivityIndicator size="large" color={Colors.primary} />
                  </StyledButton>
                ) : (
                  <StyledButton onPress={handleSubmit}>
                    <ButtonText>Verify</ButtonText>
                  </StyledButton>
                )}
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

export default EmailOtp;
