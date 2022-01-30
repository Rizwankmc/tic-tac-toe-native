import { StatusBar } from "expo-status-bar";
import React from "react";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import {
  InnerContainer,
  PageTitle,
  StyledContainer,
} from "../components/styles";

const UserProfile = () => {
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageTitle>UserProfile</PageTitle>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

export default UserProfile;
