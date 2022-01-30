import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import {
  ChatUser,
  ChatUserImage,
  ChatUserLastMessage,
  ChatUserName,
  ChatUserTextContianer,
  InnerContainer,
  Line,
  PageTitle,
  StyledContainer,
} from "../components/styles";
import { CredentailsContext } from "../utils/context";

const Chat = () => {
  const { user, selectedChatUser } = useContext(CredentailsContext);
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          {selectedChatUser ? (
            <></>
          ) : (
            <>
              <PageTitle>Chat</PageTitle>
              <ChatUser>
                <ChatUserImage
                  source={{ uri: user.profilePicUrl }}
                  resize="cover"
                />
                <ChatUserTextContianer>
                  <ChatUserName>username</ChatUserName>
                  <ChatUserLastMessage>message</ChatUserLastMessage>
                </ChatUserTextContianer>
              </ChatUser>
              <Line />
              <ChatUser>
                <ChatUserImage
                  source={{ uri: user.profilePicUrl }}
                  resize="cover"
                />
                <ChatUserTextContianer>
                  <ChatUserName>username</ChatUserName>
                  <ChatUserLastMessage>message</ChatUserLastMessage>
                </ChatUserTextContianer>
              </ChatUser>
              <Line />
              <ChatUser>
                <ChatUserImage
                  source={{ uri: user.profilePicUrl }}
                  resize="cover"
                />
                <ChatUserTextContianer>
                  <ChatUserName>username</ChatUserName>
                  <ChatUserLastMessage>message</ChatUserLastMessage>
                </ChatUserTextContianer>
              </ChatUser>
              <Line />
            </>
          )}
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

export default Chat;
