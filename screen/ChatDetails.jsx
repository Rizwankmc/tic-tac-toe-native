import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import {
  ChatUserName,
  ChatUserTextContianer,
  ChatPageContainer,
  ChatInnerContainer,
  ChatUserDetailImage,
  ChatUserProfileArea,
  ChatDetailsArea,
  ChatList,
  MyChat,
  MyChatText,
  OtherChat,
  OtherChatText,
  ChatDetailsPage,
} from "../components/styles";
import { CredentailsContext } from "../utils/context";

const ChatDetails = () => {
  const { user, selectedChatUser } = useContext(CredentailsContext);
  return (
    <KeyboardAvoidingWrapper>
      <ChatDetailsPage>
        <ChatPageContainer>
          <StatusBar style="dark" />
          <ChatInnerContainer>
            {selectedChatUser ? (
              <></>
            ) : (
              <>
                <ChatUserProfileArea>
                  <ChatUserDetailImage
                    source={{ uri: user.profilePicUrl }}
                    resize="cover"
                  />
                  <ChatUserTextContianer>
                    <ChatUserName>username</ChatUserName>
                  </ChatUserTextContianer>
                </ChatUserProfileArea>
              </>
            )}
          </ChatInnerContainer>
        </ChatPageContainer>
        <ChatDetailsArea>
          <ChatList>
            <MyChat>
              <MyChatText>My Chat djks sdgdb jdskghdkjb nfdjhjd vdjg dsjksgs bs</MyChatText>
            </MyChat>
            <OtherChat>
              <OtherChatText>Other Text dhvjdbv ghsgsbjh ghsd sdh dgb jsdhgfhhjds</OtherChatText>
            </OtherChat>
            <OtherChat>
              <OtherChatText>Other Text dhvjdbv ghsgsbjh ghsd sdh dgb jsdhgfhhjds</OtherChatText>
            </OtherChat>
            <OtherChat>
              <OtherChatText>Other Text dhvjdbv ghsgsbjh ghsd sdh dgb jsdhgfhhjds</OtherChatText>
            </OtherChat>
            <MyChat>
              <MyChatText>My Chat djks sdgdb jdskghdkjb nfdjhjd vdjg dsjksgs bs</MyChatText>
            </MyChat>
            <OtherChat>
              <OtherChatText>Other Text dhvjdbv ghsgsbjh ghsd sdh dgb jsdhgfhhjds</OtherChatText>
            </OtherChat>
            <MyChat>
              <MyChatText>My Chat djks sdgdb jdskghdkjb nfdjhjd vdjg dsjksgs bs</MyChatText>
            </MyChat>
            <OtherChat>
              <OtherChatText>Other Text dhvjdbv ghsgsbjh ghsd sdh dgb jsdhgfhhjds</OtherChatText>
            </OtherChat>
            <MyChat>
              <MyChatText>My Chat djks sdgdb jdskghdkjb nfdjhjd vdjg dsjksgs bs</MyChatText>
            </MyChat>
            <OtherChat>
              <OtherChatText>Other Text dhvjdbv ghsgsbjh ghsd sdh dgb jsdhgfhhjds</OtherChatText>
            </OtherChat>
            <MyChat>
              <MyChatText>My Chat djks sdgdb jdskghdkjb nfdjhjd vdjg dsjksgs bs</MyChatText>
            </MyChat>
            <OtherChat>
              <OtherChatText>Other Text dhvjdbv ghsgsbjh ghsd sdh dgb jsdhgfhhjds</OtherChatText>
            </OtherChat>
            <MyChat>
              <MyChatText>My Chat djks sdgdb jdskghdkjb nfdjhjd vdjg dsjksgs bs</MyChatText>
            </MyChat>
            <OtherChat>
              <OtherChatText>Other Text dhvjdbv ghsgsbjh ghsd sdh dgb jsdhgfhhjds</OtherChatText>
            </OtherChat>
          </ChatList>
        </ChatDetailsArea>
      </ChatDetailsPage>
    </KeyboardAvoidingWrapper>
  );
};

export default ChatDetails;
