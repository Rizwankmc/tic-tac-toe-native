import RootStack from "./navigators/Rootstack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";
import { useState } from "react";
import { CredentailsContext } from "./utils/context";

export default function App() {
  const [appReady, setAppReady] = useState(false);
  const [storedToken, setStoredToken] = useState(null);

  const checkLoginCredentials = async () => {
    const result = await AsyncStorage.getItem("token");
    if (result) {
      setStoredToken(result);
    } else {
      setStoredToken(null);
    }
  };

  if (!appReady) {
    return (
      <AppLoading
        startAsync={checkLoginCredentials}
        onFinish={() => setAppReady(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <CredentailsContext.Provider value={{ storedToken, setStoredToken }}>
      <RootStack />
    </CredentailsContext.Provider>
  );
}

//const styles = StyleSheet.create({
//  container: {
//    backgroundColor: "#158b7f",
//    textAlign: "center",
//    height: "100vh",
//    flex: 1,
//  },
//  header: {
//    flex: 1,
//    justifyContent: "flex-end",
//    paddingHorizontal: 20,
//    paddingBottom: 50,
//  },
//  footer: {
//    flex: 3,
//    backgroundColor: "#fff",
//    borderTopLeftRadius: 30,
//    borderTopRightRadius: 30,
//    paddingHorizontal: 20,
//    paddingVertical: 30,
//  },
//  text_header: {
//    color: "#fff",
//    fontWeight: 700,
//    fontSize: 30,
//  },
//  text_footer:{
//   color:'#05375a',
//   fontSize:18,
//  },
//  TextInput: {
//    flex: 1,
//    paddingLeft: 10,
//    color: "#05375a",
//  },
//});
