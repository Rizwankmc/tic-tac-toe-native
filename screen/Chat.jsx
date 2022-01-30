import { StatusBar } from "expo-status-bar";
import React from "react";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import {
  InnerContainer,
  PageTitle,
  StyledContainer,
} from "../components/styles";

const Chat = () => {
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageTitle>Chat</PageTitle>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

export default Chat;
