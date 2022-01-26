import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope, faLock, faUser,} from "@fortawesome/free-solid-svg-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Create a Account</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Name</Text>
        <View style={styles.action}>
        <FontAwesomeIcon icon={faUser} />
          <TextInput placeholder="Your Email" style={styles.textInput} autoCapitalize="none" />
        </View>
        <Text style={styles.text_password}>Email</Text>
        <View style={styles.action}>
        <FontAwesomeIcon icon={faEnvelope} />
          <TextInput  placeholder="Your Password" style={styles.textInput} autoCapitalize="none" />
        </View>
        <Text style={styles.text_password}> Password</Text>
        <View style={styles.action}>
        <FontAwesomeIcon icon={faLock} />
          <TextInput secureTextEntry={true} placeholder="Your Password" style={styles.textInput} autoCapitalize="none" />
        </View>
        <Text style={styles.text_password}>Confirm Password</Text>
        <View style={styles.action}>
        <FontAwesomeIcon icon={faLock} />
          <TextInput secureTextEntry={true} placeholder="Your Password" style={styles.textInput} autoCapitalize="none" />
        </View>
        <View style={styles.button}>
         <Text style={styles.signin}>SignUp</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.signup}>SignIn</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#158b7f",
    textAlign: "center",
    height: "100vh",
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: 700,
    fontSize: 30,
  },
  text_footer:{
   color:'#05375a',
   fontSize:16,
   textAlign:'left',
   fontWeight:500,
  },
  text_password:{
    color:'#05375a',
    fontSize:16,
    textAlign:'left',
    marginTop:35,
    fontWeight:500,
   },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: "#05375a",
  },
  action:{
    flexDirection:"row",
    marginTop:10,
    borderBottomWidth:1,
    borderBottomColor:'#f2f2f2',
    paddingBottom:5,
  },
  button: {
    marginTop:50
  },
  signin:{
    width:'100%',
    height:45,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:'#158b7f',
    color:'white',
    display:'flex',
    fontWeight:500
  },
  signup:{
    width:'100%',
    height:45,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    borderColor:'#158b7f',
    color:'#158b7f',
    borderWidth:1,
    display:'flex',
    fontWeight:500,
    marginTop:20,
    backgroundColor:'transparent',
  }
});
