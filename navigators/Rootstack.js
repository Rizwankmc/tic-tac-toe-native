// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screen/Login";
import Signup from "../screen/Signup";
import { Colors } from "../components/styles";
import { CredentailsContext } from "../utils/context";
import EmailOtp from "../screen/EmailOtpPage";
import GameLobby from "../screen/GameLobby";
//import Game from "../screen/Game";

const Stack = createNativeStackNavigator();

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
              <Stack.Screen name="GameLobby" component={GameLobby} />
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
