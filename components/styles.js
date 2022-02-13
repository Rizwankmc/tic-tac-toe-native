import styled from "styled-components";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import Constants from "expo-constants";

const StatusHeightBar = Constants.statusBarHeight;

export const Colors = {
  primary: "#fff",
  secondary: "#E5E7EB",
  tertiary: "#1F2937",
  darkLight: "#9CA3AF",
  brand: "#6D28D9",
  green: "#10B981",
  red: "#EF4444",
};

const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusHeightBar + 10}px;
  background-color: ${primary};
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;
export const ChatInnerContainer = styled.View`
flex: 1;
width: 100%;
align-items: center;
background-color:white;
`;
export const ChatPageContainer =styled.View`
width:100%;
flex:1;
padding: 20px;
overflow:hidden;
background-color:white;
`;
export const PageLogo = styled.Image`
  width: 250px;
  height: 250px;
`;

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  padding: 10px;

`;
export const ChatPageTitle = styled.Text`
font-size: 30px;
text-align: left;
font-weight: bold;
color: ${brand};
padding-left: 10px;
width:100%
background-color:white;
margin-top:50px;
margin-bottom:30px;
`;
export const SubTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary};
`;
export const StyledFormArea = styled.View`
  width: 90%;
`;

export const StyledTextInput = styled.TextInput`
  background-color: ${secondary};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
  color: ${tertiary};
  font-size: 13px;
  text-align: left;
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${brand};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;
`;

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;
`;

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
  color: ${(props) =>
    props.type === "SUCCESS" ? green : props.type === "waiting" ? brand : red};
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${darkLight};
  margin-vertical: 10px;
`;

export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const ExtraText = styled.Text`
  justify-content: center;
  align-content: center;
  color: ${tertiary};
  font-size: 15px;
`;
export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const TextLinkContent = styled.Text`
  color: ${brand};
  font-size: 15px;
`;

export const GridContainer = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background-color: ${primary};
  width: 100%;
`;

export const GridItem = styled.TouchableOpacity`
  background-color: #f1f1f1;
  align-items: center;
  margin: 5px;
`;

export const GridItemImage = styled.Image`
  width: 70px;
  height: 70px;
`;
export const GridItemText = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

export const StyledModal = styled.Modal`
  height: 400px;
  width: 350px;
  background-color: #f1f1f1;
  position: absolute;
`;
export const StyledModalWrapper = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${secondary};
  height: 70%;
  width: 95%;
  border-radius: 10px;
  border-width: 1px;
  border-color: #fff;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;
export const ProfileImage = styled.Image`
  width: 250px;
  height: 250px;
`;

export const StyledCloseComponent = styled.Text`
  position: absolute;
  top: 5px;
  right: 5px;
  height: 40px;
  width: 40px;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 40px;
`;
export const ModalClose = styled.Image`
  height: 20px;
  width: 20px;
`;
export const PlayerImage = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 100px;
`;
export const PlayerBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin-bottom: 10px;
`;
export const Player = styled.View`
  margin: 20px 5px;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
`;
export const PlayerGameSection = styled.View`
  margin: 20px 5px;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  margin: 0px auto;
  display: flex;
`;
export const PlayerText = styled.Text`
  font-size: 18px;
  color: black;
  text-align: center;
  margin-top: 15px;
  background-color: ${brand};
  color: white;
  padding: 8px 20px;
  font-size: 15px;
  border-radius: 20px;
`;

export const ChatUser = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-bottom:30px;
`;
export const ChatUserProfileArea = styled.TouchableOpacity`
display: flex;
flex-direction: row;
width: 100%;
align-items:center;
margin-top:20px;
`;

export const ChatUserImage = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 50px;
  margin: 5px;
`;

export const ChatUserDetailImage = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  margin: 5px;
`;

export const ChatUserTextContianer = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 10px;
`;

export const ChatUserName = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;

export const ChatUserLastMessage = styled.Text`
  font-size: 14px;
`;

export const StyledButtonModal = styled.TouchableOpacity`
  padding: 5px;
  background-color: ${red};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 40px;
  width: 60%;
  margin-top: 10px;
`;
export const PlayerVs = styled.View`
  height: 50px;
  width: 50px;
`;

export const PlayerVSImage = styled.Image`
  height: 50px;
  width: 50px;
  margin-top: 80px;
`;

export const Gamecontainer = styled.View`
  background-color: ${darkLight};
  text-align: center;
  height: 100%;
  padding: 20px;
