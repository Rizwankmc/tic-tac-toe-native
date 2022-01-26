// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screen/Login";
import Signup from "../screen/Signup";
//import Game from "../screen/Game";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        {/*<Stack.Screen name="Game" component={Game} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
