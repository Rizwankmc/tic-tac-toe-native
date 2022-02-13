import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
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
  ChatPageContainer,
  ChatInnerContainer,
  ChatPageTitle,
} from "../components/styles";
import { CredentailsContext } from "../utils/context";
import ChatDetails from "./ChatDetails";

const Chat = () => {
  const { user, selectedChatUser } = useContext(CredentailsContext);
  const [openChat, setOpenChat] = useState(false);
  const handleOpenChat = () => {
    setOpenChat(!openChat);
  };
  return (
    <KeyboardAvoidingWrapper>
      <>
        {openChat ? (
          <ChatDetails />
        ) : (
          <ChatPageContainer>
            <StatusBar style="dark" />
            <ChatPageTitle>Chat</ChatPageTitle>
            <ChatInnerContainer>
              {selectedChatUser ? (
                <></>
              ) : (
                <>
                  <ChatUser onPress={handleOpenChat}>
                    <ChatUserImage
                      source={{ uri: user.profilePicUrl }}
                      resize="cover"
                    />
                    <ChatUserTextContianer>
                      <ChatUserName>Rizwan Ahamad</ChatUserName>
                      <ChatUserLastMessage>Hello , How's u?</ChatUserLastMessage>
                    </ChatUserTextContianer>
                  </ChatUser>
                  <ChatUser>
                    <ChatUserImage
                      source={{ uri: user.profilePicUrl }}
                      resize="cover"
                    />
                    <ChatUserTextContianer>
                      <ChatUserName>Abrar</ChatUserName>
                      <ChatUserLastMessage>Test Msg</ChatUserLastMessage>
                    </ChatUserTextContianer>
                  </ChatUser>
                  <ChatUser>
                    <ChatUserImage
                      source={{ uri: user.profilePicUrl }}
                      resize="cover"
                    />
                    <ChatUserTextContianer>
                      <ChatUserName>Farhaj</ChatUserName>
                      <ChatUserLastMessage>Hello , How's u?</ChatUserLastMessage>
                    </ChatUserTextContianer>
                  </ChatUser>
                  <ChatUser>
                    <ChatUserImage
                      source={{ uri: user.profilePicUrl }}
                      resize="cover"
                    />
                    <ChatUserTextContianer>
                      <ChatUserName>Ayushi</ChatUserName>
                      <ChatUserLastMessage>Hello , How's u?</ChatUserLastMessage>
                    </ChatUserTextContianer>
                  </ChatUser>
                  <ChatUser>
                    <ChatUserImage
                      source={{ uri: user.profilePicUrl }}
                      resize="cover"
                    />
                    <ChatUserTextContianer>
                      <ChatUserName>Toms</ChatUserName>
                      <ChatUserLastMessage>Hello , How's u?</ChatUserLastMessage>
                    </ChatUserTextContianer>
                  </ChatUser>
                  <ChatUser>
                    <ChatUserImage
                      source={{ uri: user.profilePicUrl }}
                      resize="cover"
                    />
                    <ChatUserTextContianer>
                      <ChatUserName>Jack</ChatUserName>
                      <ChatUserLastMessage>Lorem ipsum dummy test..</ChatUserLastMessage>
                    </ChatUserTextContianer>
                  </ChatUser>
                  <ChatUser>
                    <ChatUserImage
                      source={{ uri: user.profilePicUrl }}
                      resize="cover"
                    />
                    <ChatUserTextContianer>
                      <ChatUserName>Terry</ChatUserName>
                      <ChatUserLastMessage>message</ChatUserLastMessage>
                    </ChatUserTextContianer>
                  </ChatUser>
                  <ChatUser>
                    <ChatUserImage
                      source={{ uri: user.profilePicUrl }}
                      resize="cover"
                    />
                    <ChatUserTextContianer>
                      <ChatUserName>Testing user</ChatUserName>
                      <ChatUserLastMessage>message</ChatUserLastMessage>
                    </ChatUserTextContianer>
                  </ChatUser>
                  <ChatUser>
                    <ChatUserImage
                      source={{ uri: user.profilePicUrl }}
                      resize="cover"
                    />
                    <ChatUserTextContianer>
                      <ChatUserName>Neo</ChatUserName>
                      <ChatUserLastMessage>message</ChatUserLastMessage>
                    </ChatUserTextContianer>
                  </ChatUser>
                  <ChatUser>
                    <ChatUserImage
                      source={{ uri: user.profilePicUrl }}
                      resize="cover"
                    />
                    <ChatUserTextContianer>
                      <ChatUserName>RK </ChatUserName>
                      <ChatUserLastMessage>message</ChatUserLastMessage>
                    </ChatUserTextContianer>
                  </ChatUser>
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
                </>
              )}
            </ChatInnerContainer>
          </ChatPageContainer>
        )}
      </>
    </KeyboardAvoidingWrapper>
  );
};

export default Chat;
