import { StatusBar } from "expo-status-bar";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
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
  const [profilePhoto, setProfilePhoto] = useState();
  const { user } = useContext(CredentailsContext);

  const handleLogout = () => {
    AsyncStorage.clear();
    context.setStoredToken(null);
  };

  const getPermission = async () => {
    if (Platform.OS !== "web") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      return status;
    }
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypesOptions.Images,
        allowEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      if (!result.cancelled) {
        setProfilePhoto(result.uri);
      }
    } catch (error) {
      console.log("Error in image pick");
    }
  };

  const addProfilePhoto = async () => {
    const status = await getPermission();
    if (status !== "granted") {
      alert("We need permission to access your camera roll");
      return;
    }
    pickImage();
  };
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageTitle>UserProfile</PageTitle>
          <ProfileImage source={{ uri: user.profilePicUrl }}></ProfileImage>
          <StyledButton onPress={handleLogout}>
            <ButtonText>Logout</ButtonText>
          </StyledButton>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

export default UserProfile;
