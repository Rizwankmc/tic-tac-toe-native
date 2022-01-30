import { StatusBar } from "expo-status-bar";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useState } from "react";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import {
  ButtonText,
  InnerContainer,
  PageTitle,
  ProfileImage,
  StyledButton,
  StyledContainer,
} from "../components/styles";
import { Platform } from "react-native";
import { CredentailsContext } from "../utils/context";

const UserProfile = () => {
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const [profilePhoto, setProfilePhoto] = useState();
  const { user } = useContext(CredentailsContext);

  const handleLogout = () => {
    AsyncStorage.clear();
    context.setStoredToken(null);
    context.setUser({});
  };

  const pickImage = async () => {
    const { status_roll } = await Permissions.askAsync(
      Permissions.MEDIA_LIBRARY
    );
    // No permissions request is necessary for launching the image library
    console.log("status", status_roll);
    if (status_roll === "granted") {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log(result);

      if (!result.cancelled) {
        setProfilePhoto(result.uri);
      }
    }
  };

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageTitle>UserProfile</PageTitle>

          <ProfileImage source={{ uri: user.profilePicUrl }}></ProfileImage>
          <StyledButton onPress={pickImage}>
            <ButtonText>Change Profile</ButtonText>
          </StyledButton>
          <StyledButton onPress={handleLogout}>
            <ButtonText>Logout</ButtonText>
          </StyledButton>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

export default UserProfile;