`;

export const WelcomeText = styled.Text`
  color: white;
  font-size: 22px;
  font-weight: 700;
`;

export const GamePlayerBox = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 50px;
`;

export const GamePlayer = styled.View`
  color: red;
  width: 50%;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;
export const GamePlayerText = styled.Text`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;
export const Playericon = styled.View`
  background-color: black;
  width: auto;
  padding: 6px;
  margin: 10px auto;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  color: white;
  font-size: 18px;
  font-weight: 700;
  margin-top: 10px;
  border-radius: 5px;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Gamebg = styled.View`
  background-color: #000;
  padding: 30px;
  margin-top: 30px;
  border-radius: 8px;
  width: 80%;
  margin: 80px auto;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 268px;
  max-width: 400px;
  color: white;
`;
export const Gamerow1 = styled.TouchableOpacity`
  color: white;
  width: 100%;
  height: 100%;
`;
export const GameBorder = styled.View`
  display: flex;
  flex-direction: row;
  height: 68px;
`;
export const Box1 = styled.TouchableOpacity`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 2px solid white;
  border-top-color: transparent;
  border-left-color: transparent;
`;
export const Box2 = styled.TouchableOpacity`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 2px solid white;
  border-top-color: transparent;
`;
export const Box3 = styled.TouchableOpacity`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 2px solid white;
  border-top-color: transparent;
  border-right-color: transparent;
`;
export const Box4 = styled.TouchableOpacity`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 2px solid white;
  border-left-color: transparent;
`;
export const Box5 = styled.TouchableOpacity`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 2px solid white;
`;
export const Box6 = styled.TouchableOpacity`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 2px solid white;
  border-right-color: transparent;
`;
export const Box7 = styled.TouchableOpacity`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 2px solid white;
  border-left-color: transparent;
  border-bottom-color: transparent;
`;
export const Box8 = styled.TouchableOpacity`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 2px solid white;
  border-bottom-color: transparent;
`;
export const Box9 = styled.TouchableOpacity`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 2px solid white;
  border-right-color: transparent;
  border-bottom-color: transparent;
`;

export const NewChallangeBox = styled.View`
  width: 100%;
  margin: 20px auto;
`;
export const NewChallanagePlayer = styled.View`
  margin: 0px auto;
`;
export const AcceptButton = styled.Text`
  color: ${primary};
  font-size: 16px;
`;
export const RejectButton = styled.Text`
  color: ${primary};
  font-size: 16px;
`;
export const AcceptButtonModal = styled.TouchableOpacity`
  padding: 5px;
  background-color: ${brand};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 40px;
  width: 35%;
  margin-top: 10px;
  margin-left: auto;
`;
export const RejectButtonModal = styled.TouchableOpacity`
  padding: 5px;
  background-color: ${red};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 40px;
  width: 35%;
  margin-top: 10px;
  margin-left: 20px;
`;
export const ChallangeButton = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
`;

export const BoxItem = styled.View`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
export const BoxItemText = styled.Text`
  color: white;
`;

export const GameExitButton = styled.TouchableOpacity`
  padding: 5px;
  background-color: ${red};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 40px;
  width: 20%;
  margin-top: 10px;
`;
export const GameExitSection = styled.View`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  margin-top: 20px;
`;
export const GameExitText = styled.Text`
  color: white;
  font-size: 16px;
`;
export const PlayerTextGame = styled.Text`
  font-size: 18px;
  color: black;
  text-align: center;
  margin-top: 15px;
  background-color: ${brand};
  color: white;
  padding: 8px 30px;
  font-size: 15px;
  border-radius: 20px;
`;
export const currentPlayer = styled.View`
background-color:red;
padding:20px;
`;
export const ChatList = styled.View`
width:100%;
`;
export const MyChat = styled.TouchableOpacity`
width:80%;
margin-left:auto;
background-color:${brand};
padding:8px 20px;
border-radius:50px;
margin-bottom:10px;
margin-top:10px;
`;
export const MyChatText = styled.Text`
color:white;
text-align:right;
margin-right:10px
`;
export const OtherChat = styled.TouchableOpacity`
width:80%;
margin-right:auto;
background-color:${darkLight};
padding:8px 20px;
border-radius:50px;
margin-bottom:10px;
margin-top:10px;
`;
export const OtherChatText = styled.Text`
color:white;
margin-left:10px;
`;

export const ChatDetailsArea = styled.View`
width:100%;
heightL100%;
`;
export const ChatDetailsPage = styled.View`
height:100%;
`;