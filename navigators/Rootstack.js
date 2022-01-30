// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHome,
  faSearch,
  faComment,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Login from "../screen/Login";
import Signup from "../screen/Signup";
import { Colors } from "../components/styles";
import { CredentailsContext } from "../utils/context";
import EmailOtp from "../screen/EmailOtpPage";
import GameLobby from "../screen/GameLobby";
import SearchUser from "../screen/SearchUser";
import Chat from "../screen/Chat";
import UserProfile from "../screen/UserProfile";

//import Game from "../screen/Game";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "GameLobby") {
          iconName = faHome;
        } else if (route.name === "Search") {
          iconName = faSearch;
        } else if (route.name === "Chat") {
          iconName = faComment;
        } else if (route.name === "UserProfile") {
          iconName = faUser;
        }
        return (
          <FontAwesomeIcon
            icon={iconName}
            style={focused ? { color: "tomato" } : {}}
          />
        );
      },
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray",
    })}
  >
    <Tab.Screen name="GameLobby" component={GameLobby} />
    <Tab.Screen name="Search" component={SearchUser} />
    <Tab.Screen name="Chat" component={Chat} />
    <Tab.Screen name="UserProfile" component={UserProfile} />
  </Tab.Navigator>
);

const RootStack = () => {
  return (
    <CredentailsContext.Consumer>
      {({ storedToken }) => (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerStyle: {
                backgroundColor: "transparent",
              },
              headerTintColor: Colors.tertiary,
              headerTransparent: true,
              headerTitle: "",
              headerLeftContainerStyle: {
                paddingLeft: 20,
              },
            }}
          >
            {storedToken ? (
              <Stack.Screen name="lobby" component={TabNavigator} />
            ) : (
              <>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="EmailOtp" component={EmailOtp} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </CredentailsContext.Consumer>
  );
};

export default RootStack;
